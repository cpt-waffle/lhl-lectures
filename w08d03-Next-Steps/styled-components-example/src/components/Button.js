import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background-color: ${props => props.color ? props.color : 'red'};
`
export default (props) => {

  return (
      <Button {...props}>{props.children}</Button>
  )
}