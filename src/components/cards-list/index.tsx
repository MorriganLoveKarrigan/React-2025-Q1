import { Component } from 'react';
import Card from '@/components/card';
import { Character } from '@/shared/types/character.ts';
import Loader from '@/components/loader';
import NoResult from '@/components/error/no-result';

interface ResultsListProps {
  results: Character[];
  loading: boolean;
  error: string;
}

class CardsList extends Component<ResultsListProps> {
  render() {
    const { results, loading, error } = this.props;

    return (
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr">
          {loading ? (
            <Loader />
          ) : (
            results.map((item) => <Card key={item.id} item={item} />)
          )}
        </div>
        <div>{error ? <NoResult error={error} /> : null}</div>
      </div>
    );
  }
}

export default CardsList;
