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
                <li><a className={styles.navItem} onClick={handleNewMessage}>New Message</a></li>
                <li><a className={styles.navItem} onClick={handleProfile}>Profile</a></li>
                <li><a className={styles.navItem} onClick={handleLogout}>Logout</a></li>
            </ul>}
        </header>
    )
}

Header.propTypes = {
    user: {
        userName: PropTypes.string,
        email: PropTypes.string,
        about: PropTypes.string,
        userId: PropTypes.number,
    },
    setMainContent : PropTypes.func.isRequired,
}

export default Header;