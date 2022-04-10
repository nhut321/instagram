import { useContext } from 'react'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './components/contents/Home'
import Login from './components/Login'
import { AuthContext } from './contexts/AuthContext'
import './App.css';

function App() {
  const Auth = useContext(AuthContext)
  return (
    <div className="App">
      {
        Auth.state.isLogin 
        ?
        <>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} /> 
          </Routes>
        </>
        :
        <Login />
      }
    </div>
  );
}

export default App;
