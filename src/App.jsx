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
          fetch("https://messagingapp-api-n7ms.onrender.com/login", {
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
  }, [user])

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
        <div className={'footer'}>
            <div>
                <p className={'me'}>developed by Thomas Roth</p>
                <p>may the git push force be with you</p>
            </div>
            <div>
                <p>More about me: </p>
                <ul className={'footer-link-container'}>
                    <li>
                        <a href="https://github.com/TRed91/"
                           className={'footer-link'}
                           target={'_blank'}>
                            <img src="/github-142-svgrepo-com.svg" height={18} alt="github link"/> GitHub
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/thomas-roth-90b91531b/"
                           className={'footer-link'}
                           target={'_blank'}>
                            <img src="/linkedin-svgrepo-com.svg" height={18} alt="linkedin link"/> LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="mailto:thomas.roth@aon.at"
                           className={'footer-link'}
                           target={'_blank'}>
                            <img src="/mail-svgrepo-com.svg" height={18} alt="email"/> thomas.roth@aon.at
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </main>
  )
}

export default App
