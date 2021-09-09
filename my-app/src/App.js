import logo from './logo.svg';
import './App.css';
import useStorage from './hooks/storage';
import { useState } from 'react';

function App() {
  const { data, findIndex } = useStorage({
    initData: ["Huyen", "Hoa", "Hung", "Long"]
  })
  const [name, setName] = useState("");
  const [position, setPosition] = useState(0);
  return (
    <div className="App">
      <div>学生一覧: [{data.toString()}]</div>
      <div>検索名前:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
        <button type="button" onClick={() => setPosition(findIndex(name))}>確定</button>
      </div>
      <div>検索名前: {name}</div>

      <div>位置: {position}</div>
    </div>
  );
}

export default App;
