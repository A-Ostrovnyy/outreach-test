import Trash from "../../assets/icons/trash.svg";
import { TMessage } from "../../types/Message";
import "./styles.css";

interface MessageProps {
  message: TMessage;
  onMessageDelete: (id: string) => void;
}

export function Message(props: MessageProps) {
  const { message, onMessageDelete } = props;

  const messageTypeText =
    message.type === "note" ? "added a note to" : `had a ${message.type} with`;

  return (
    <article className='message'>
      <div className='message__content'>
        <h2 className='message__title'>
          <span className='message__title-highlight'>You</span>{" "}
          {messageTypeText}{" "}
          <span className='message__title-highlight'>{message.person}</span>
        </h2>
        <p className='message__text'>{message.text}</p>
      </div>
      <button
        className='message_delete-btn'
        onClick={() => onMessageDelete(message.date)}
        aria-label='Delete activity'>
        <img
          src={Trash}
          alt='delete message'
          className='message__delete-icon'
          aria-hidden='true'
        />
      </button>
    </article>
  );
}
