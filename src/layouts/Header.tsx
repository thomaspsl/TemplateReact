import Hamburger from '../components/Hamburger';
import { Link } from 'react-router-dom';
import Menus from './Menus';
import Footer from './Footer';
import { useEffect } from 'react';

export default function Wrapper(props: any) {
  useEffect(() => {

  }, []);

  return (
  <>
    <link rel='stylesheet' href={process.env.PUBLIC_URL + '/assets/css/layouts/header.css'} />

    <header className='header'>

      <div className='header_container'>

        <div className='navigation'>

          <div className='menus'>

            <div className='left_menus'>

              <Link to='/' id='home'>
                
                <img className='logo' src='assets/pictures/logo.png' alt='logo' />

                <span className='name'>...<span className='title'> | ...</span></span>

              </Link>

            </div>

            <nav className='right_menus'>

              <Menus></Menus>

              <Footer className=' effect'></Footer>

            </nav>

            <Hamburger></Hamburger>

            <nav className='mobileNav'>

              <div className='mobileMenus'>
                
                <ul className='mobileName'>

                  <Menus></Menus>

                </ul>

              </div>

            </nav>

          </div>

        </div>

      </div>

    </header>
  </>
  );
}