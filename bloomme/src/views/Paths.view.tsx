import { Menu } from "../components/Menu.component";
import avatar from "../assets/avatar.svg";
import PathCard from "../components/PathPage/PathCard.component";
import bodyImage from "../assets/PathsPage/care-of-my-body-path.png";
import healthImage from "../assets/PathsPage/reproductive-health-path.png";
import boundariesImage from "../assets/PathsPage/my-boundaries-path.png";
import selfImage from "../assets/PathsPage/self-knowledge-path.png";
import bunny from "../assets/PathsPage/bunny-path.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate para redirección

interface IPath {
  title: string;
  imageUrl: string;
}

const data: IPath[] = [
  {
    title: "Taking Care of My Body",
    imageUrl: `${bodyImage}`,
  },
  {
    title: "Knowing My Boundaries",
    imageUrl: `${boundariesImage}`,
  },
  {
    title: "Empowerment and Self-Knowledge",
    imageUrl: `${selfImage}`,
  },
  {
    title: "Taking Care of My Sexual and Reproductive Health",
    imageUrl: `${healthImage}`,
  },
  // Add more paths as needed...
];

function Paths() {
  const [paths, setPaths] = useState<IPath[]>([]);
  const navigate = useNavigate(); // Declara el hook useNavigate

  useEffect(() => {
    setPaths(data);
  }, []);

  // Función para manejar el clic en un PathCard
  const handlePathClick = (index: number) => {
    navigate(`/paths/${index}`);
  };

  return (
    <div className="flex flex-col items-center bg-[#F29FB3] min-h-screen">
      <Menu title="Ana Maria" avatarUrl={avatar} />

      <h1 className="mb-10 font-semibold text-3xl text-white">Routes</h1>

      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 px-6 w-full max-w-6xl">
        {paths.map((path, index) => (
          <div key={index} className="cursor-pointer" onClick={() => handlePathClick(index)} // Redirige al hacer clic
          >
            <PathCard title={path.title} imageUrl={path.imageUrl} />
          </div>
        ))}
      </div>

      <p className="mt-12 text-lg text-slate-700">More coming soon</p>

      <div className="right-0 bottom-0 absolute p-4">
        <img src={bunny} alt="Bunny Icon" className="w-16 h-16" />
      </div>
    </div>
  );
}

export default Paths;
