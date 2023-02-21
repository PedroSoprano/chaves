import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [competidores, setCompetidor] = useState([])
  const [valorInput, setValorInput] = useState("")
  let arr = [...competidores]
  let coluna1 = []
  let coluna2 = []
  const [column1, setComlumn1] = useState([])
  const [column2, setComlumn2] = useState([])
  const [academiaInput, setAcademiaInput] = useState("")


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
        if(coluna1.length > 0){
          let academiaNoArray = false
          for(let j =0; j < coluna1.length; j++){
            if(arr[i].academia == coluna1[j].academia){
              academiaNoArray = true
            }
          }
          if(academiaNoArray){
            coluna2.push(arr[i])
          }else{
            coluna1.push(arr[i])
          }
        }else{
          coluna1.push(arr[i])
        }
      }else{
        if(coluna2.length > 0){
          let academiaNoArray = false
          for(let j =0; j < coluna2.length; j++){
            if(arr[i].academia == coluna2[j].academia){
              academiaNoArray = true
            }
          }
          if(academiaNoArray){
            coluna1.push(arr[i])
          }else{
            coluna2.push(arr[i])
          }
        }else{
          coluna2.push(arr[i])
        }
 
      }
    }

    for(let i = 0; i < column1.length - 1; i++){
      if(column1[i].academia == column1[i + 1].academia){
        let acc1 = column1[i].academia
        let acc2 = column1[i + 1].academia
        arr.splice(i, 1)
        arr.splice(i+1, 1)
        arr.push(acc1)
        arr.reverse()
        arr.push(acc2)
      }
    }
    for(let i = 0; i < column2.length - 1; i++){
      if(column2[i].academia == column2[i + 1].academia){
        let acc1 = column2[i].academia
        let acc2 = column2[i + 1].academia
        arr.splice(i, 1)
        arr.splice(i+1, 1)
        arr.push(acc1)
        arr.reverse()
        arr.push(acc2)
      }
    }
    setComlumn1(coluna1)
    setComlumn2(coluna2)
  }

  const tirarDaLista = (index) => {
    arr.splice(index,1)
    setCompetidor(arr)
  }

  return (
    <div >
      <h2>tatames figth shop</h2>
      <div>
        <label>Competidor:</label>
        <input value={valorInput}  onChange={(event) => setValorInput(event.target.value)}></input> 
      </div>
      <div>
        <label>Academia:</label>
        <input value={academiaInput} onChange={(event) => setAcademiaInput(event.target.value)}></input>
      </div>
      <button onClick={(event) => {
        if(valorInput.length > 0 && academiaInput.length > 0){
          let newObj = {
            competidor: valorInput,
            academia: academiaInput
          }
          arr.push(newObj)
          setCompetidor(arr)
          setValorInput("")
          setAcademiaInput("")
        }
      }}>Adicionar competidor</button>
      <ul className='competidores'>
      {competidores?.map((item, index) => {
        return <li key={index}>{index + 1} - {item.competidor} - academia: {item.academia}<button className='btn' onClick={(event) => tirarDaLista(index)}><img width={"20px"} height={"20px"} src='https://cdn-icons-png.flaticon.com/512/54/54324.png'/></button></li>
      })}
      </ul>
      <button onClick={gerarChaves}>Gerar chaves</button>
      <div className='container'>
        <ul className='coluna1'>
        {column1?.map((item, index) => {
          if(index % 2 == 0 && index != column1.length - 1){
            return  <>
            <li key={index}>{`${item.competidor} - ${item.academia}`}</li>
            <p>vs</p>
            </>
          }else if(index == column1.length - 1 && column1.length%2 != 0){
            return <li className='baia' key={index}>{`${item.competidor} - ${item.academia}`}</li>
          }else{
            return <li key={index}>{`${item.competidor} - ${item.academia}`}</li>
          }
      })}
        </ul>
        <ul className='coluna2'>
        {column2?.map((item, index) => {
        if(index % 2 == 0 && index != column2.length - 1){
          return  <>
          <li key={index}>{`${item.competidor} - ${item.academia}`}</li>
          <p>vs</p>
          </>
        }else if(index == column2.length - 1 && column2.length%2 != 0){
          return <li className='baia' key={index}>{`${item.competidor} - ${item.academia}`}</li>
        }else{
          return <li key={index}>{`${item.competidor} - ${item.academia}`}</li>
        }
      })}
        </ul>
      </div>
    </div>
  )
}

export default App


