import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [competidores, setCompetidor] = useState([])
  const [valorInput, setValorInput] = useState("")
  let arr = [...competidores]
  let coluna1 = []
  let coluna2 = []
  const [column1, setComlumn1] = useState([])
  const [column2, setComlumn2] = useState([])


  const gerarChaves = () => {

    let randomNumber;
    let tmp;
    
    for (let i = arr.length; i;) {
      randomNumber = Math.random() * i-- | 0;

      tmp = arr[randomNumber];
      // troca o número aleatório pelo atual
      arr[randomNumber] = arr[i];
      // troca o atual pelo aleatório
      arr[i] = tmp;
  }

    for(let i = 0; i < competidores.length; i++){
      if(i%2 != 0){
        coluna1.push(arr[i])
      }else{
        coluna2.push(arr[i])
      }
    }
    setComlumn1(coluna1)
    setComlumn2(coluna2)
  }
  return (
    <div >
      <h2>tatames figth shop</h2>
      <input value={valorInput} onChange={(event) => setValorInput(event.target.value)} onKeyDown={(event) => {if(event.key == "Enter"){
        arr.push(valorInput)
        setCompetidor(arr)
        setValorInput("")
      }}}></input> 
      <button onClick={(event) => {
        arr.push(valorInput)
        setCompetidor(arr)
        setValorInput("")
      }}>Adicionar competidor</button>
      <ul>
      {competidores?.map((item, index) => {
        return <li key={index}>{item}</li>
      })}
      </ul>
      <button onClick={gerarChaves}>Gerar chaves</button>
      <div className='container'>
        <ul className='coluna1'>
        {column1?.map((item) => {
        return <li key={item}>{item}</li>
      })}
        </ul>
        <ul className='coluna2'>
        {column2?.map((item) => {
        return <li key={item}>{item}</li>
      })}
        </ul>
      </div>
    </div>
  )
}

export default App
