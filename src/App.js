import { useState } from 'react';

const HEROES = [
  { name: 'Ironman', color: 'red' },
  { name: 'Spiderman', color: 'blue' },
  { name: 'Thor', color: 'orange' },
  { name: 'Hulk', color: 'green' },
  { name: 'Black Widow', color: 'black' }
];

const SuperHerro = ({ name, color, hapus }) => {
  return (
    <div style={{
      display: 'flex', flexDirection: 'row',
      alignItems: 'center', justifyContent: 'space-between'
    }}>
      <h2 style={{ color }}>{name}</h2>
      <a href='#' onClick={hapus(name)} style={{
        textDecoration: 'none',
        fontSize: 20,
        fontWeight: 'bold'
      }}>Hapus</a>
    </div>
  );
}

const App = () => {
  const [heroes, setHeroes] = useState(HEROES);

  const hapus = (name) => () => {
    setHeroes((current) => {
      return current.filter(e => e.name != name);
    })
  }

  const reset = () => {
    setHeroes(HEROES);
  }

  return (
    <div style={{ width: 600, margin: '0 auto' }}>
      <h1>Daftar Super Hero</h1>
      <hr />
      {
        heroes.map((item, i) =>
        (<SuperHerro key={`key-${i}`} name={item.name}
          color={item.color} hapus={hapus} />))
      }
      <hr />
      <a href='#' onClick={reset} style={{
        textDecoration: 'none', fontSize: 20, fontWeight: 'bold'
      }}>Reset</a>
    </div>
  );
}

export default App;
