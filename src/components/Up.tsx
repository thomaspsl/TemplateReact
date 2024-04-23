import { useEffect } from "react";

export default function Wrapper(props: any) {
  useEffect(() => {
    displayUp();
  }, []);

  return (
  <>
    <link rel="stylesheet" href={process.env.PUBLIC_URL + '/assets/css/components/up.css'} />

    <div className="up">

      <img src={process.env.PUBLIC_URL + '/assets/pictures/up.png'} alt="up"></img>
            
    </div>
  </>
  );
}

function displayUp(){
    window.addEventListener('scroll', _ => {
        if(window.scrollY > 150){
            document.querySelector('.up')?.classList.add('visible');
        } else{
            document.querySelector('.up')?.classList.remove('visible');
        }
    });   
}