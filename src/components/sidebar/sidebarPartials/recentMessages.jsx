import MessageCard from "../../messageCard/messageCard.jsx";
import styles from '../sidebar.module.css'
import PropTypes from "prop-types";

function RecentMessages({ messages }){
    return (
        <div className={styles.cardContainer}>
            {messages.map(m => {
                return <MessageCard message={m} key={m.messageId}/>
            })}
        </div>
    )
}

RecentMessages.propTypes = {
    messages: PropTypes.array.isRequired,
}

export default RecentMessages;