import './App.css';

function App() {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">JobGenie</div>
        <div className="nav-links">
          <a href="#">Lorem</a>
          <a href="#">Lorem</a>
          <a href="#">Lorem</a>
        </div>
        <div className="profile">
          <span>Lorem</span>
          <div className="profile-icon">👤</div>
        </div>
      </nav>

      {/* Section: Apa itu JobGenie? */}
      <section className="section">
        <h2>Apa itu JobGenie?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </p>
      </section>

      {/* Section: Keuntungan JobGenie */}
      <section className="section">
        <h2>Keuntungan JobGenie</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </p>
      </section>

      {/* Section: Cara kerja JobGenie */}
      <div className="bottom-section">
        <div className="image-card">
          <img src="/assets/search-image.png" alt="Pencarian" />
          <button>Mulai Pencarian</button>
        </div>
        <div className="list-card">
          <h3>Cara kerja JobGenie:</h3>
          <ul>
            <li>Lorem ipsum dolor sit amet...</li>
            <li>Lorem ipsum dolor sit amet...</li>
            <li>Lorem ipsum dolor sit amet...</li>
            <li>Lorem ipsum dolor sit amet...</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>Link Github: Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </footer>
    </div>
  );
}

export default App;
