// colocar cada componente em um arquivo diferente e exibir o mesmo resultado.

import React, { createContext, useContext, useState } from 'react'


//criando o contexto: aceita variáveis, funções e estados
const MyContext = createContext({});





export default function ContextTest () {
  
  const texto = "enviando informações"

  const [ fundo, setFundo ] = useState( "yellow" )
  
  const alteraFundo = () => {
    setFundo(fundo === "yellow" ? "blue": "yellow")
  }
  return (
    <MyContext.Provider value={{texto, fundo, alteraFundo}}>
      <Camada1/>

    </MyContext.Provider>
  )
}

function Camada1() {
  return (
    <div style={ { backgroundColor: "red", width: "500px", height: "500px", display: "inline-block" } }>Camada 1
    <Camada2/>
    </div>
  )
}

function Camada2() {
  return (
    <div style={ { backgroundColor: "green", width: "400px", height: "400px", margin: "50px", display: "inline-block" } }>Camada 2
    <Camada3/>
    </div>
  )
}

function Camada3 () {
  
  const {texto, fundo, alteraFundo} = useContext(MyContext)
  return (
		<div
			style={{
				backgroundColor: fundo,
				width: "300px",
				height: "300px",
				margin: "50px",
			}}
		>
      Camada 3<p>{ texto }</p>
      <button onClick={alteraFundo}>clique aqui</button>
		</div>
	);
}
