import App from './App.jsx';
import Profile from './components/profile/profile.jsx';
import Login from './components/login-signup/login.jsx';
import Signup from './components/login-signup/signup.jsx';

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Profile /> },
            { path: "login", element: <Login /> },
            { path: "signup", element: <Signup /> }
        ]
    }
]

export default routes