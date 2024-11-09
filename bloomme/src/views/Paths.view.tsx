import { Menu } from "../components/Menu.component";
import avatar from "../assets/avatar.svg";
import PathCard from "../components/PathPage/PathCard.component";

function Paths() {
  return (
    <div className="flex flex-col items-center bg-[#F29FB3] min-h-screen">
      <Menu title="Ana Maria" avatarUrl={avatar} />

      <h1 className="mb-10 font-semibold text-3xl text-white">Routes</h1>

      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 px-6 w-full max-w-6xl">
        <PathCard
          title="Taking Care of My Body"
          imageUrl="/path/to/image1.png"
        />
        <PathCard
          title="Knowing My Boundaries"
          imageUrl="src/assets/WhatsAppicon.png"
        />
        <PathCard
          title="Empowerment and Self-Knowledge"
          imageUrl="/path/to/image3.png"
        />
        <PathCard
          title="Taking Care of My Sexual and Reproductive Health"
          imageUrl="/path/to/image4.png"
        />
      </div>

      <p className="mt-12 text-lg text-pink-600">More coming soon</p>

      <div className="right-0 bottom-0 absolute p-4">
        <img
          src="/path/to/bunny-icon.png"
          alt="Bunny Icon"
          className="w-16 h-16"
        />
      </div>
    </div>
  );
}

export default Paths;
