import MessageCard from "../../messageCard/messageCard.jsx";
import styles from '../sidebar.module.css'

function RecentMessages({ messages }){
    return (
        <div className={styles.cardContainer}>
            {messages.map(m => {
                return <MessageCard message={m} key={m.messageId}/>
            })}
        </div>
    )
}

export default RecentMessages;