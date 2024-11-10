import { FaPaperPlane } from "react-icons/fa";
import bunnyIcon from "../assets/ChatPage/bunny-chat.png";
import { Menu } from "../components/Menu.component";
import avatar from "../assets/avatar.svg";

function Chat() {
  return (
    <>
      <Menu title="Ana Maria" avatarUrl={avatar} />
      <div className="bg-[#F29FB3] h-[90vh] flex flex-col items-center p-8 relative">
        <header className="text-center mb-6 text-white">
          <h2 className="text-2xl font-normal">Assistant</h2>
        </header>

        <section className="bg-white w-full max-w-4xl rounded-lg p-10 flex flex-col gap-6">
          <div className="flex flex-col items-start">
            <span className="text-sm text-gray-600 font-bold mb-1">Germanione</span>
            <div className="bg-[#cde7ff] text-gray-700 p-4 rounded-lg max-w-[75%] text-left">
              Ask me anything you want...
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-sm text-gray-600 font-bold mb-1">Gabriela</span>
            <div className="bg-[#f2c7d7] text-gray-700 p-4 rounded-lg max-w-[75%] text-left">
              Ask me anything you want...
            </div>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-sm text-gray-600 font-bold mb-1">Germanione</span>
            <div className="bg-[#cde7ff] text-gray-700 p-4 rounded-lg max-w-[75%] text-left">
              Ask me anything you want...
            </div>
          </div>
        </section>

        <footer className="w-full max-w-lg mt-6 bg-white rounded-full p-2 flex shadow-lg">
          <input
            type="text"
            className="flex-grow border-none text-base px-4 focus:outline-none"
            placeholder="Ask me anything you want..."
          />
          <button className="text-2xl text-[#f2c7d7] hover:text-[#ec94ad] p-2">
            <FaPaperPlane />
          </button>
          <div className="absolute bottom-4 right-4">
            <img src={bunnyIcon} alt="Bunny Icon" className="w-32" />
          </div>
        </footer>
      </div>
    </>
  );
}

export default Chat;