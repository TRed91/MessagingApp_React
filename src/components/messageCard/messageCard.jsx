import { useEffect, useState } from 'react';
import styles from './messageCard.module.css'

function MessageCard ({ message }) {

    const [ date, setDate ] = useState(new Date(message.timestamp))

    return (
        <div className={styles.cardBody}>
            <p className={styles.from}>From: {message.author.userName}</p>
            <p className={styles.message}>{message.messageText}</p>
            <p className={styles.time}>{date.getDay()}/{date.getMonth()}/{date.getFullYear()} {date.getHours()}:{date.getMinutes()}</p>
        </div>
    )
}

export default MessageCard;