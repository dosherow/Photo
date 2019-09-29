import styled from 'styled-components';

const NavLinks = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
    & li {
        margin-right: 20px;
        cursor: pointer;
        font-weight: 700;
    }
    & li a {
        text-decoration: none;
        color: black;
        transition: 0.2s ease-in;
        font-size: 16px;
        letter-spacing: 1.5px;
    }
    & li a:hover {
        color: red;
        letter-spacing: 4px;
        text-decoration: line-through;
    }
`;

export default NavLinks;