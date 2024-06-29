import { useEffect } from 'react';

export default function Wrapper(props: any) {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  return (
  <>
    <link rel='stylesheet' href={process.env.PUBLIC_URL + '/assets/css/routes/unknown.css'} />

    <div className='content'>

      <div className='middle'>

        <span>404</span>

      </div>
            
    </div>
  </>
  );
}