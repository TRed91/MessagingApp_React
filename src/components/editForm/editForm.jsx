import { useState } from 'react';
import styles from './editForm.module.css';
import PropTypes from "prop-types";

function EditForm ({ user }) {
    const [ username , setUsername ] = useState(user.userName);
    const [ email, setEmail ] = useState(user.email);
    const [ about, setAbout ] = useState(user.about);
    const [ result, setResult ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/user/${user.userId}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({
                username: username,
                email: email,
                about: about
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.ok) {
                    window.location.reload();
                } else {
                    setResult("Username or Email are already taken");
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formElement}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Username"
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className={styles.formElement}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className={styles.aboutElement}>
                    <label htmlFor="about">About Me:</label>
                    <textarea id="about" name="about"
                           className={styles.textarea}
                           value={about}
                           onChange={(e) => setAbout(e.target.value)}>
                    </textarea>
                </div>
                <button>Submit</button>
            </form>
            <p>{result}</p>
        </div>
    )
}

EditForm.propTypes = {
    user: {
        userName: PropTypes.string,
        email: PropTypes.string,
        about: PropTypes.string,
        userId: PropTypes.number,
    }
}

export default EditForm;