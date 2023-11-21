import { MessageType } from "./MessageType";

export type TMessage = {
  text: string;
  person: string;
  type: MessageType;
  date: string;
};
