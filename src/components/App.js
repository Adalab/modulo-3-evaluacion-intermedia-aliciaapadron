import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';

const App = () => {
  //variables de estado
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [select, setSelect] = useState('');
  const [newQuote, setNewQuote] = useState({
    quote: '',
    character: '',
  });
  //llamo a la Api
  useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, []);
  //funciones handle
  const handleSearch = (ev) => {
    setSearch(ev.target.value);
  };
  const handleSelect = (ev) => {
    setSelect(ev.target.value);
  };
  const handleNewQuote = (ev) => {
    setNewQuote({
      ...newQuote,
      [ev.target.id]: ev.target.value,
    });
  };
  const handleClick = (ev) => {
    ev.preventDefault();
    setData([...data, newQuote]);
    setNewQuote({
      quote: '',
      character: '',
    });
  };

  const htmlData = data
    .filter(
      (phrase) =>
        phrase.quote.toLowerCase().includes(search.toLowerCase()) ||
        phrase.character.toLowerCase().includes(search.toLowerCase())
    )
    .filter(
      (phrase) =>
        phrase.quote.includes(select) || phrase.character.includes(select)
    )
    .map((phrase, i) => {
      return (
        <li className="phrase__item" key={i}>
          <p className="phrase__name">
            {phrase.quote} -
            <span className="phrase__span"> {phrase.character}</span>
          </p>
        </li>
      );
    });
  return (
    <div className="page">
      {/* header */}
      <header className="header">
        <h1 className="header__title">
          Frases de
          <div className="header__title2">
            <span> F</span>.<span>R</span>.<span>I</span>.<span>E</span>.
            <span>N</span>.<span>D</span>.<span>S</span>
          </div>
        </h1>
        <form>
          <label htmlFor="text">Filtar por frase</label>
          <input
            className="header__search"
            autoComplete="off"
            type="search"
            name="search"
            onChange={handleSearch}
            value={search}
          />
          <label htmlFor="text">Filtar por personaje</label>
          <select name="" id="" onChange={handleSelect} value={select}>
            <option value="">Todos</option>
            <option value="Ross">Ross</option>
            <option value="Monica">Mónica</option>
            <option value="Joey">Joey</option>
            <option value="Phoebe">Phoebe</option>
            <option value="Chandler">Chandler</option>
            <option value="Rachel">Rachel</option>
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
            name="quote"
            id="quote"
            placeholder="Frase"
            onChange={handleNewQuote}
            value={newQuote.quote}
          />
          <label htmlFor="text">Personaje</label>
          <input
            className="new-phrase__input"
            type="text"
            name="character"
            id="character"
            placeholder="Personaje"
            onChange={handleNewQuote}
            value={newQuote.character}
          />
          <label htmlFor="text">Añadir una nueva frase</label>
          <input
            className="new-phrase__btn"
            type="submit"
            value="Añadir"
            onClick={handleClick}
          />
        </form>
      </main>
    </div>
  );
};

export default App;
