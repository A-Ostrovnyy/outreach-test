import { useEffect, useState } from "react";

import { useLocalStorage } from "../../hooks";
import { ItemWrapper } from "../ItemWrapper/ItemWrapper";
import { MessageForm } from "../MessageForm/MessageForm";
import { TMessage } from "../../types/Message";
import "./styles.css";
import { Message } from "../Message/Message";

export default function Feed() {
  const [messages, setMessages] = useState<TMessage[]>([]);
  const [savedMessages, setSavedMessages] =
    useLocalStorage<TMessage[]>("messages");

  useEffect(() => {
    if (messages.length === 0) {
      setMessages(savedMessages ?? []);
    }
  }, []);

  const handleMessageDelete = (id: string) => {
    const filteredMessages = messages.filter((message) => message.date !== id);
    setMessages(filteredMessages);
    setSavedMessages(filteredMessages);
  };

  return (
    <ol className='feed'>
      <ItemWrapper messageType={null}>
        <MessageForm onMessageSave={setMessages} />
      </ItemWrapper>
      {messages.map((message) => (
        <ItemWrapper
          key={new Date(message.date).getTime()}
          messageType={message.type}
          date={message.date}>
          <Message message={message} onMessageDelete={handleMessageDelete} />
        </ItemWrapper>
      ))}
    </ol>
  );
}
