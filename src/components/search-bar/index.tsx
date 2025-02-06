import { ChangeEvent, Component } from 'react';
import ErrorBtn from '@/components/error/button';
import {
  SearchBarProps,
  SearchBarState,
} from '@/components/search-bar/types.ts';

class SearchBar extends Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      input: this.props.searchName,
    };
  }

  componentDidUpdate(prevProps: SearchBarProps) {
    if (prevProps.searchName !== this.props.searchName) {
      this.setState({ input: this.props.searchName });
    }
  }

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ input: e.target.value });
  };

  handleSearchClick = () => {
    this.props.onSearch(this.state.input);
  };

  render() {
    return (
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleInputChange}
          className="border border-emerald-600 p-3 rounded w-full"
          placeholder="Search..."
        />
        <button
          onClick={this.handleSearchClick}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
        <ErrorBtn />
      </div>
    );
  }
}

export default SearchBar;
