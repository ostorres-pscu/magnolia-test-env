import React from 'react';
import {
  events,
  getRouterBasename,
  getAPIBase,
  getLanguages,
  getCurrentLanguage,
  changeLanguage,
} from '../helpers/AppHelpers';

function renderLanguages() {
  const currentLanguage = getCurrentLanguage();

  return (
    <div className='languages'>
      {getLanguages().map((lang) => (
        <span key={`lang-${lang}`} data-active={currentLanguage === lang} onClick={() => changeLanguage(lang)}>
          {lang}
        </span>
      ))}
    </div>
  );
}

function Navigation() {
  const [navItems, setNavItems] = React.useState([]);

  React.useEffect(() => {
    async function fetchNav() {
      const apiBase = getAPIBase();
      const url = apiBase + process.env.REACT_APP_MGNL_API_NAV + process.env.REACT_APP_MGNL_APP_BASE;
      console.log('NAV URL:' + url);
      const response = await fetch(url);
      const data = await response.json();
      let items = data['@nodes'].map((nodeName) => {
        return data[nodeName];
      });
      setNavItems([data, ...items]);
    }

    if (navItems.length < 1) {
      fetchNav();
    }
  }, [navItems]);

  return navItems ? (
    <nav className="navbar navbar-expand-lg navbar-light container">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">

      {navItems.map((item) => {
        let newHref = (getRouterBasename() + item['@path'].replace(process.env.REACT_APP_MGNL_APP_BASE, '')).replace(
          '//',
          '/'
        );

        return (
          <li className="nav-item ">
          <a className="nav-link"
            key={item['@id']}
            href={newHref}
            onClick={(e) => {
              e.preventDefault();

              window.history.pushState({}, '', e.currentTarget.href);
              events.emit('popstate');
            }}
          >
            {item.navigationTitle || item.title || item['@name']}
          </a>
      </li>
        );
      })}
      

    </ul>
  </div>
</nav>
  ) : (
    <div />
  );
}

export default Navigation;