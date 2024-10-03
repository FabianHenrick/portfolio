import styled from "styled-components";

export const HeaderContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderComp = styled.header`
  padding: 40px 4%;

  a {
    color: ${(props) => props.theme["gray-100"]};
    text-decoration: none;
  }
  nav ul {
    list-style-type: none;
  }

  nav ul li {
    display: inline-block;
    padding: 0 40px;
  }
`;

export const NavBar = styled.nav``;

export const ButtonContact = styled.button`
  padding: 10px 40px;
  font-size: 18px;
  font-weight: 600;
  background-color: ${(props) => props.theme["purple-700"]};
  cursor: pointer;
  border-radius: 30px;
  border: 0px;
  color: ${(props) => props.theme["gray-100"]};
`;
