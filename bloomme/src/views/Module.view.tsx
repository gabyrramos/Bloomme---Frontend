import { Menu } from "../components/Menu.component";
import avatar from "../assets/avatar.svg";
import { FaBirthdayCake } from "react-icons/fa";

function Module() {
  return (
    <div className="bg-[#F29FB3] min-h-screen flex flex-col items-center">
      <Menu title="Ana Maria" avatarUrl={avatar} />
      <main className="w-full max-w-6xl px-10 grid grid-cols-12 gap-4 py-10">
        <div className="col-span-2">
          <button className="bg-[#ADC9F0] py-3 px-6 rounded-xl flex gap-4 items-center text-white">
            <FaBirthdayCake size={24} />
            Back
          </button>
        </div>
        <div className="col-span-10 grid grid-cols-12 gap-2">
          <h1 className=" col-span-12 font-semibold text-3xl text-white text-center py-5">
            Healty vs Unhealthy Relationships
          </h1>
          <div className=" col-span-6 p-5 grid items-center">
            <img
              src="https://via.placeholder.com/400x500"
              alt=""
              className="object-contain w-full rounded-lg"
            />
          </div>
          <div className="col-span-6 flex flex-col justify-around p-6 items-center text-white">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              laborum mollitia odio soluta nihil ullam excepturi? Tempora
              pariatur, facilis, natus rem earum odit quaerat iste ratione vitae
              dignissimos voluptatem. Nostrum facere non eos, fugit ducimus
              soluta nihil velit aspernatur placeat.
            </p>
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
