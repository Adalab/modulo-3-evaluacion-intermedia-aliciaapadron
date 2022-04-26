(this['webpackJsonpphrase-list'] = this['webpackJsonpphrase-list'] || []).push([
  [0],
  {
    14: function (e, t, a) {},
    16: function (e, t, a) {
      'use strict';
      a.r(t);
      var c = a(1),
        n = a(8),
        r = a.n(n),
        s = a(9),
        l = a(5),
        o = a(7),
        i = a(3),
        u =
          (a(14),
          function () {
            return fetch(
              'https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json'
            )
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                return e.map(function (e) {
                  return { quote: e.quote, character: e.character };
                });
              });
          }),
        h = a(0),
        j = function () {
          var e = Object(c.useState)([]),
            t = Object(i.a)(e, 2),
            a = t[0],
            n = t[1],
            r = Object(c.useState)(''),
            j = Object(i.a)(r, 2),
            b = j[0],
            d = j[1],
            p = Object(c.useState)(''),
            O = Object(i.a)(p, 2),
            x = O[0],
            m = O[1],
            f = Object(c.useState)({ quote: '', character: '' }),
            v = Object(i.a)(f, 2),
            _ = v[0],
            q = v[1];
          Object(c.useEffect)(function () {
            u().then(function (e) {
              n(e);
            });
          }, []);
          var C = function (e) {
              q(
                Object(o.a)(
                  Object(o.a)({}, _),
                  {},
                  Object(l.a)({}, e.target.id, e.target.value)
                )
              );
            },
            N = a
              .filter(function (e) {
                return (
                  e.quote.toLowerCase().includes(b.toLowerCase()) ||
                  e.character.toLowerCase().includes(b.toLowerCase())
                );
              })
              .filter(function (e) {
                return e.quote.includes(x) || e.character.includes(x);
              })
              .map(function (e, t) {
                return Object(h.jsx)(
                  'li',
                  {
                    className: 'phrase__item',
                    children: Object(h.jsxs)('p', {
                      className: 'phrase__name',
                      children: [e.quote, '-', e.character],
                    }),
                  },
                  t
                );
              });
          return Object(h.jsxs)('div', {
            className: 'page',
            children: [
              Object(h.jsxs)('header', {
                className: 'header',
                children: [
                  Object(h.jsx)('h1', {
                    className: 'header__title',
                    children: 'Frases de Friends',
                  }),
                  Object(h.jsxs)('form', {
                    children: [
                      Object(h.jsx)('label', {
                        htmlFor: 'text',
                        children: 'Filtar por frase',
                      }),
                      Object(h.jsx)('input', {
                        className: 'header__search',
                        autoComplete: 'off',
                        type: 'search',
                        name: 'search',
                        onChange: function (e) {
                          d(e.target.value);
                        },
                        value: b,
                      }),
                      Object(h.jsx)('label', {
                        htmlFor: 'text',
                        children: 'Filtar por personaje',
                      }),
                      Object(h.jsxs)('select', {
                        name: '',
                        id: '',
                        onChange: function (e) {
                          m(e.target.value);
                        },
                        value: x,
                        children: [
                          Object(h.jsx)('option', {
                            value: '',
                            children: 'Todos',
                          }),
                          Object(h.jsx)('option', {
                            value: 'Ross',
                            children: 'Ross',
                          }),
                          Object(h.jsx)('option', {
                            value: 'Monica',
                            children: 'M\xf3nica',
                          }),
                          Object(h.jsx)('option', {
                            value: 'Joey',
                            children: 'Joey',
                          }),
                          Object(h.jsx)('option', {
                            value: 'Phoebe',
                            children: 'Phoebe',
                          }),
                          Object(h.jsx)('option', {
                            value: 'Chandler',
                            children: 'Chandler',
                          }),
                          Object(h.jsx)('option', {
                            value: 'Rachel',
                            children: 'Rachel',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(h.jsxs)('main', {
                children: [
                  Object(h.jsx)('ul', {
                    className: 'phrase__list',
                    children: N,
                  }),
                  Object(h.jsxs)('form', {
                    className: 'new-phrase__form',
                    children: [
                      Object(h.jsx)('h2', {
                        className: 'new-phrase__title',
                        children: 'A\xf1ade una nueva frase',
                      }),
                      Object(h.jsx)('label', {
                        htmlFor: 'text',
                        children: 'Frase',
                      }),
                      Object(h.jsx)('input', {
                        className: 'new-phrase__input',
                        type: 'text',
                        name: 'quote',
                        id: 'quote',
                        placeholder: 'Frase',
                        onChange: C,
                        value: _.quote,
                      }),
                      Object(h.jsx)('label', {
                        htmlFor: 'text',
                        children: 'Personaje',
                      }),
                      Object(h.jsx)('input', {
                        className: 'new-phrase__input',
                        type: 'text',
                        name: 'character',
                        id: 'character',
                        placeholder: 'Personaje',
                        onChange: C,
                        value: _.character,
                      }),
                      Object(h.jsx)('label', {
                        htmlFor: 'text',
                        children: 'A\xf1adir una nueva frase',
                      }),
                      Object(h.jsx)('input', {
                        className: 'new-phrase__btn',
                        type: 'submit',
                        value: 'A\xf1adir',
                        onClick: function (e) {
                          e.preventDefault(),
                            n([].concat(Object(s.a)(a), [_])),
                            q({ quote: '', character: '' });
                        },
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      r.a.render(Object(h.jsx)(j, {}), document.getElementById('root'));
    },
  },
  [[16, 1, 2]],
]);
//# sourceMappingURL=main.c87f0aa6.chunk.js.map
