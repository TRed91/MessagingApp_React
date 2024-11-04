import './App.css'
import {useEffect, useState} from "react";
import Sidebar from "./components/sidebar/sidebar.jsx";
import Header from "./components/header/header.jsx";
import Login from "./components/login-signup/login.jsx";
import MessageForm from './components/messageForm/messageForm.jsx';

function App() {
  const [ user, setUser ] = useState(null);
  const [ mainContent, setMainContent ] = useState(null);

  useEffect(() => {
      if (!user) {
          fetch("http://localhost:3000/login", {
              method: "GET",
              headers: {
                  'Authorization': `Bearer ${localStorage.getItem('token')}`,
                  'content-type': 'application/json',
              }
          })
          .then(res => res.json())
          .then(data => {
              if (data.ok){
                  setUser(data.data);
                  setMainContent(<MessageForm user={data.data} />)
              }
              else {
                  setMainContent(<Login setMainContent={setMainContent} />);
              }
          })
          .catch(err => console.log(err));
      }
  }, [])

  return (
    <main>
        <div className={'sidebar'}>
            {user ?
                <Sidebar user={user} /> :
                <div className={'image-container'}></div>}
        </div>
        <div className={'header'}><Header user={user} setMainContent={setMainContent}/></div>
        <div className={'main'}>
            {mainContent}
        </div>
        
    </main>
  )
}

export default App
