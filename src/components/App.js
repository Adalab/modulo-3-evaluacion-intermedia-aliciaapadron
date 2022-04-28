import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';
import ls from '../services/localStorage';
import logo from '../images/text.png';
import pantone from '../images/pantone.jpg';

const App = () => {
  //variables de estado
  const [data, setData] = useState(ls.get('quotes', []));
  const [search, setSearch] = useState('');
  const [select, setSelect] = useState('all');
  const [newQuote, setNewQuote] = useState({
    quote: '',
    character: '',
  });
  //llamo a la Api
  useEffect(() => {
    if (data.length === 0) {
      callToApi().then((response) => {
        ls.set('quotes', response);
        setData(response);
      });
    }
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
    if (newQuote.character !== '' && newQuote.quote !== '') {
      setData([...data, newQuote]);
      setNewQuote({
        quote: '',
        character: '',
      });
      const newQuotes = [...data, newQuote];
      ls.set('quotes', newQuotes);
      setData(newQuotes);
    } else {
      alert('Rellena todos los campos');
    }
  };

  const htmlData = data
    .filter((phrase) =>
      phrase.quote.toLowerCase().includes(search.toLowerCase())
    )
    .filter((phrase) => {
      if (select === 'all') {
        return true;
      } else if (select === phrase.character) {
        return true;
      } else {
        return false;
      }
    })
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
        <div className="header__div">
          <h1 className="header__title">
            Frases de
            <img className="header__img" src={logo} alt="Imagen de Friends" />
            <img
              className="header__img"
              src={pantone}
              alt="Imagen de Friends"
            />
          </h1>
        </div>
        <form className="form">
          <label className="form__label" htmlFor="text">
            Filtar por frase
            <input
              className="header__search"
              autoComplete="off"
              type="search"
              name="search"
              onChange={handleSearch}
              value={search}
            />
          </label>
          <label className="form__label" htmlFor="text">
            Filtar por personaje
            <select name="" id="" onChange={handleSelect} value={select}>
              <option value="all">Todos</option>
              <option value="Ross">Ross</option>
              <option value="Monica">Mónica</option>
              <option value="Joey">Joey</option>
              <option value="Phoebe">Phoebe</option>
              <option value="Chandler">Chandler</option>
              <option value="Rachel">Rachel</option>
            </select>
          </label>
        </form>
      </header>

      <main>
        {/* phrase list */}
        <ul className="phrase__list">{htmlData}</ul>

        {/* new phrase */}
        <form className="new-phrase__form">
          <h2 className="new-phrase__title">Añade una nueva frase</h2>
          <label className="form__label" htmlFor="text">
            Frase
            <input
              className="new-phrase__input"
              type="text"
              name="quote"
              id="quote"
              placeholder="OH. MY. GOD!"
              onChange={handleNewQuote}
              value={newQuote.quote}
            />
          </label>
          <label className="form__label" htmlFor="text">
            Personaje
            <input
              className="new-phrase__input"
              type="text"
              name="character"
              id="character"
              placeholder="Janice"
              onChange={handleNewQuote}
              value={newQuote.character}
            />
          </label>

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
