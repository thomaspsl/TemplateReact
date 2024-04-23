import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Wrapper(props: any) {
  useEffect(() => {

  }, []);

  return (
  <>
    <link rel="stylesheet" href={process.env.PUBLIC_URL + '/assets/css/layouts/menus.css'} />

    <Link to="/" id="home">HOME</Link>

    <Link to="/login" id="login">LOGIN</Link>
  </>
  );
}