import { useParams, useNavigate } from "react-router-dom";
import { Menu } from "../components/Menu.component";
import avatar from "../assets/avatar.svg";
import { FaBirthdayCake } from "react-icons/fa";

const learningTopics = [
  {
    id: 1,
    title: "Understanding Your Body",
    img: "https://via.placeholder.com/400x500",
    description:
      "Learn about the different parts of your body and how they work. Understand the importance of taking care of your health and well-being.",
  },
  {
    id: 2,
    title: "Personal Boundaries",
    img: "https://via.placeholder.com/400x500",
    description:
      "Explore what personal boundaries are and why they are important. Learn how to set and respect boundaries to build healthy relationships.",
  },
  {
    id: 3,
    title: "Healthy Friendships",
    img: "https://via.placeholder.com/400x500",
    description:
      "Discover what makes a friendship healthy and supportive. Learn how to communicate effectively and manage conflicts with friends.",
  },
  {
    id: 4,
    title: "Emotional Well-being",
    img: "https://via.placeholder.com/400x500",
    description:
      "Understand different emotions and how to manage them. Learn techniques for relaxation and mindfulness to maintain emotional health.",
  },
  {
    id: 5,
    title: "Safe and Unsafe Touch",
    img: "https://via.placeholder.com/400x500",
    description:
      "Learn the difference between safe and unsafe touch. Understand the importance of consent and knowing when to seek help.",
  },
  {
    id: 6,
    title: "Nutrition and Exercise",
    img: "https://via.placeholder.com/400x500",
    description:
      "Discover the basics of good nutrition and the benefits of regular exercise. Learn how to make healthy food choices and stay active.",
  },
  {
    id: 7,
    title: "Digital Safety",
    img: "https://via.placeholder.com/400x500",
    description:
      "Learn how to stay safe online. Understand the importance of privacy, safe communication, and recognizing online dangers.",
  },
  {
    id: 8,
    title: "Self-Esteem and Confidence",
    img: "https://via.placeholder.com/400x500",
    description:
      "Explore ways to build self-esteem and confidence. Learn to appreciate your unique qualities and embrace who you are.",
  },
];

function Module() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Convertir id a número y buscar el módulo correspondiente
  const moduleId = parseInt(id ?? "", 10);
  const module = learningTopics.find((topic) => topic.id === moduleId);
  console.log(module);

  // Redirigir si el módulo no existe
  if (!module) {
    return <p>Módulo no encontrado</p>;
  }

  return (
    <div className="bg-[#F29FB3] min-h-screen flex flex-col items-center">
      <Menu title="Ana Maria" avatarUrl={avatar} />
      <main className="w-full max-w-6xl px-10 grid grid-cols-12 gap-4 py-10">
        <div className="col-span-2">
          <button
            onClick={() => navigate(-1)} // Botón para regresar a la pantalla anterior
            className="bg-[#ADC9F0] py-3 px-6 rounded-xl flex gap-4 items-center text-white"
          >
            <FaBirthdayCake size={24} />
            Back
          </button>
        </div>
        <div className="col-span-10 grid grid-cols-12 gap-2">
          <h1 className="col-span-12 font-semibold text-3xl text-white text-center py-5">
            {module.title}
          </h1>
          <div className="col-span-6 p-5 grid items-center">
            <img
              src={module.img}
              alt={module.title}
              className="object-contain w-full rounded-lg"
            />
          </div>
          <div className="col-span-6 flex flex-col justify-around p-6 items-center text-white">
            <p>{module.description}</p>
            <button className="bg-[#ADC9F0] py-3 px-6 rounded-xl flex gap-4 items-center text-white">
              Take Quiz
              <FaBirthdayCake size={24} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Module;
