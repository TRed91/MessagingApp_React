import styles from './header.module.css';

function Header({ user }) {
    return (
        <>
            <h1 className={styles.title}>{user ? `Welcome ${user.userName}` : 'Pigeon'}</h1>
        </>
    )
}

export default Header;