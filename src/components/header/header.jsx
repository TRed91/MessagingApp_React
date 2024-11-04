import styles from './header.module.css';
import MessageForm from '../messageForm/messageForm';
import Profile from '../profile/profile';

function Header({ user, setMainContent }) {

    const handleLogout = (e) => {
        localStorage.removeItem('token');
        window.location.reload();
    }

    const handleNewMessage = (e) => {
        setMainContent(<MessageForm user={user} />)
    }

    const handleProfile = () => {
        setMainContent(<Profile user={user} setMainContent={setMainContent} />)
    }

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>{user ? `Welcome ${user.userName}` : 'Pigeon'}</h1>
            <ul className={styles.navlist}>
                <li><a className={styles.navItem} onClick={handleNewMessage}>New Message</a></li>
                <li><a className={styles.navItem} onClick={handleProfile}>Profile</a></li>
                <li><a className={styles.navItem} onClick={handleLogout}>Logout</a></li>
            </ul>
        </header>
    )
}

export default Header;