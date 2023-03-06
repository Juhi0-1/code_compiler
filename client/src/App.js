import {useState} from 'react'
import axios from 'axios';
import './App.css';
const App = ()=>{
  // :"cpp"
  const [code , setCode] = useState('');
  const [language, setLanguage] = useState('cpp');
  const [output, setOutput] = useState('');

  const handleSubmit = async ()=>{
    console.log(language);
  const payload ={
      language : language,
      code
    }
  try{
    const {data} = await axios.post("http://localhost:3000/run", payload);
    // console.log(output);
    setOutput(data.output);
  }catch(err){
    console.log(err.response);
  } }
    

  return (

    

    <div className="App">
      <h1 className='head'>Online code compiler</h1>
<h4>Language : {language}</h4>
<div className='main_div'>
<div>
      {/* <label>Language : </label>   */}
      {/* <select
       value={language}
       onChange={(e)=>{
        setLanguage(e.target.value);
        // console.log(e.target.value);
       }}
      >
      <option value="cpp">C++</option>
      <option value="py">Python</option>
      </select> */}
      <button
      className='lang_but'
      onClick={()=>{
        setLanguage('cpp');

      }}
      ><img src='cpplogo.png' width='30px' height='30px' alt='logo'/> </button>
      <br/>
      <button className='lang_but' onClick={()=>setLanguage('py')}><img src='pythonlogo.png' width='30px' height='30px' alt='logo'/></button>

      </div>

      <div>
      <textarea
      className='box'
       rows='30' 
       cols='75' 
       value={code} 
       onChange={(e)=>
       {setCode(e.target.value)}}>

       </textarea>
       </div>

</div>
      
      <br/>
      <button className='button' onClick={handleSubmit}>Submit</button>
      <div >
        <div className='result'>Result :</div> {output}
      </div>
    </div>
  );
      }

export default App;
