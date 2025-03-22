import React, { useCallback } from "react";
import "./styles/App.css";
import Navigation from "./components/Navigation";
import { useAuth } from "./providers/AuthProvider";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();

  const handleMainStartButton = useCallback(() => {
    if (!isAuthenticated) {
      login();
    }
    navigate("/home");
  }, [isAuthenticated, login, navigate]);

  return (
    <div className="delender-app">
      <Navigation />
      <main className="main-content">
        <section className="hero-section">
          <h1 className="hero-title">
            Peer to Peer
            <br />
            Lending Platform
          </h1>

          <p className="hero-description">
            Empower your financial future with seamless peer-to-peer lending.
            Whether you're an investor looking for high returns or a borrower
            seeking quick, hassle-free loans—our platform connects you directly,
            securely, and efficiently.
          </p>

          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon secure-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 11H5V21H19V11Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 11V7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7V11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="feature-text">Secure</span>
            </div>

            <div className="feature-item">
              <div className="feature-icon fast-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="feature-text">Fast Approvals</span>
            </div>

            <div className="feature-item">
              <div className="feature-icon returns-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2V6M12 18V22M6 12H2M22 12H18M19.07 4.93L16.24 7.76M19.07 19.07L16.24 16.24M4.93 19.07L7.76 16.24M4.93 4.93L7.76 7.76"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="feature-text">Smart Returns</span>
            </div>
          </div>

          <button
            className="open-account-button"
            onClick={handleMainStartButton}
          >
            Let's Try
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
