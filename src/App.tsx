import React, { useState } from 'react';
import './App.css'
import { List } from './components/List'
type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

const App = () => {

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')

  const handleNameInput = (event:InputChangeEvent) => {
    setName(event.target.value)
  }
 
  const handleLastNameInput = (event: InputChangeEvent) => {
    setLastName(event.target.value)
  }

  const handleAgeInput = (event: InputChangeEvent) => {
    setAge(event.target.value)
  }

  let list = [
    {name: 'Dieferson', age: 31},
    {name: 'Leticia', age: 19}
   
  ]
 
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(true)
  }

  return (
    <div className="App">
      <label>
        Nome:
        <input className='labelInput' type="text" value={name} onChange={handleNameInput} />
      </label>

      <label>
        Sobrenome:
        <input className='labelInput' type="text" value={lastName} onChange={handleLastNameInput} />
      </label>

      <label>
        Idade:
        <input className='labelInput' value={age} type="number" onChange={handleAgeInput} />
      </label>

      <hr/>

      Olá {name} {lastName}, tudo bem?<br/>
      Você tem {age} anos.

      <h2>Lista de Nomes (Render Items)</h2>
        <ul>
          {list.map((item, index)=>(
           <List key={index} data={item} />
          ))}
        </ul>
      <div>

        <button onClick={handleClick}>Mostrar</button>
        {show === true &&
          <div>Frase do Dia</div>

        }
      </div>
    </div>
  );
}

export default App;