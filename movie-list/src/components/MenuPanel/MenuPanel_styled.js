import styled from 'styled-components'

const MenuWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  font-family: fantasy;
  overflow: hidden;
  pointer-events: ${props => props.isMenuOpen ? 'auto' : 'none'};
  z-index: 150;

  div {
    background-color: #e5e5e5;
    position: relative;
    max-width: 450px;
    width: 90%;
    height: 100%;
    padding: 20px 0 0 0;
    -webkit-transform: ${props => props.isMenuOpen ? 'none' : 'translateX(-103%)'};
            transform: ${props => props.isMenuOpen ? 'none' : 'translateX(-103%)'};
    flex-direction: column;
    will-change: transform;
    z-index: 160;
    pointer-events: auto;
    transition: ${props => props.isMenuOpen ? 'all 300ms ease-in' : 'all 130ms ease-out'};
    box-sizing: border-box;
  }

  button {
    position: absolute;
    right: 45px;
    width: 50px;
    height: 25px;
  }

  ul {
    padding:0;
    list-style-type: none;

    li {
      padding: 0 45px;
    }

    a {
      display: block;
      padding: 5px;
      margin-bottom: 3px;
      font-size: 20px;
      text-decoration: none;
      color: #232b2b;
      border-bottom: solid 1px #414a4c;
    }
  }
`

export default MenuWrapper
