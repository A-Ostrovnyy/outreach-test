import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import clsx from "clsx";

import "./styls.css";

import { MessageType, messageType } from "../../types";
import { Button, RadioButton, TextArea } from "../ui";
import { useLocalStorage } from "../../hooks";
import { TMessage } from "../../types/Message";
import { getCurrentDateInIso } from "../../utils/dates";

type MessageForm = Omit<TMessage, "date">;

const initialFormState: MessageForm = {
  text: "",
  type: "message",
  person: "Milton Romaguera",
};

interface MessageFormProps {
  onMessageSave: Dispatch<SetStateAction<TMessage[]>>;
}

export function MessageForm(props: MessageFormProps) {
  const { onMessageSave } = props;
  const [formState, setFormState] = useState<MessageForm>(initialFormState);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const [messages, setMessages] = useLocalStorage<TMessage[]>("messages", []);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormState((prev) => {
      const updatedFormState = { ...prev, text: e.target.value };
      return updatedFormState;
    });
  };

  const handleTypeChange = (type: MessageType) => {
    setFormState((prev) => {
      const updatedFormState = { ...prev, type };
      return updatedFormState;
    });
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formState.text === "") {
      setError("Please fill message");
      return;
    }

    let newMessages: TMessage[];

    if (messages) {
      newMessages = [
        {
          text: formState.text.trim(),
          type: formState.type,
          date: getCurrentDateInIso(),
          person: "Milton Romaguera",
        },
        ...messages,
      ];
    } else {
      newMessages = [
        {
          text: formState.text.trim(),
          type: formState.type,
          date: getCurrentDateInIso(),
          person: "Milton Romaguera",
        },
      ];
    }

    setMessages(newMessages);
    onMessageSave(newMessages);
    setFormState(initialFormState);
  };

  return (
    <form onSubmit={handleFormSubmit} className='message-form'>
      <TextArea
        value={formState.text}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        className={clsx({
          "message-form__input": isFocused,
          "message-form__input-error": error,
        })}
        aria-label='message text'
        error={error}></TextArea>
      {isFocused && (
        <div className='message-form__controls'>
          <div className='message-form__type'>
            {messageType.map((type) => (
              <RadioButton
                checked={formState.type === type}
                name='type'
                messageType={type}
                key={type}
                onChange={() => handleTypeChange(type)}
                aria-label={type}
              />
            ))}
          </div>
          <Button className='message-form__submit-btn' type='submit'>
            Submit
          </Button>
        </div>
      )}
    </form>
  );
}
