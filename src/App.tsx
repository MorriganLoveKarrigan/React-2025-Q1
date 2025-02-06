import { Component } from 'react';
import ErrorBoundary from './components/error/boundary';
import HomePage from './pages/home';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <HomePage />
      </ErrorBoundary>
    );
  }
}

export default App;
