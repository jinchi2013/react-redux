import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
  0% { transform: scale(0.8); }
  50% { transform: scale(1.0); }
  100% { transform: scale(0.8); }
`

const styledHeartSvg = styled.svg`
  fill: red;
  position: relative;
  top: 5px;
  width: 50px;
  height: 30px;
  animation: ${pulse} 1s ease infinite;
`
export default styledHeartSvg
