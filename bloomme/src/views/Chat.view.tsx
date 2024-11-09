import "../styles/ChatPage/Chat.style.css";
import { FaPaperPlane } from "react-icons/fa";
import bunnyIcon from "../assets/ChatPage/bunny-chat.png";
import { Menu } from "../components/Menu.component";
import avatar from "../assets/avatar.svg";

function Chat() {
  return (
    <>
      <Menu title="Ana Maria" avatarUrl={avatar} />
      <div className="chat-container">
        <header className="chat-header">
          <h2>Assistant</h2>
        </header>

        <section className="chat-messages">
          <div className="message message-left">
            <span className="message-sender">Germanione</span>
            <div className="message-bubble">Ask me anything you want...</div>
          </div>
          <div className="message message-right">
            <span className="message-sender">Gabriela</span>
            <div className="message-bubble">Ask me anything you want...</div>
          </div>
          <div className="message message-left">
            <span className="message-sender">Germanione</span>
            <div className="message-bubble">Ask me anything you want...</div>
          </div>
        </section>

        <footer className="chat-input-container">
          <input
            type="text"
            className="chat-input"
            placeholder="Ask me anything you want..."
          />
          <button className="send-button">
            <FaPaperPlane />
          </button>
          <div className="bunny-chat-container">
            <img src={bunnyIcon} alt="Bunny Icon" className="bunny-icon" />
          </div>
        </footer>
      </div>
    </>
  );
}

export default Chat;
