import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import bunnyIcon from "../assets/ChatPage/bunny-chat.png";
import { Menu } from "../components/Menu.component";
import avatar from "../assets/avatar.svg";
import { scrollToBottomAnimated } from "../helper/scroll.helper";

// Define una interfaz para el tipo de mensaje
interface Message {
  id: string;
  text: string;
  type: "user" | "assistant";
}

const responses: Message[] = [
  { id: "1", text: "Hola, ¿cómo estás?", type: "assistant" },
  {
    id: "2",
    text: "Encantado de conocerte! ¿Necesitas algo?",
    type: "assistant",
  },
];

function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");

  // Función asincrónica para enviar el mensaje
  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      type: "user",
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setTimeout(() => scrollToBottomAnimated("chat-window"), 100);
    setInputValue("");

    // Esperar 1 segundo y luego agregar la respuesta del asistente
    const response = responses[Math.floor(Math.random() * responses.length)];
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setMessages((prevMessages) => [...prevMessages, response]);

    // Ejecutar scroll al final después de agregar el mensaje de respuesta
    setTimeout(() => scrollToBottomAnimated("chat-window"), 100);
  };

  return (
    <>
      <Menu title="Ana Maria" avatarUrl={avatar} />
      <div className="bg-[#F29FB3] h-[90vh] flex flex-col items-center p-8">
        <header className="text-center mb-6 text-white">
          <h2 className="text-2xl font-normal">Assistant</h2>
        </header>

        <section
          id="chat-window"
          className="bg-white w-full max-w-4xl rounded-lg p-10 flex flex-col gap-6 h-[400px] max-h-[500px] overflow-auto"
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                msg.type === "user" ? "items-end" : "items-start"
              }`}
            >
              <span className="text-sm text-gray-600 font-bold mb-1">
                {msg.type === "user" ? "Tú" : "Assistant"}
              </span>
              <div
                className={`p-4 rounded-lg max-w-[75%] text-left ${
                  msg.type === "user" ? "bg-[#f2c7d7]" : "bg-[#cde7ff]"
                } text-gray-700`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </section>

        <div className="w-full max-w-4xl mt-6 bg-white rounded-full p-2 flex shadow-lg">
          <input
            type="text"
            className="flex-grow border-none text-base px-4 focus:outline-none"
            placeholder="Ask me anything you want..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyUp={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <button
            className="text-2xl text-[#f2c7d7] hover:text-[#ec94ad] p-2"
            onClick={handleSendMessage}
          >
            <FaPaperPlane />
          </button>
          <div className="absolute bottom-4 right-4">
            <img src={bunnyIcon} alt="Bunny Icon" className="w-32" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
