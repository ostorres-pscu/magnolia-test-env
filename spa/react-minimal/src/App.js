import React, { useState, useEffect } from 'react';
import PageLoader from './helpers/PageLoader';
import Navigation from './components/Navigation';
import './App.css';
import { events } from './helpers/AppHelpers';

function App() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    function handlePopstate() {
      setPathname(window.location.pathname);
    }

    events.on('popstate', handlePopstate);
    window.addEventListener('popstate', handlePopstate);

    return () => {
      events.removeListener('popstate', handlePopstate);
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);

  return (
    <>
      <header>
        <Navigation />
      </header>

      <div className='container'>
        <PageLoader pathname={pathname} />
      </div>

      <footer>
        Integer posuere erat a asdf asdf asdad ads asd f ante venenatis dapibus posuere velit aliquet.
        <br />
        Copyright © 2025
      </footer>
    </>
  );
}

export default App;
