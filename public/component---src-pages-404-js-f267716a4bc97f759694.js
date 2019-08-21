(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    232: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        r = n.n(a),
        o = n(235),
        i = n(266),
        c = n(240),
        l = n(241),
        m = function() {
          return r.a.createElement(
            'div',
            null,
            r.a.createElement(l.a, {
              color: 'backgroundDark',
              height: ['35vh', '80vh'],
              width: ['95vw', '60vw'],
            }),
            r.a.createElement(l.a, {
              color: 'primary',
              height: ['25vh', '35vh'],
              width: ['75vw', '60vw'],
              invertX: !0,
            }),
            r.a.createElement(l.a, {
              color: 'secondaryLight',
              height: ['10vh', '20vh'],
              width: ['50vw', '50vw'],
              invertX: !0,
              invertY: !0,
            }),
          );
        };
      t.default = function() {
        return r.a.createElement(
          i.a,
          null,
          r.a.createElement(
            c.a.Container,
            { id: '404', Background: m },
            r.a.createElement(
              o.Box,
              { width: [320, 400, 600], m: 'auto' },
              r.a.createElement(
                o.Heading,
                { color: 'primaryDark', fontSize: ['9rem', '13rem', '16rem'] },
                '404',
              ),
              r.a.createElement(
                o.Heading,
                { color: 'secondary', fontSize: ['4rem', '5rem', '6rem'] },
                "There isn't anything here",
              ),
            ),
          ),
        );
      };
    },
    238: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return c;
      });
      var a = n(0),
        r = n.n(a),
        o = (n(70), n(244), n(9).default.enqueue, r.a.createContext({}));
      function i(e) {
        var t = e.staticQueryData,
          n = e.data,
          a = e.query,
          o = e.render,
          i = n ? n.data : t[a] && t[a].data;
        return r.a.createElement(
          r.a.Fragment,
          null,
          i && o(i),
          !i && r.a.createElement('div', null, 'Loading (StaticQuery)'),
        );
      }
      var c = function(e) {
        var t = e.data,
          n = e.query,
          a = e.render,
          c = e.children;
        return r.a.createElement(o.Consumer, null, function(e) {
          return r.a.createElement(i, {
            data: t,
            query: n,
            render: a || c,
            staticQueryData: e,
          });
        });
      };
    },
    240: function(e, t, n) {
      'use strict';
      n(40);
      var a = n(0),
        r = n.n(a),
        o = n(234),
        i = n(239),
        c = n(235),
        l = n(273),
        m = n.n(l),
        s = n(248),
        d = o.default.div.withConfig({
          displayName: 'Section__SectionContainer',
          componentId: 'sc-18uueee-0',
        })([
          'min-height:100vh;min-width:320px;max-width:1366px;display:flex;margin:auto;flex:0 1 auto;flex-direction:column;justify-content:center;padding:5em 1em;scroll-behavior:smooth;',
        ]),
        u = function() {
          return r.a.createElement('div', null);
        };
      t.a = {
        Container: function(e) {
          var t = e.id,
            n = e.children,
            a = e.Background,
            o = void 0 === a ? u : a;
          return r.a.createElement(
            i.b,
            { id: t, style: { position: 'relative' } },
            r.a.createElement(o, null),
            r.a.createElement(d, null, n),
          );
        },
        Header: function(e) {
          var t = e.name,
            n = e.icon,
            a = void 0 === n ? '' : n,
            o = e.label,
            i = void 0 === o ? '' : o;
          return r.a.createElement(
            m.a,
            { left: !0 },
            r.a.createElement(
              c.Heading,
              { color: 'secondaryDark', mb: 4 },
              r.a.createElement(
                s.a,
                { selected: !0 },
                t,
                a &&
                  r.a.createElement(
                    'span',
                    {
                      role: 'img',
                      'aria-label': i,
                      style: { marginLeft: '10px' },
                    },
                    a,
                  ),
              ),
            ),
          );
        },
      };
    },
    241: function(e, t, n) {
      'use strict';
      var a = n(234).default.div.withConfig({
        displayName: 'Triangle',
        componentId: 'le4p17-0',
      })(
        [
          'position:absolute;width:0;height:0;z-index:-2;',
          ' ',
          ' @media only screen and (min-width:768px){',
          ' ',
          ';}',
        ],
        function(e) {
          var t = e.theme.colors[e.color] || e.color,
            n = e.height[0] + ' solid ' + t + ';';
          return e.invertY
            ? 'border-bottom: ' + n + '; bottom: 0;'
            : 'border-top: ' + n + ';';
        },
        function(e) {
          var t = e.width[0] + ' solid transparent;';
          return e.invertX
            ? 'border-left: ' + t + '; right: 0;'
            : 'border-right: ' + t + ';';
        },
        function(e) {
          var t = e.height[1];
          return e.invertY
            ? 'border-bottom-width: ' + t + ';'
            : 'border-top-width: ' + t + ';';
        },
        function(e) {
          var t = e.width[1];
          return e.invertX
            ? 'border-left-width: ' + t + ';'
            : 'border-right-width: ' + t + ';';
        },
      );
      t.a = a;
    },
    244: function(e, t, n) {
      var a;
      e.exports = ((a = n(256)) && a.default) || a;
    },
    248: function(e, t, n) {
      'use strict';
      var a = n(234).default.span.withConfig({
        displayName: 'LinkAnimated',
        componentId: 'qj14bt-0',
      })(
        [
          'text-decoration:none;position:relative;margin-bottom:0;padding-bottom:5px;color:inherit;',
          ';transition:0.4s;cursor:',
          ";&:after{content:'';position:absolute;right:0;width:0;bottom:-5px;background:",
          ';height:5px;transition-property:width;transition-duration:0.3s;transition-timing-function:ease-out;}&:hover:after{left:0;right:auto;width:100%;}',
        ],
        function(e) {
          return (
            e.selected &&
            'border-bottom:  5px solid ' + e.theme.colors.primaryLight
          );
        },
        function(e) {
          return e.onClick ? 'pointer' : 'default';
        },
        function(e) {
          return e.theme.colors.secondaryLight;
        },
      );
      t.a = a;
    },
    253: function(e, t) {
      e.exports = {
        background: '#fff1db',
        backgroundDark: '#e5dfd5',
        primary: '#91443d',
        primaryLight: '#a64253',
        primaryDark: '#ff6f61',
        secondary: '#5f4b8b',
        secondaryLight: '#424874',
        secondaryDark: '#340068',
      };
    },
    254: function(e) {
      e.exports = {
        data: {
          contentfulAbout: {
            name: 'Jude Pineda',
            description: "I'm a full stack developer!",
            profile: {
              favicon16: {
                src:
                  '//images.ctfassets.net/nussweg0k89r/6nf3rNaaVaUqYcoAcciSeC/5ae98f3147464f6718d47baab9d63519/Mate_Logo.png?w=16&fl=progressive&q=50',
              },
              favicon32: {
                src:
                  '//images.ctfassets.net/nussweg0k89r/6nf3rNaaVaUqYcoAcciSeC/5ae98f3147464f6718d47baab9d63519/Mate_Logo.png?w=32&fl=progressive&q=50',
              },
              bigIcon: {
                src:
                  '//images.ctfassets.net/nussweg0k89r/6nf3rNaaVaUqYcoAcciSeC/5ae98f3147464f6718d47baab9d63519/Mate_Logo.png?w=192&fl=progressive&q=50',
              },
              appleIcon: {
                src:
                  '//images.ctfassets.net/nussweg0k89r/6nf3rNaaVaUqYcoAcciSeC/5ae98f3147464f6718d47baab9d63519/Mate_Logo.png?w=180&fl=progressive&q=50',
              },
            },
          },
        },
      };
    },
    256: function(e, t, n) {
      'use strict';
      n.r(t);
      n(24);
      var a = n(0),
        r = n.n(a),
        o = n(109);
      t.default = function(e) {
        var t = e.location,
          n = e.pageResources;
        return n
          ? r.a.createElement(
              o.a,
              Object.assign({ location: t, pageResources: n }, n.json),
            )
          : null;
      };
    },
    266: function(e, t, n) {
      'use strict';
      var a = n(0),
        r = n.n(a),
        o = n(234),
        i = n(239),
        c = (n(268), n(243)),
        l = n.n(c),
        m = n(253),
        s = n.n(m),
        d = (n(40), n(254)),
        u = n(269),
        f = n.n(u),
        h = n(238),
        p = Object(o.withTheme)(function(e) {
          var t = e.theme,
            n = void 0 === t ? {} : t;
          return r.a.createElement(h.a, {
            query: '4063282471',
            render: function(e) {
              var t = e.contentfulAbout,
                a = t.name,
                o = t.description,
                i = t.profile,
                c = a + ' Portfolio';
              return r.a.createElement(
                f.a,
                { htmlAttributes: { lang: 'en' } },
                r.a.createElement('meta', { charSet: 'utf-8' }),
                r.a.createElement('title', null, c),
                r.a.createElement('meta', { name: 'description', content: o }),
                r.a.createElement('link', {
                  rel: 'shortcut icon',
                  href: 'https:' + i.favicon32.src,
                }),
                r.a.createElement('meta', {
                  name: 'theme-color',
                  content: n.background,
                }),
                r.a.createElement('meta', {
                  name: 'image',
                  content: 'https:' + i.favicon32.src,
                }),
                r.a.createElement('meta', { itemProp: 'name', content: c }),
                r.a.createElement('meta', {
                  itemProp: 'description',
                  content: o,
                }),
                r.a.createElement('meta', {
                  itemProp: 'image',
                  content: 'https:' + i.favicon32.src,
                }),
                r.a.createElement('meta', { name: 'og:title', content: c }),
                r.a.createElement('meta', {
                  name: 'og:description',
                  content: o,
                }),
                r.a.createElement('meta', {
                  name: 'og:image',
                  content: 'https:' + i.bigIcon.src,
                }),
                r.a.createElement('meta', { name: 'og:site_name', content: c }),
                r.a.createElement('meta', {
                  name: 'og:locale',
                  content: 'en_US',
                }),
                r.a.createElement('meta', {
                  name: 'og:type',
                  content: 'website',
                }),
                r.a.createElement('meta', {
                  name: 'twitter:card',
                  content: 'summary',
                }),
                r.a.createElement('meta', {
                  name: 'twitter:title',
                  content: c,
                }),
                r.a.createElement('meta', {
                  name: 'twitter:description',
                  content: o,
                }),
                r.a.createElement('meta', {
                  name: 'twitter:image',
                  content: 'https:' + i.bigIcon.src,
                }),
                r.a.createElement('meta', {
                  name: 'twitter:image:src',
                  content: 'https:' + i.bigIcon.src,
                }),
                r.a.createElement('link', {
                  rel: 'apple-touch-icon',
                  sizes: '180x180',
                  href: 'https:' + i.appleIcon.src,
                }),
                r.a.createElement('link', {
                  rel: 'icon',
                  type: 'image/png',
                  sizes: '32x32',
                  href: 'https:' + i.favicon32.src,
                }),
                r.a.createElement('link', {
                  rel: 'icon',
                  type: 'image/png',
                  sizes: '16x16',
                  href: 'https:' + i.favicon16.src,
                }),
              );
            },
            data: d,
          });
        });
      function g() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return (e.raw = t), e;
        })([
          "\n  *,\n  *::after,\n  *::before { \n    box-sizing: inherit;\n    }\n\n  body {\n    box-sizing: border-box; \n    margin: 0;\n    font-family: Cabin, 'Open Sans', sans-serif;\n    font-display: swap;\n    font-display: fallback;\n    overflow-x: hidden;\n  }\n",
        ]);
        return (
          (g = function() {
            return e;
          }),
          e
        );
      }
      var v = Object(o.createGlobalStyle)(g());
      l()({ ssrFadeout: !0 });
      t.a = function(e) {
        var t = e.children;
        return (
          Object(a.useEffect)(function() {
            var e, t;
            (e = 'https://use.fontawesome.com/fd58d214b9.js'),
              ((t = document.createElement('script')).src = e),
              (t.defer = !0),
              document.getElementsByTagName('body')[0].appendChild(t);
          }, []),
          r.a.createElement(
            a.Fragment,
            null,
            r.a.createElement(v, null),
            r.a.createElement(
              o.ThemeProvider,
              { theme: { colors: s.a } },
              r.a.createElement(i.a, null, r.a.createElement(p, null), t),
            ),
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-404-js-f267716a4bc97f759694.js.map
