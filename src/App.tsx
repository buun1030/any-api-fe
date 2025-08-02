import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';

import BackendApi from './BackendApi';

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles['App-link']}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <BackendApi />
      </header>
    </div>
  );
}

export default App;
