import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiChatBot } from "../utils/apiUrls";
import { getData } from "../utils/getData";
import styles from "../Styles/ChatBot/ChatBot.module.scss";

function ChatBotSpoonacular() {
  const [message, setMessage] = useState("");
  const [bot, setBot] = useState({
    answerText: "Type /help to see the list of commands",
  });
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (message === "/help") {
      setBot({
        answerText: `To see a little bit list of recipes with some ingredient, type your [ingredient];
        To see a list of recipes to prepare some food, type your [food]; To see a trivia, type [Tell me food trivia]; 
        To see a food fact, type [Tell me a food fact]; To see a recomendation of wine to a specific food, type Which wine should I drink with [food];
        To find a substitute for some food, type How to substitute [food] or What is a substitute for [food];`,
      });

      console.log(bot);
    } else if (message !== "") {
      getData(`${apiChatBot}${message}`)
        .then((data) => {
          console.log(data);
          setBot(data);
        })
        .catch((err) => console.log(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    setMessage(e.target.message.value);
    e.target.reset();
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
          <p className={styles.chatbot_header__title}>FAQBOT</p>
          <i
            id="close"
            className={`fa-solid fa-xmark ${styles.chatbot_header__close}`}
            onClick={handleClose}
          ></i>
        </div>
        <div id="bot" className={styles.chatbot_body}>
          <div>
            <div>
              {bot.answerText ? "Bot: " : ""}
              {bot.answerText.split(";").map((item, index) => (
                <p key={index}>{item !== "" ? "- " + item : null}</p>
              ))}
            </div>
          </div>
          <div className={styles.chatbot_body__cardscontainer}>
            {bot.media?.map((media) => {
              const id =
                media.link.split("-")[media.link.split("-").length - 1];
              return (
                <div
                  key={id}
                  className={styles.chatbot_body__cardscontainer___card}
                >
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
        <form onSubmit={handleSubmit} className={styles.chatbot_footer}>
          <input
            className={styles.chatbot_footer__input}
            name="message"
            placeholder="chat with bot"
            autoComplete="off"
          ></input>
          <button className={styles.chatbot_footer__button} type="submit">
            <i className="fa-solid fa-share"></i>
          </button>
        </form>
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
