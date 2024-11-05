import { useEffect } from "react";
import { Title } from "../components/Title.component";

export const Search = () => {
  useEffect (() => {
    document.body.style.backgroundColor ='#E6889F';
    return() => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  return(
    <div className="container-search">
      <Title/>
    </div>
  );
};