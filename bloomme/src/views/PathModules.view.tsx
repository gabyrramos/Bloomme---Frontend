import { useParams, useNavigate } from "react-router-dom";
import avatar from "../assets/avatar.svg";
import { Menu } from "../components/Menu.component";

//TODO: borrar
const data = [
  {
    id: "1",
    title: "My Body Belongs to Me",
    description: "Descripcion del modulo 1",
    imageUrl: "/path/to/image1.png",
  },
  {
    id: "2",
    title: "Feeling Safe in Different Places",
    description: "Descripcion del modulo 2",
    imageUrl: "/path/to/image2.png",
  },
  {
    id: "3",
    title: "The Menstrual Cycle (Introduction)",
    description: "Descripcion del modulo 3",
    imageUrl: "/path/to/image3.png",
  },
  {
    id: "4",
    title: "Recognizing Uncomfortable Situations",
    description: "Descripcion del modulo 4",
    imageUrl: "/path/to/image4.png",
  },
  {
    id: "5",
    title: "Building Self-Confidence",
    description: "Descripcion del modulo 5",
    imageUrl: "/path/to/image5.png",
  },
  {
    id: "6",
    title: "Basic Personal Hygiene",
    description: "Descripcion del modulo 6",
    imageUrl: "/path/to/image6.png",
  },
  {
    id: "7",
    title: "Healthy Eating",
    description: "Descripcion del modulo 7",
    imageUrl: "/path/to/image7.png",
  },
  {
    id: "8",
    title: "Assertive Communication",
    description: "Descripcion del modulo 8",
    imageUrl: "/path/to/image8.png",
  },
  // Agrega todos los módulos aquí con un campo `id`
];

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
  /* const { id } = useParams<{ id: string }>(); */
  const navigate = useNavigate();
  //TODO: consumir api para traer los modulos del path
  return (
    <div className="flex flex-col items-center bg-[#F29FB3] min-h-screen">
      <Menu title="Ana Maria" avatarUrl={avatar} />
      <h1 className="mb-10 font-semibold text-3xl text-white pt-10">
        Titulo del Path
      </h1>
      <div className="w-full max-w-5xl grid grid-cols-12 gap-6">
        {data.map((module, index) => (
          <Card
            key={module.id}
            module={module}
            index={index}
            onClick={() => navigate(`/module/${module.id}`)} // Redirigir al hacer clic
          />
        ))}
      </div>
    </div>
  );
}

interface Module {
  title: string;
  description: string;
  imageUrl: string;
}

interface CardProps {
  module: Module;
  index: number;
  onClick: () => void;
}

function Card({ module, index, onClick }: CardProps) {
  const colSpan = index % 4 === 0 || index % 4 === 3 ? 4 : 8;
  const randomColor = "#" + myColors[Math.floor(Math.random() * myColors.length)];

  return (
    <div
      onClick={onClick} // Manejar el clic para redirigir
      className={`h-32 rounded-2xl flex items-center justify-center cursor-pointer shadow-lg shadow-red-500/40 ${
        colSpan === 4 ? 'col-span-4' : 'col-span-8'
      }`}
      style={{ backgroundColor: randomColor }}
    >
      {module.title}
    </div>
  );
}

export default PathModules;
