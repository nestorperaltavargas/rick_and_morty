import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import styled from "styled-components";

const NavDiv = styled.div`
    display:flex;
    justify-content: flex-end;
    height:40px;
    padding:5px;
    margin: 8px;
`;

const LinkStyle = styled.p`
    margin:4px;
`;

const Nav = ({onSearch}) => {
    return (
        <NavDiv>
            <Link to="/">
                <LinkStyle>Home</LinkStyle>
            </Link>
            <Link to="/about">
                <LinkStyle>About</LinkStyle>
            </Link>
            <SearchBar
                onSearch={onSearch}
            />
        </NavDiv>
    )
}

export default Nav;