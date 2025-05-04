import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="navigation">
        <div className="homebutton">
          <a className="hehe" href="/" style={{ color: 'white' }}>
            <span className="innu">Visual Studio Code</span>
          </a>

          <a className="uupar" href="/docs">Docs</a>
          <a className="uupar" href="/updates">Updates</a>
          <a className="uupar" href="/blog">Blog</a>
          <a className="uupar" href="/api">API</a>
          <a className="uupar" href="/extensions">Extensions</a>
          <a className="uupar" href="/faq">FAQ</a>
          <a className="uupar" href="/learn">Learn</a>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ paddingRight: '20px' }}>
            <button type="button" className="theme-switch">
              {/* Theme icon will go here */}
            </button>
          </div>

          <div>
            <input 
              type="text" 
              className="searchs" 
              placeholder="Search Docs" 
              aria-label="Search text"
            />

            <span style={{
              paddingLeft: '10px',
              paddingRight: '10px',
              backgroundColor: '#0e0e0e'
            }}>
              <button 
                tabIndex="0" 
                type="submit" 
                aria-label="Search"
                style={{ backgroundColor: '#0e0e0e', border: 'none' }}
              >
                {/* Search icon will go here */}
              </button>
            </span>
          </div>

          <button className="uupardownload" type="button">
            Download
          </button>
        </div>
      </header>

      <main>
        <div className="banner">
          <p className="banner">
            <a className="banners" href="/">Version 1.92</a>
            is now available! Read about the new features and fixes from July.
          </p>
        </div>

        <div className="beech">
          <div>
            <br /><br /><br />
            <span className="yoyo"> Free. Built on open source. Runs everywhere. </span>

            <br /><br />

            <div>
              <h1 className="power">Code Editing. Redefined.</h1>
            </div>

            <div>
              <button className="neechedownload" type="button"> Download for Windows</button>
            </div>
            <p className="whitening">
              <a className="banners" href="/">Web</a>
              ,
              <a className="banners" href="/">Insiders Edition</a>
              or
              <a className="banners" href="/">Other Platforms</a>
            </p>
            <p className="subtitlish">
              By using VS Code, you agree to its
              <a className="banners" href="/">licence</a>
              and
              <a className="banners" href="/">privacy statement</a>
              .
            </p>
          </div>

          <div>
            {/* Hero image will go here */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
