import { Link } from 'react-router-dom';
import '../styles/Assistent.style.css';

export const Assistent = ({text, rabbitUrl }: { text:string, rabbitUrl: string }) =>{
  return(
    <div className="container-assistent-component">
      <div className="assistant-message-component">{text}</div>
      <Link to='/chat' className="assistant-image-component"><img src={rabbitUrl} alt="rabbit assistent" /></Link>
    </div>
  );
};