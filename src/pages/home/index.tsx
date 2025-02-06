import { Component } from 'react';
import CardsList from '@/components/cards-list';
import SearchBar from '@/components/search-bar';
import { getCharacters } from '@/shared/api/characters.ts';
import { getLocalStorage, setLocalStorage } from '@/utils/storage.ts';
import type { Character } from '@/shared/types/character.ts';
import type { MetaInfo } from '@/shared/api/types';
import Pagination from '@/components/pagination';

interface HomePageState {
  searchName: string;
  results: Character[];
  meta: MetaInfo | null;
  page: number;
  loading: boolean;
  error: string;
}

class HomePage extends Component<object, HomePageState> {
  constructor(props: object) {
    super(props);
    this.state = {
      searchName: '',
      results: [],
      meta: null,
      loading: false,
      error: '',
      page: 1,
    };
  }

  componentDidMount() {
    const savedSearchTerm = getLocalStorage('searchName');
    if (savedSearchTerm !== null) {
      this.setState({ searchName: savedSearchTerm }, () => {
        void this.fetchCharacters();
      });
    } else {
      void this.fetchCharacters();
    }
  }

  fetchCharacters = async () => {
    const query = {
      page: this.state.page,
      name: this.state.searchName,
    };
    this.setState({ loading: true, error: '' });
    try {
      const response = await getCharacters(query);
      this.setState({ results: response.results, meta: response.info });
    } catch (err: unknown) {
      console.error(err);
      if (err instanceof Error) {
        this.setState({ error: err.message });
      } else {
        this.setState({ error: 'Unknown Error' });
      }
    } finally {
      this.setState({ loading: false });
    }
  };

  handleSearch = (searchName: string) => {
    setLocalStorage('searchName', searchName);
    this.setState({ searchName: searchName }, () => {
      void this.fetchCharacters();
    });
  };

  onPageChange = (page: number) => {
    this.setState({ page: page }, () => {
      void this.fetchCharacters();
    });
  };
  render() {
    const { searchName, results, loading, page, meta, error } = this.state;

    return (
      <div className="p-4 max-w-6xl mx-auto">
        <SearchBar searchName={searchName} onSearch={this.handleSearch} />
        <CardsList results={results} loading={loading} error={error} />
        {meta ? (
          <Pagination
            currentPage={page}
            meta={meta}
            onPageChange={this.onPageChange}
          />
        ) : null}
      </div>
    );
  }
}

export default HomePage;
