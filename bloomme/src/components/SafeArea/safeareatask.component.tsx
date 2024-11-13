import React from "react";
import SafeAreaHeader from "./safeareaheader.component";
import SafeAreaTaskBody from "./safeareataskbody.component";

const SafeAreaTask: React.FC = () => {
  return (
    <div>
      <SafeAreaHeader />
      <SafeAreaTaskBody />
    </div>
  );
};

export default SafeAreaTask;
