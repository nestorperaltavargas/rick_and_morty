import styled from "styled-components";
import { useState } from "react";

const SearchInput = styled.input`
   margin:4px;
`;

const SearchButton = styled.button`
   background-color:black;
   color:white;
`;

const SearchBar = ({onSearch}) => {

   const [character, setCharacter] = useState("");

   const handleOnChange = (e) => {
      const inputChange = e.target.value;
      setCharacter(inputChange);
   }

   return (
      <div>
         <SearchInput type="search" onChange={handleOnChange} value={character}/>
         <SearchButton type="submit" onClick={() => onSearch(character)}>Agregar</SearchButton>
      </div>
   );
}

export default SearchBar;
