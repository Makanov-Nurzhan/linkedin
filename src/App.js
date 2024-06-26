import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import Widgets from './Widgets';

function App() {
  const user = useSelector(selectUser)

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user is loged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.profilePic,
        }))
      } else {
        //user is logged out
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}


    </div>
  );
}

export default App;
