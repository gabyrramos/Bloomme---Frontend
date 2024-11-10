// import '../styles/Assistent.style.css';

export const Assistent = ({ rabbitUrl }: { rabbitUrl: string }) =>{
  return(
    <div className="container-assistent-component">
      <div>
        <span className="">!Hola, en que te puedo ayudar el día de hoy!</span>
        <img src={rabbitUrl} alt="rabbit assistent" />
      </div>
    </div>
  );
};