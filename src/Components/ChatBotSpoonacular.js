import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiChatBot } from "../utils/apiUrls";
import { getData } from "../utils/getData";

function ChatBotSpoonacular() {
  const [message, setMessage] = useState("");
  const [bot, setBot] = useState({});
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(apiChatBot + e.target.message.value);

    setMessage(e.target.message.value);
  };
  const navigateDetail = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="message" placeholder="chat with bot"></input>
        <button type="submit">Send</button>
      </form>
      <div id="bot">
        <p>
          {bot.answerText ? "Bot: " : ""}
          <span>{bot.answerText}</span>
        </p>
        <div>
          {bot.media?.map((media) => {
            const id = media.link.split("-")[media.link.split("-").length - 1];
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
  );
}

export default ChatBotSpoonacular;
