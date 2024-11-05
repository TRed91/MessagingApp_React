import styles from './profile.module.css'
import EditForm from '../editForm/editForm.jsx';
import PropTypes from "prop-types";

function Profile({ user, setMainContent }) {

    return (
        <div className={styles.profileContainer}>
            <div className={styles.profile}>
                <div>
                <p className={styles.label}>Username:</p>
                <p className={styles.data}>{user.userName}</p>
                </div>
                <div>
                <p className={styles.label}>Email: </p>
                <p className={styles.data}>{user.email}</p>
                </div>
                <div>
                <p className={styles.label}>About me:</p>
                <p className={styles.data}>{user.about}</p>
                </div>
            </div>
            <button type='button' 
                    onClick={() => setMainContent(<EditForm user={user} />)}>
                Edit
            </button>
        </div>
    )
}

Profile.propTypes = {
    user: PropTypes.shape({
        userName: PropTypes.string,
        email: PropTypes.string,
        about: PropTypes.string,
        userId: PropTypes.number,
    }),
    setMainContent: PropTypes.func.isRequired,
}

export default Profile;