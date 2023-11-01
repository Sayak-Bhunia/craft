import { useAuth0 } from '@auth0/auth0-react';
import './App.css';

function App() {

  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  console.log("Current User", user);

  return (
    <div className="App">
      <header className="App-header">
      {isAuthenticated && <h3>Hhelooo {user.name}</h3>}
      {isAuthenticated ? (
        <button className="learn" onClick={(e) => logout()}>Logout</button>
      ) : (
        <button className="learn" onClick={(e) => loginWithRedirect()}>Login</button>
      )}
      </header>
    </div>
  );
}

export default App;
