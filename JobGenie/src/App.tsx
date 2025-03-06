import './App.css';

function App() {
  return (
    <div className="container"
        style={{flex: "column"}}>
          {/* Navbar */}
    <nav className="navbar">
      <div className="logo">
        <img src="jobgenie 5.png" alt="JobGenie Logo" />
        <span>JobGenie</span>
      </div>
      <div className="nav-links">
        <a href="#">Lorem</a>
        <a href="#">Lorem</a>
        <a href="#">Lorem</a>
      </div>
      <div className="profile">
        <span>Lorem</span>
        <div className="profile-icon">
          <img src="Male User.png" alt="Profile Icon" />
        </div>
      </div>
    </nav>


      {/* Section: Apa itu JobGenie? */}
      <section className="section"
      style={{
        flex: 'column ',
        backgroundColor: '#478067',
      }}>
      <div

        style={{
          borderTopLeftRadius: '25px',
          color: '#FAF9E7',
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          borderBottomLeftRadius: '25px',
          borderTopRightRadius: '50px',
          borderBottomRightRadius: '50px',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        }}
      >
        <h2 style={{color: "black"}}>Apa itu JobGenie?</h2>
      </div>
      <p style={{ fontSize: "0.875rem", lineHeight: "1.625" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
            qui officia deserunt mollit anim id est laborum.
          </p>
      </section>

      {/* Section: Keuntungan JobGenie */}
      <section className="section"
      style={{
        flex: 'column ',
        backgroundColor: '#478067',
      }}>
      <div
        style={{
          borderTopLeftRadius: '25px',
          color: '#FAF9E7',
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          borderBottomLeftRadius: '25px',
          borderTopRightRadius: '50px',
          borderBottomRightRadius: '50px',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        }}
      >
        <h2 style={{color: "black"}}>Keuntungan JobGenie</h2>
      </div>

        <div>
        <p style={{ fontSize: "0.875rem", lineHeight: "1.625" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in   reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
            qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>

{/* Section: Cara kerja JobGenie */}
<div style={{ width: "100%", padding: "24px 0" }}>
  <div
    style={{
      maxWidth: "56rem", // max-w-4xl (4xl = 56rem)
      margin: "0 auto",
      padding: "0 1rem", // px-4 (1rem = 16px)
    }}
  >
    {/* Content Container */}
    <div style={{ display: "flex", flexDirection: "row", gap: "2rem", alignItems: "center" }}>
      {/* Image Card Container */}
      <div style={{ width: "50%", maxWidth: "493px" }}>
        <div
          style={{
            position: "relative",
            borderRadius: "0.5rem",
            overflow: "hidden",
            height: "248px",
          }}
        >
          {/* Image */}
          <img
            src="images.jpg"
            alt="Uji Sampel"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "0.5rem",
            }}
          />

          {/* Button Overlay */}
          <div
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              right: "0",
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(217, 217, 217, 0.7)", // bg-[#D9D9D9]/70
                backdropFilter: "blur(4px)", // backdrop-blur-sm
                width: "100%",
                height: "77px",
              }}
            >
              <button
                style={{
                  width: "100%",
                  height: "100%",
                  padding: "0 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                  backgroundColor: "rgba(248, 181, 85, 0.7)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "rgba(248, 181, 85, 1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "rgba(248, 181, 85, 0.7)")
                }
              >
                <span
                  style={{
                    color: "white",
                    fontWeight: "500",
                    fontSize: "1.25rem",
                    textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
                  }}
                >
                  Mulai Pencarian
                </span>
                <img
                  src="rightarrow.png"
                  alt="arrow icon"
                  style={{
                    marginLeft: "8px",
                    width: "32px",
                    height: "32px",
                    filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.8))",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Text Content (List) */}
      <div
        style={{
          width: "50%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ flexDirection: "column" }}>
          <h2 style={{ color: "black" }}> Cara Kerja JobGenie</h2>
          <ol style={{ paddingLeft: "20px" }}>
            <li style={{ color: "black" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li style={{ color: "black" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li style={{ color: "black" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li style={{ color: "black" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
          </ol>
        </div>
      </div>
    </div>
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
