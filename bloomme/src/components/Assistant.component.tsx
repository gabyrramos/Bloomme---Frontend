import { Link } from 'react-router-dom';
import '../styles/Assistant.style.css';
import { useEffect, useState } from 'react';
import { useAssistantConnection } from '../services/Assistant.service';

export const Assistant = ({text}: { text:string }) =>{
  const [assistantImage, setAssistantImage] = useState("");
  const {assistantApi} = useAssistantConnection();
  const assistantId = localStorage.getItem("assistant");

  useEffect(() =>{
    const handleImage = async() => {
      const response = await assistantApi();
      const assistantData = response.find((assistant) => assistant.assistant_id === parseInt(assistantId));
      setAssistantImage(assistantData.image);
    };
    handleImage();
  },[assistantId]);

  return(
    <div className="container-assistant-component">
      <div className="assistant-message-component border border-white">{text}</div>
      <Link to='/chat' className="assistant-image-component"><img src={assistantImage} alt="rabbit assistant" /></Link>
    </div>
  );
};