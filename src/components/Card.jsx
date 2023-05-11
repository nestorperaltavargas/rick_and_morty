import { Link } from "react-router-dom";
import styled from "styled-components";

const DivRelative = styled.div`
   position:relative;
`;

const CardFlex = styled.div`
   background-color:#262626;
   color:white;
   margin:auto;
`;

const ButtonX = styled.button`
   position:absolute;
   top:0;
   left:0;
   background-color:#cc0000;
   color:white;
   border:0;
`;

const DivText = styled.div`
   margin:20px 20px;
`;

const Card = ({id, name, species, gender, image, onClose}) => {

   return (
      <CardFlex>
         <DivRelative>
            <ButtonX onClick={onClose}>X</ButtonX>
         </DivRelative>
         <img  src={image} alt={name} /> 
         <DivText>
            <Link to={`/detail/${id}`}>
               <h2>{name}</h2>
            </Link>
            <h2>{species}</h2>
            <h2>{gender}</h2> 
         </DivText>
      </CardFlex>
   );
}

export default Card;