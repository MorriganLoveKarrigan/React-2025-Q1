import React from 'react';
import { ErrorBtnState } from '@/components/error/button/types.ts';

export default class ErrorBtn extends React.Component<object, ErrorBtnState> {
  constructor(props: object) {
    super(props);
    this.state = { hasError: false };
  }
  handleClick = () => {
    this.setState({ hasError: true });
  };

  render(): React.ReactNode {
    if (this.state.hasError) {
      throw new Error('Oops!');
    }
    return (
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        type="button"
        onClick={this.handleClick}
      >
        Throw Error
      </button>
    );
  }
}
