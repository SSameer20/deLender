import "../styles/App.css";
import { useAuth } from "../providers/AuthProvider";

export default function Navigation() {
  const { isAuthenticated, principal, login, logout } = useAuth();

  return (
    <header className="header">
      <div className="logo">DeLender</div>
      <div className="header-actions">
        <a href="#help" className="help-link">
          Help
        </a>

        {isAuthenticated ? (
          <button className="connect-wallet-button" onClick={logout}>
            Logout
          </button>
        ) : (
          <button className="connect-wallet-button" onClick={login}>
            <svg
              className="wallet-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 12H17C16.4477 12 16 11.5523 16 11V9C16 8.44772 16.4477 8 17 8H21V12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Connect Wallet
          </button>
        )}
      </div>
    </header>
  );
}
