import React from 'react'

export type TesteProps = {
    text: string
}

const Teste = (props: TesteProps) => {
  return (
    <div style={{ color: "#da3232" }}>{props.text}</div>
  )
}

export default Teste