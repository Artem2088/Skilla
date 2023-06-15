import {useState, useEffect} from 'react';
import "./App.scss";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Sidebar from "../Sidebar/Sidebar";
import { getProfile, getList } from "../../utils/Api"

const App = () => {
  const [calls, setCalls] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    getList()
    .then((res) => {
      const data = Object.entries(res);
      data.forEach(([ key, value]) => {
        setCalls(value)
      })
      setLoading(true)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])
  
  return (
    <div className='page'>
      <div className='page__container'>
        <Header />
        <Sidebar />
        <Main calls={calls} loading={loading}/>
      </div>
    </div>
  );
};

export default App;
