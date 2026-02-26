import './styles/App.css';
import Mybutton from './UI/button/Mybutton';
import Login from './pages/Login';
import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AutorizeContext } from "./context/Autorization";
import AppRouter from './components/AppRouter';
import Header from './components/Header';
import Footer from './components/Footer';
import ModalLog from './components/ModalLog';
import ModalAdd from './components/ModalAdd';



function App() {
  const [isAutorized, setIsAutorized] = useState(false);
  const [isLogVisible, setIsLogVisible] = useState(false);
  const [isAddVisible, setIsAddVisible] = useState(false);
  const [currentUserName, setCurrentUsername] = useState("");

  
  useEffect(()=>{
    if(localStorage.getItem('autoriz')){
      setIsAutorized(true);
    }
  },[]);

  useEffect(()=>{
    if(localStorage.getItem('currentUserName')){
      setCurrentUsername(localStorage.getItem('currentUserName'));
    }
  },[]);

  const loggingOut = (state)=>{
    setIsLogVisible(state);
  }

  

  const adding = (state)=>{
    setIsAddVisible(state);
  }

  return (

    <AutorizeContext.Provider value={{
      isAutorized,
      setIsAutorized,
      currentUserName,
      setCurrentUsername
    }}>
      <BrowserRouter>
      {(isAutorized) ? <Header visibleLogout={loggingOut} visibleAdd={adding} lg={isLogVisible} ad={isAddVisible}/> : null}
      <ModalLog visibleLog={isLogVisible} setVisibleLog={loggingOut}></ModalLog>
      <ModalAdd visibleAdd={isAddVisible} setVisibleAdd={adding}></ModalAdd>
      <AppRouter/>
      {(isAutorized) ? <Footer/> : null}
    </BrowserRouter>
    </AutorizeContext.Provider>
    
    
  );
}

export default App;
