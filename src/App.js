import { useState } from 'react';
import './App.css';

function App() {
  const [text,setText]=useState('')
  const [data,setData]=useState([])
  const [newData,setNewData]=useState([])
  return (
    <div className="Appi">
      <input type='text' onChange={(e)=>setText(e.target.value)} value={text}></input>
        <button onClick={()=>{
        setData([...data,text])
        setText('')
      }}>add list</button>  
      <ul>
        {data.map((e,i)=>{  
          if (e !== '') {
            return <li key={i}>{e} 
            <button onClick={()=>setData(data.filter((e,ind)=>ind!==i))}>X</button>
            </li>
          }
        })}
      </ul>
    </div>
  );
}

export default App;
