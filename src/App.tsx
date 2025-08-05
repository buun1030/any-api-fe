import React from 'react';
import logo from './yoshi3.svg';
import styles from './App.module.css';

import BackendApi from './BackendApi';

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p>
          Welcome to the Dragon Riders' Outpost!
        </p>
        <a
          className={styles['App-link']}
          href="https://www.dreamworks.com/how-to-train-your-dragon"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn About Dragons
        </a>
        <BackendApi />
      </header>
    </div>
  );
}

export default App;
