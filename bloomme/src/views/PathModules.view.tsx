import { useParams, useNavigate } from "react-router-dom";
import avatar from "../assets/avatar.svg";
import { Menu } from "../components/Menu.component";
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
  const [modules, setModules] = useState<Module[]>([]); // Estado para almacenar los módulos


  useEffect(() => {
    const fetchModules = async() => {
      if (!id) {
        console.log("Por favor, proporciona un ID válido para el módulo.");
        return;
      }

      try {
        const modulesData = await pathModulesGet(id);
        setModules(modulesData.modules); // Asigna los módulos obtenidos al estado
      } catch (err) {
        console.log('Hubo un error', err);
      }
    };

    fetchModules();
  }, [id]);

  //TODO: consumir api para traer los modulos del path
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-[#f29fb4] to-[#ebc0c0] min-h-screen">
      {/* <Menu title="Ana Maria" avatarUrl={avatar} /> */}
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
            onClick={() => navigate(`/module/${module.module_id}`)} // Redirigir al hacer clic
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
      onClick={onClick} // Manejar el clic para redirigir
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
