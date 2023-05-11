import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {

    const { id } = useParams([]);
    console.log(id);
    const [character, setCharacter] = useState([]);
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((char) => {
            if (char.name) {
            setCharacter(char);
            } else {
            window.alert("No hay personajes con ese ID");
            }
            })
            .catch((err) => {
            window.alert("No hay personajes con ese ID");
            });
            return setCharacter([]);
    }, [id]);

    return (
        <>
            <h3>{character.name}</h3>
            <h3>{character.status}</h3>
            <h3>{character.specie}</h3>
            <h3>{character.gender}</h3>
            <h3>{character.origin}</h3>
            <img src={character.image} alt={character.name} />
        </>
    )
}

export default Detail;