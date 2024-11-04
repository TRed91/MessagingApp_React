import { useEffect, useState } from 'react';
import styles from './sidebar.module.css'
import RecentMessages from "./sidebarPartials/recentMessages.jsx";
import UserSelect from "./sidebarPartials/userSelect.jsx";

function Sidebar({ user }) {
    const [ selection, setSelection ] = useState('recent');
    const [ messages, setMessages ] = useState([]);

    useEffect(() => {
        if (selection === 'recent') {
            fetch(`http://localhost:3000/message/recent/${user.userId}`)
            .then(res => res.json())
            .then(data => {
                if (data.ok) {
                    setMessages(data.data);
                }
            })
            .catch(err => console.log(err.message))
        }
    }, [])

    return (
        <div className={styles.sidebarContainer}>
            <ul className={styles.header}>
                <li className={selection === 'recent' ? styles.selected : undefined}>
                    <a onClick={() => setSelection('recent')}>Recent</a>
                </li>
                <li className={selection === 'chats' ? styles.selected : undefined}>
                    <a onClick={() => setSelection('chats')}>Chats</a>
                </li>
            </ul>
            {selection === 'recent' ?
                <RecentMessages messages={messages} /> :
                <UserSelect user={user}/>}
        </div>
    )
}

export default Sidebar;