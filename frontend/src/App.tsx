import React from 'react';
import './App.css';

function App() {
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    fetch('http://localhost:3001/api')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Frontend</h1>
        <p>Backend Message: {message || 'Loading...'}</p>
      </header>
    </div>
  );
}

export default App;