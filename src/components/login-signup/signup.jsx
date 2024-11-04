import {useState} from "react";
import Login from "./login.jsx";
import styles from "./authform.module.css";

function Signup({ setMainContent }) {
    const [ username , setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ cpw, setCpw ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/user", {
            method: "POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                cpw: cpw,
            })
        })
            .then(res => res.json())
            .then(data => {
                setMainContent(<Login setMainContent={setMainContent} />);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className={styles.form}>
            <form onSubmit={handleSubmit} className={styles.form} >
                <div className={styles.formcontainer}>
                    <div className={styles.formsection}>
                        <div className={styles.formElement}>
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div className={styles.formElement}>
                            <label htmlFor="mail">E-Mail</label>
                            <input type="email" id="email" name="email" placeholder="E-Mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className={styles.formsection}>
                        <div className={styles.formElement}>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className={styles.formElement}>
                            <label htmlFor="cpw">Confirm Password</label>
                            <input type="password" id="cpw" name="cpw" placeholder="Password"
                                value={cpw}
                                onChange={(e) => setCpw(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <button>Sign Up</button>
            </form>
            <p>Already a member? <a onClick={() => setMainContent(<Login setMainContent={setMainContent} />)}>
                    Login here
                </a>!
            </p>
        </div>
    )
}

export default Signup;