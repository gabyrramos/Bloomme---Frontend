import { useParams } from "react-router-dom";
import avatar from "../assets/avatar.svg";
import { Menu } from "../components/Menu.component";

//TODO: borrar
const data = [
  {
    title: "Modulo 1",
    description: "Descripcion del modulo 1",
    imageUrl: "/path/to/image1.png",
  },
  {
    title: "Modulo 2",
    description: "Descripcion del modulo 2",
    imageUrl: "/path/to/image2.png",
  },
  {
    title: "Modulo 3",
    description: "Descripcion del modulo 3",
    imageUrl: "/path/to/image3.png",
  },
  {
    title: "Modulo 4",
    description: "Descripcion del modulo 4",
    imageUrl: "/path/to/image4.png",
  },
  {
    title: "Modulo 5",
    description: "Descripcion del modulo 1",
    imageUrl: "/path/to/image1.png",
  },
  {
    title: "Modulo 6",
    description: "Descripcion del modulo 2",
    imageUrl: "/path/to/image2.png",
  },
  {
    title: "Modulo 7",
    description: "Descripcion del modulo 3",
    imageUrl: "/path/to/image3.png",
  },
  {
    title: "Modulo 8",
    description: "Descripcion del modulo 4",
    imageUrl: "/path/to/image4.png",
  },
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
  const { id } = useParams();
  //TODO: consumir api para traer los modulos del path
  return (
    <div className="flex flex-col items-center bg-[#F29FB3] min-h-screen">
      <Menu title="Ana Maria" avatarUrl={avatar} />
      <h1 className="mb-10 font-semibold text-3xl text-white pt-10">
        Titulo del Path
      </h1>
      <div className="w-full max-w-5xl grid grid-cols-12 gap-6">
        {data.map((module, index) => (
          <Card key={module.title} module={module} index={index} />
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

function Card({ module, index }: { module: Module; index: number }) {
  const colSpan = index % 4 === 0 || index % 4 === 3 ? 4 : 8;
  const randomColor =
    "#" + myColors[Math.floor(Math.random() * myColors.length)];

  return (
    <div
      className={`h-32 rounded-2xl col-span-${colSpan} flex items-center justify-center cursor-pointer shadow-lg shadow-red-500/40`}
      style={{ backgroundColor: randomColor }}
    >
      {module.title}
    </div>
  );
}

export default PathModules;
