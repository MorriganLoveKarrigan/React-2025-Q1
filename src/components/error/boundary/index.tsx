import React, { Component } from 'react';

class ErrorBoundary extends Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error) {
    this.setState({ hasError: true });
    console.error('Caught an error:', error);
  }

  handleReset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col h-screen justify-center items-center space-y-2">
          <div className="text-xl text-red-500 font-bold">
            Something went wrong. Please try again later.
          </div>
          <button
            className="mt-4 bg-red-500 px-4 py-2 rounded"
            onClick={this.handleReset}
          >
            Please restore operation.
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
