import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Login from './pages/login';

function App() {
  // if the user isn't logged in, show the login page, otherwise go to home page
  let pageToDisplay = <Login />

  if(isUserAuthenticated()) {
    pageToDisplay = (
      <div>
        <h1>logged in</h1>
      </div>
    );
  }

  return (
    pageToDisplay
  );
}

/*
 * Check if user is logged in. Do some additional check instead of just checking if
 * they have any value for 'token'.
 */
function isUserAuthenticated() {
  if(localStorage.getItem('token') != null) {
    return true;
  }

  return false;
}

export default App;
