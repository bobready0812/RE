import { useState } from 'react';
import './App.css';

function App() {
  const [value,setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(value);
  }

  return (
    <div>
<input value={value} onChange={handleChange}></input>
    </div>
  );
}

export default App;
