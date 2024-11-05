import diamond from '../assets/diamond.svg';
import '../styles/Title.style.css';

export const Title = (props: {title: string}) =>{
  return(
    <>
      <div className='container-title'>
        <h1>{props.title}</h1>
        <div className="container-title-diamond">
          <img src={diamond} alt="diamond" />
        </div>
      </div>
    </>
  );
};