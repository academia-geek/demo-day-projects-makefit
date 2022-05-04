import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiChatBot } from "../utils/apiUrls";
import { getData } from "../utils/getData";
import styles from "../Styles/ChatBot/ChatBot.module.scss";

function ChatBotSpoonacular() {
  const [message, setMessage] = useState("");
  const [bot, setBot] = useState({});
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (message !== "") {
      getData(`${apiChatBot}${message}`)
        .then((data) => {
          console.log(data);
          setBot(data);
        })
        .catch((err) => console.log(err));
    }
  }, [message]);

  useEffect(() => {
    const chat = document.getElementById("chatbot");
    const openChat = document.getElementById("open-chat");
    if (modal === true) {
      chat.style.display = "flex";
      openChat.style.display = "none";
    } else {
      openChat.style.display = "flex";
      chat.style.display = "none";
    }
  }, [modal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(apiChatBot + e.target.message.value);

    setMessage(e.target.message.value);
  };
  const navigateDetail = (id) => {
    navigate(`/details/${id}`);
  };

  const handleClose = (e) => {
    setModal(false);
  };
  const handleOpen = (e) => {
    setModal(true);
  };

  return (
    <div>
      <div className={styles.chatbot_container} id="chatbot">
        <div className={styles.chatbot_header}>
          <p className={styles.chatbot_header__title}>Tittle</p>
          <i
            id="close"
            className={`fa-solid fa-xmark ${styles.chatbot_header__close}`}
            onClick={handleClose}
          ></i>
        </div>
        <form onSubmit={handleSubmit} className={styles.chatbot_footer}>
          <input
            className={styles.chatbot_footer__input}
            name="message"
            placeholder="chat with bot"
          ></input>
          <button type="submit">Send</button>
        </form>
        <div id="bot">
          <p>
            {bot.answerText ? "Bot: " : ""}
            <span>{bot.answerText}</span>
          </p>
          <div>
            {bot.media?.map((media) => {
              const id =
                media.link.split("-")[media.link.split("-").length - 1];
              return (
                <div key={id}>
                  <h4 onClick={() => navigateDetail(id)}>{media.title}</h4>
                  <img
                    src={media.image}
                    onClick={() => navigateDetail(id)}
                    alt="result"
                    key={media.image}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        id="open-chat"
        className={styles.openchat_container}
        onClick={handleOpen}
      >
        <i className="fa-solid fa-message"></i>
      </div>
    </div>
  );
}

export default ChatBotSpoonacular;
