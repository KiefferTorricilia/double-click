import { useState } from "react"

function App() {


  const [ultimoClick, setUltimoClick] = useState(0)
  const [penultimoClick, setPenultimoClick] = useState(0)
  const [resultado, setResultado] = useState()



  const atualizarOcorrenciaDeCliques = () => {
    setPenultimoClick(new Date())
    if(penultimoClick !== 0){
      setResultado((new Date() - penultimoClick) / 1000)
      console.log((new Date() - penultimoClick) / 1000)
      setPenultimoClick(0)

    }
  }
    

 

  return (

    <>
      <button onClick={() => {atualizarOcorrenciaDeCliques()}}>Clique em Mim</button>
      <p> Aqui {ultimoClick} </p>

    </>
  )
}

export default App;
