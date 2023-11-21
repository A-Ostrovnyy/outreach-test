export const messageType = [
  "meeting",
  "phone",
  "coffee",
  "beer",
  "message",
  "note",
] as const;

export type MessageType = (typeof messageType)[number];
