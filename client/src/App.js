import React, { Component } from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import MovieList from './components/MovieList';
import NewMovieForm from './components/NewMovieForm'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <NewMovieForm></NewMovieForm>
          <MovieList></MovieList>
        </div>
      </ApolloProvider>
    )
  }
}


export default App;
