import { useParams, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { getModule } from "../services/Module.service";
import { useEffect, useState } from "react";
import { Assistant } from "../components/Assistant.component";
import SafeAreaHeader from "../components/SafeArea/safeareaheader.component";

interface IModule {
  module_id: number;
  name: string;
  image: string;
  content: string;
  point: number;
  path_id: number;
  createdAt: string;
  updatedAt: string;
}

function Module() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [module, setModule] = useState<IModule | null>(null);
  useEffect(() => {
    const getModuleData = async() => {
      try {
        if (!id) {
          return;
        }
        const moduleApi = await getModule(parseInt(id));
        setModule(moduleApi);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unexpected error';
        setModule(errorMessage);
      }
    };
    getModuleData();
  }, [id]);

  if (!module) {
    return <p>Módulo no encontrado</p>;
  }

  return (
    <div className="bg-gradient-to-b from-[#f29fb4] to-[#ebc0c0] min-h-screen flex flex-col items-center">
      <SafeAreaHeader />
      <main className="w-full max-w-6xl px-10 grid grid-cols-12 gap-4 py-10">
        <div className="col-span-2 pt-4">
          <button
            onClick={() => navigate(-1)}
            className="bg-[#ADC9F0] py-3 px-6 rounded-xl flex gap-4 items-center text-white"
          >
            <MdArrowBack size={24} />
            Back
          </button>
        </div>
        <div className="col-span-10 grid grid-cols-12 gap-2">
          <h1 className="col-span-12 font-semibold text-3xl text-white text-center py-5">
            {module.name}
          </h1>
          <div className="col-span-6 p-5 grid items-center">
            <img
              src={module.image}
              alt={module.name}
              className="object-contain w-full rounded-lg"
            />
          </div>
          <div className="col-span-6 flex flex-col justify-around p-6 items-center text-white gap-14">
            <p>{module.content}</p>
            <button
              className="bg-[#ADC9F0] py-3 px-6 rounded-xl flex gap-4 items-center text-white"
              onClick={() => navigate(`/quizQuestionModule/${module.name}/${module.module_id}`)}
            >
              Take Quiz
              <MdOutlineLibraryBooks size={24} />
            </button>
          </div>
        </div>
        <Assistant text="How can I help you?"/>
      </main>
    </div>
  );
}

export default Module;
