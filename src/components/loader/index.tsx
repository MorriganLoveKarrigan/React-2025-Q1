import { Component } from 'react';

class Loader extends Component {
  render() {
    return Array.from({ length: 8 }).map((_, index) => (
      <div key={index} className="flex justify-center items-center h-64">
        <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    ));
  }
}

export default Loader;
