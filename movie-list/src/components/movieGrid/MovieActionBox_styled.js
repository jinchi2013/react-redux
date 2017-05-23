import styled from 'styled-components'

const MovieActionLine = styled.div`
  span {
    font-size: 1.1em;
    font-family: initial;
    color: rgba(255, 255, 255, 0.95);
    display: inline-block;
    height: 100%;
    margin: 5px;
    padding: 5px;
    border-radius: 2px;
    border: solid rgba(0, 0, 0, 0.2);
    border-width: 1px 1px 2px;
    box-shadow: 1px 3px 0px 1px rgba(0, 0, 0, 0.1), inset 0 0 3px rgba(255, 255, 255, 0.3);
    cursor: pointer;
    user-select: none;
    transition: 0.4s ease;
    text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  span:active {
    transform: translateY(3px);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.1), inset 0 0 5px rgba(255, 255, 255, 0.4);
    border-bottom-width: 2px;
    transition: 0.1s ease;
  }

  span[data-id='liked'] {
    background: #d46959;
  }

  span[data-id='block'] {
    background: #d3d3d3;
  }
`
export default MovieActionLine
