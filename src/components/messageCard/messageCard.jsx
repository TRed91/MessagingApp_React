import { useState } from 'react';
import styles from './messageCard.module.css'
import PropTypes from "prop-types";

function MessageCard ({ message }) {

    const [ date ] = useState(new Date(message.timestamp))

    return (
        <div className={styles.cardBody}>
            <p className={styles.from}>From: {message.author.userName}</p>
            <p>{message.messageText}</p>
            <p className={styles.time}>{date.getDay()}/{date.getMonth()}/{date.getFullYear()} {date.getHours()}:{date.getMinutes()}</p>
        </div>
    )
}

MessageCard.propTypes = {
    message: PropTypes.shape({
        author: PropTypes.shape({
            userName: PropTypes.string,
            email: PropTypes.string,
            about: PropTypes.string,
            userId: PropTypes.number,
        }),
        messageText: PropTypes.string,
        timestamp: PropTypes.any
    })
}

export default MessageCard;