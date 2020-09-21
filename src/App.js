import React , { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/Search';

import './App.css';

function App () {

  const [people, setPeople] = useState ([])
  const [isLoading, setIsLoading] = useState ([true])
  const [query, setQuery] = useState ('') 

  useEffect ( () => {

    const fetchPeople = async () => {

      const  result = await axios (`https://www.breakingbadapi.com/api/characters?name=${query}`)

      setPeople( result.data )
      setIsLoading( false )

    }

    fetchPeople()

  }, [query])

  return (
    <div className="container">
        <Header />
        <Search  getQuery = { ( q ) => setQuery(q) } />
        <CharacterGrid isLoading = { isLoading } people = { people } />
    </div>
  );

}

export default App;
