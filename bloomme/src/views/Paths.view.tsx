import PathCard from "../components/PathPage/PathCard.component";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { pathsGet } from "../services/Path.service";
import { Assistant } from "../components/Assistant.component";
import SafeAreaHeader from "../components/SafeArea/safeareaheader.component";

interface IPath {
  title: string;
  imageUrl: string;
}

function Paths() {
  const [paths, setPaths] = useState<IPath[]>([]);
  const navigate = useNavigate();

  const handlePaths = async() => {
    try {
      const response = await pathsGet();
      const data = response.map((path) => ({
        path_id: path.path_id,
        title: path.name,
        imageUrl: path.image,
      }));
      setPaths(data);
    } catch (error) {
      throw new Error(`Error en la solicitud: ${error}`);
    }
  };

  useEffect(() => {
    handlePaths();
  }, []);

  const handlePathClick = (index: number, title: string) => {
    navigate(`/paths/${title}/${index}`);
  };
  return (
    <div className="flex flex-col bg-gradient-to-b from-[#f29fb4] to-[#ebc0c0] min-h-screen">
      <SafeAreaHeader />
      <div className="flex flex-col items-center">
        <h1 className="mb-10 font-semibold text-3xl text-white">Routes</h1>

        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 px-6 w-full max-w-6xl">
          {paths.map((path, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => handlePathClick(path?.path_id, path.title)}
            >
              <PathCard title={path.title} imageUrl={path.imageUrl} />
            </div>
          ))}
        </div>
        <p className="mt-12 text-lg text-slate-700">More coming soon</p>
      </div>
      <div className="right-0 bottom-0 absolute p-4">
        <Assistant text="How can I help you?"/>
      </div>
    </div>
  );
}

export default Paths;
