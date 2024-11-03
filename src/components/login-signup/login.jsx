import {useState} from "react";
import styles from './authform.module.css';
import Signup from "./signup.jsx";

function Login({setMainContent}) {
    const [ username , setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                username: username,
                password: password,
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.ok) {
                    localStorage.setItem('token', data.token);
                    window.location.reload();
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className={styles.form}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Username"
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button>Log In</button>
            </form>
            <p>Or <a onClick={() => setMainContent(<Signup setMainContent={setMainContent}/>)}>
                    Sign Up here
                </a>!
            </p>
        </div>
    )
}

export default Login;