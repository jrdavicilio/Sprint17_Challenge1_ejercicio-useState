import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('Sofía');
  const [newName, setNewName] = useState('');

  const changeName = () => {

    if (newName !== '') {
      setName(newName);
      setNewName('');
    }
  };

  return (
    <div>
      <h2>Teacher Name: {name}</h2>

      <form onSubmit={changeName}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="add a name"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
