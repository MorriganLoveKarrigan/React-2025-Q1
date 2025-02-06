import { Component } from 'react';
import { NoResultProps } from '@/components/error/no-result/types.ts';

class NoResult extends Component<NoResultProps> {
  render() {
    const { error } = this.props;
    return (
      <div className="w-full text-center">
        <span className="text-xl">Error occurred: </span>
        <span className="text-xl text-red-500">{error}</span>
      </div>
    );
  }
}

export default NoResult;
