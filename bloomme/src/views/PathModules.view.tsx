import { useParams, useNavigate } from "react-router-dom";
import { pathModulesGet } from "../services/PathModule.service";
import { useEffect, useState } from "react";
import { Assistant } from "../components/Assistant.component";
import SafeAreaHeader from "../components/SafeArea/safeareaheader.component";


const myColors = [
  "cadbf3",
  "fed0d3",
  "dceefa",
  "ffdae1",
  "cae2c8",
  "bfe8e2",
  "cae2c8",
  "c6efc7",
  "f3d2d2",
  "fbf8ef",
  "a5e0e1",
];

function PathModules() {
  const navigate = useNavigate();
  const { id, name } = useParams<{ id: string }>();
  const [modules, setModules] = useState<Module[]>([]);


  useEffect(() => {
    const fetchModules = async() => {
      if (!id) {
        return;
      }

      try {
        const modulesData = await pathModulesGet(id);
        setModules(modulesData.modules);
      } catch (err) {
        throw new Error(`Error en la solicitud: ${err}`);
      }
    };

    fetchModules();
  }, [id]);

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-[#f29fb4] to-[#ebc0c0] min-h-screen">
      <SafeAreaHeader />
      <h1 className="mb-10 font-semibold text-3xl text-white pt-10">
        {name}
      </h1>
      <div className="w-full max-w-5xl grid grid-cols-12 gap-6">
        {modules.map((module, index) => (
          <Card
            key={index}
            module={module}
            index={index}
            onClick={() => navigate(`/module/${module.module_id}`)}
          />
        ))}
      </div>
    </div>
  );
}


interface Module {
 path_id: number;
 image: string;
 name: string;
 point: number;
 content: string;
 updateAt: number;
 createdAt: number;
}

interface CardProps {
  module: Module;
  index: number;
  onClick: () => void;
}

function Card({ module, index, onClick }: CardProps) {
  const colSpan = index % 4 === 0 || index % 4 === 3 ? 4 : 8;
  const randomColor =
    "#" + myColors[Math.floor(Math.random() * myColors.length)];

  return (
    <div
      onClick={onClick}
      className={`h-32 rounded-2xl flex items-center justify-center cursor-pointer shadow-lg shadow-red-500/40 ${
        colSpan === 4 ? "col-span-4" : "col-span-8"
      }`}
      style={{ backgroundColor: randomColor }}
    >
      {module.name}
      <Assistant text="How can I help you?"/>
    </div>
  );
}

export default PathModules;
