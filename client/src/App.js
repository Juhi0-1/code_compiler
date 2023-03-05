import {useState} from 'react'
import axios from 'axios';
import './App.css';
function App() {
  const [code , setCode] = useState('');
  const [output, setOutput] = useState('');
  const handleSubmit = async ()=>{
    const payload ={
      language :"cpp",
      code
    }
  try{
    const {data} = await axios.post("http://localhost:3000/run", payload);
    // console.log(output);
    setOutput(data.output);
  }catch(err){
    console.log(err.response);
  }
    
  }

  return (

    

    <div className="App">
      <h1>Online code compiler</h1>
      <textarea
      className='box'
       rows='30' 
       cols='75' 
       value={code} 
       onChange={(e)=>
       {setCode(e.target.value)}}>

       </textarea>
      <br/>
      <button className='button' onClick={handleSubmit}>Submit</button>
      <div >
        <div className='result'>Result :</div> {output}
      </div>
    </div>
  );
}

export default App;
