import { useEffect, useState } from 'react';
import MessageCard from '../messageCard/messageCard';
import styles from './sidebar.module.css'

function Sidebar({ user }) {
    const [ selection, setSelection ] = useState('recent');
    const [ messages, setMessages ] = useState([]);

    useEffect(() => {
        if (selection === 'recent') {
            fetch(`http://localhost:3000/message/recent/${user.userId}`)
            .then(res => res.json())
            .then(data => {
                if (data.ok) {
                    console.log(data)
                    setMessages(data.data);
                }
            })
            .catch(err => console.log(err.message))
        }
    }, [])

    return (
        <div className={styles.sidebarContainer}>
            <ul className={styles.header}>
                <li className={selection === 'recent' ? styles.selected : undefined}><a>Recent</a></li>
                <li className={selection === 'chats' ? styles.selected : undefined}><a>Chats</a></li>
            </ul>
            <div className={styles.cardContainer}>
                {messages.map(m => {
                    return <MessageCard message={m} key={m.messageId} />
                })}
            </div>
        </div>
    )
}

export default Sidebar;