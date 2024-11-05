import styles from './header.module.css';
import MessageForm from '../messageForm/messageForm';
import Profile from '../profile/profile';
import PropTypes from "prop-types";

function Header({ user, setMainContent }) {

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }

    const handleNewMessage = () => {
        setMainContent(<MessageForm user={user} />)
    }

    const handleProfile = () => {
        setMainContent(<Profile user={user} setMainContent={setMainContent} />)
    }

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>{user ? `Welcome ${user.userName}` : 'Pigeon'}</h1>
            {user && <ul className={styles.navlist}>
                <li>
                    <a className={styles.navItem} onClick={handleNewMessage}>
                        <img src="/message-square-medical-svgrepo-com.svg"
                             height={30}
                             alt="add message"
                             className={styles.headerIcon}/>New Message
                    </a>
                </li>
                <li>
                    <a className={styles.navItem} onClick={handleProfile}>
                        <img src="/profile-round-1342-svgrepo-com.svg"
                             alt="profile"
                             height={30}
                             className={styles.headerIcon}/>Profile
                    </a>
                </li>
                <li>
                    <a className={styles.navItem} onClick={handleLogout}>
                        <img src="/logout-svgrepo-com.svg"
                             alt="logout"
                             height={30}
                             className={styles.headerIcon}/>Logout
                    </a>
                </li>
            </ul>}
        </header>
    )
}

Header.propTypes = {
    user: PropTypes.shape({
        userName: PropTypes.string,
        email: PropTypes.string,
        about: PropTypes.string,
        userId: PropTypes.number,
    }),
    setMainContent : PropTypes.func,
}

export default Header;