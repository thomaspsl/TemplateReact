import { useEffect } from 'react';

export default function Wrapper(props: any) {
  useEffect(() => {

  }, []);

  return (
  <>
    <link rel='stylesheet' href={process.env.PUBLIC_URL + '/assets/css/components/scroller.css'} />

    <div className='scroller'>

      <b>
                
        <div>

            <p>Scroll</p>

        </div>

      </b>

    </div>
  </>
  );
}