import '../styles/App.scss';
import phrasesList from '../data/phrase.json';
import { useState } from 'react';

function App() {
  // const [data, setData]  = useState[];
  // fetch()
  // .then((){
  //   setData(data)
  // })

  //variables de estado
  const [data, setData] = useState(phrasesList);
  const htmlData = data
    // .filter(
    //   (phrase) =>
    //     phrase.name.toLowerCase().includes(search.toLowerCase()) ||
    //     phrase.lastname.toLowerCase().includes(search.toLowerCase())
    // )
    .map((phrase, i) => {
      return (
        <li className="phrase__item" key={i}>
          <p className="phrase__name">
            {phrase.quote}-{phrase.character}
          </p>
        </li>
      );
    });
  return (
    <div className="page">
      {/* header */}
      <header className="header">
        <h1 className="header__title">Frases de Friends</h1>
        <form>
          <label htmlFor="text">Filtar por frase</label>
          <input
            className="header__search"
            autoComplete="off"
            type="search"
            name="search"
            // onChange={handleSearch}
            // value={search}
          />
          <label htmlFor="text">Filtar por personaje</label>
          <select name="" id="">
            <option value="">Todos</option>
            <option value="">Ross</option>
            <option value="">Mónica</option>
            <option value="">Joey</option>
            <option value="">Phoebe</option>
            <option value="">Chandler</option>
            <option value="">Rachel</option>
          </select>
        </form>
      </header>

      <main>
        {/* phrase list */}
        <ul className="phrase__list">{htmlData}</ul>

        {/* new phrase */}
        <form className="new-phrase__form">
          <h2 className="new-phrase__title">Añade una nueva frase</h2>
          <label htmlFor="text">Frase</label>
          <input
            className="new-phrase__input"
            type="text"
            name="name"
            id="name"
            placeholder="Frase"
            // onChange={handleNewphrase}
            // value={newphrase.name}
          />
          <label htmlFor="text">Personaje</label>
          <input
            className="new-phrase__input"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Personaje"
            // onChange={handleNewphrase}
            // // value={newphrase.lastname}
          />
          <button>Añadir nueva frase</button>
        </form>
      </main>
    </div>
  );
}

export default App;
