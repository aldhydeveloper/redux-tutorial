import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ListKontak from './components/ListKontak';

function App() {
  const [nama, setName] = useState('aldhy')
  return (
    <div className="App">
      <h2>Aplikasi Kontak App {nama}</h2>
      <ListKontak nama={nama}/>
    </div>
  );
}

export default App;
