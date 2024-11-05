import {useState} from "react";
import styles from "./messageForm.module.css"
import PropTypes from "prop-types";

function MessageForm({user}) {
    const [ receiver , setReceiver ] = useState("");
    const [ message, setMessage ] = useState("");
    const [ result, setResult] = useState("");
    const [ success, setSuccess ] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://messagingapp-api-n7ms.onrender.com/message/${user.userId}`, {
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
                    setSuccess(data.ok);
                    setResult(`Message sent to ${receiver}`);
                    setReceiver('');
                    setMessage('');
                } else {
                    setSuccess(data.ok);
                    setResult(data.message);
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div>
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
            <p className={success ? styles.result : styles.fail}>
                {result}
            </p>
        </div>
    )
}

MessageForm.propTypes = {
    user: PropTypes.shape({
        userName: PropTypes.string,
        email: PropTypes.string,
        about: PropTypes.string,
        userId: PropTypes.number,
    })
}

export default MessageForm;