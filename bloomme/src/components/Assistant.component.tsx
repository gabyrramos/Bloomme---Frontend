import { Link } from 'react-router-dom';
import '../styles/Assistant.style.css';

export const Assistant = ({text, rabbitUrl }: { text:string, rabbitUrl: string }) =>{
  return(
    <div className="container-assistant-component">
      <div className="assistant-message-component">{text}</div>
      <Link to='/chat' className="assistant-image-component"><img src={rabbitUrl} alt="rabbit assistant" /></Link>
    </div>
  );
};