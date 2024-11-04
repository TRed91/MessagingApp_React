import {useState} from "react";
import styles from "./messageForm.module.css"

function MessageForm({user}) {
    const [ receiver , setReceiver ] = useState("");
    const [ message, setMessage ] = useState("");
    const [ result, setResult] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/message/${user.userId}`, {
            method: "POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                receiver: receiver,
                message: message,
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.ok) {
                    console.log(data);
                    setResult(`Message sent to ${receiver}`);
                    setReceiver('');
                    setMessage('');
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formElement}>
                    <label htmlFor="receiver">Send to: </label>
                    <input type="text" id="receiver" name="receiver" placeholder="Username"
                           value={receiver}
                           onChange={(e) => setReceiver(e.target.value)}/>
                </div>
                <textarea name="message" id="message"
                            className={styles.messageBody}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}>
                </textarea>
                <button>Send</button>
            </form>
            <p className={styles.result}>
                {result}
            </p>
        </div>
    )
}

export default MessageForm;