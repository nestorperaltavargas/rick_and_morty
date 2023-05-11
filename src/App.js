import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import About from "./components/About"
import Detail from "./components/Detail"


function App () {

  const [characters, setCharacters] = useState([]);

  const onSearch = (character) => {
      fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
        } else {
            window.alert('No hay personajes con ese ID');
        }
      });
  }

  const onClose = (id) => {
    setCharacters(characters.filter(character => character.id !== id))
  }

  return (
    <>
      <Nav onSearch={onSearch}/>
      <Routes className='App' style={{ padding: '25px' }}>
        <Route path="/" element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  )
}

export default App;
