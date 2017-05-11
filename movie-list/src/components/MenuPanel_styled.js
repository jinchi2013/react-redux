import styled from 'styled-components'

const MenuWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: ${props => props.isMenuOpen ? 'auto' : 'none'};
  z-index: 150;

  div {
    background-color: gray;
    color: #fff;
    position: relative;
    max-width: 400px;
    width: 90%;
    height: 100%;
    -webkit-transform: ${props => props.isMenuOpen ? 'none' : 'translateX(-103%)'};
            transform: ${props => props.isMenuOpen ? 'none' : 'translateX(-103%)'};
    display: flex;
    flex-direction: column;
    will-change: transform;
    z-index: 160;
    pointer-events: auto;
    transition: ${props => props.isMenuOpen ? 'all 300ms ease-in' : 'all 130ms ease-out'};
  }
`

export default MenuWrapper
