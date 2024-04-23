import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Wrapper(props: any) {
  useEffect(() => {

  }, []);

  return (
  <>
    <link rel="stylesheet" href={process.env.PUBLIC_URL + '/assets/css/layouts/footer.css'} />

    <footer className={`footer ${props.className}`}>

      <div className="left_footer">

        <span> @ <span className="phone">{new Date().getFullYear()} -</span> {process.env.REACT_APP_NAME}</span>
        
      </div>  

      <div className="right_footer">

        <div className="del">

          <Link to="/networks" id="networks">Social Networks</Link>

          <span className="network"> / </span> 
          
        </div>

        <Link to="/rights" id="rights">
          
          <span className="rights_right">All </span>Rights<span className="rights_left"> Reserved</span>

        </Link>

      </div>

    </footer>
  </>
  );
}