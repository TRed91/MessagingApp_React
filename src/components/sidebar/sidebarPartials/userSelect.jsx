import RecentMessages from "./recentMessages.jsx";
import styles from '../sidebar.module.css'
import {useState} from "react";

function UserSelect ({ user }) {
    const [ userName, setUserName ] = useState("");
    const [ messages, setMessages ] = useState([]);
    const [ errMsg, setErrMsg ] = useState("");

    const handleSearch = (e) => {
        fetch(`http://localhost:3000/message/${user.userId}/private/${userName}`, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.ok) {
                    setMessages(data.data);
                } else {
                    setErrMsg("Something went wrong");
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <div className={styles.searchBarContainer}>
                <input type='search'
                       value={userName}
                       placeholder="Search..."
                       onChange={e => setUserName(e.target.value)}
                       className={styles.searchBar}/>
                <button type='button' onClick={handleSearch}>Search</button>
            </div>
            {Array.isArray(messages) ? <RecentMessages messages={messages} /> : null}
        </>
    )
}

export default UserSelect;