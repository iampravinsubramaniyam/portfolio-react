import { useEffect, useState } from 'react';
import './App.css';
import Home from './Home.js';
import Loading from './components/Loading.js';



function App() {

  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },4000)
  },[])

  return (
    loading ? (<Loading/>):(
    <div className="App">
        <Home/>
    </div>)
  );
}

export default App;
