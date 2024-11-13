import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { scrollToBottomAnimated } from "../helper/scroll.helper";
import { chatPost } from "../services/Chat.service";
import { Assistant } from "../components/Assistant.component";
import SafeAreaHeader from "../components/SafeArea/safeareaheader.component";

interface Message {
  id: string;
  text: string;
  type: "user" | "assistant";
}

function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const token: string = localStorage.getItem("token") || "";

  const handleSendMessage = async() => {
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
      const response = await chatPost(inputValue, token);
      const assistantMessage: Message = {
        id: Date.now().toString(),
        text: response.reply,
        type: "assistant",
      };

      setMessages((prevMessages) => [...prevMessages, assistantMessage]);

      setTimeout(() => scrollToBottomAnimated("chat-window"), 100);
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
    }
  };

  return (
    <>
      <SafeAreaHeader />
      <div className="bg-gradient-to-b from-[#f29fb4] to-[#ebc0c0] h-[90vh] flex flex-col items-center p-8">
        <header className="text-center mb-6 text-white">
          <h2 className="text-4xl font-normal">Assistant</h2>
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
            className="text-2xl text-[#8074c4] hover:text-[#ec94ad] p-2"
            onClick={handleSendMessage}
          >
            <FaPaperPlane />
          </button>
        </div>
        <div className="absolute bottom-4 right-4">
          <Assistant text="I love talking to you "/>
        </div>
      </div>
    </>
  );
}

export default Chat;
