import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Mouse from '../components/Mouse';
import Up from '../components/Up';

export default function Wrapper(props: any) {
  useEffect(() => {

  }, []);

  return (
  <>
    <Header />

    <Outlet />

    <Mouse />

    <Up />

    <Footer />
  </>
  );
}
