import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import bunnyIcon from "../assets/ChatPage/bunny-chat.png";
import { Menu } from "../components/Menu.component";
import avatar from "../assets/avatar.svg";
import { scrollToBottomAnimated } from "../helper/scroll.helper";
import { chatPost } from "../services/Chat.service";

// Define una interfaz para el tipo de mensaje
interface Message {
  id: string;
  text: string;
  type: "user" | "assistant";
}

function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const token: string = localStorage.getItem("token") || "";

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

    try {
      // Envía el mensaje al servidor y espera la respuesta
      const response = await chatPost(inputValue, token);
      const assistantMessage: Message = {
        id: Date.now().toString(),
        text: response.reply,
        type: "assistant",
      };

      // Agrega el mensaje de respuesta del asistente al chat
      setMessages((prevMessages) => [...prevMessages, assistantMessage]);

      // Ejecuta el scroll para mostrar el último mensaje del asistente
      setTimeout(() => scrollToBottomAnimated("chat-window"), 100);
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
    }
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
        </div>
        <div className="absolute bottom-4 right-4">
          <img src={bunnyIcon} alt="Bunny Icon" className="w-32 relative right-20" />
        </div>
      </div>
    </>
  );
}

export default Chat;
