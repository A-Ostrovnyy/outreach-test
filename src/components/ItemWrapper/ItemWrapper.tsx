import { ReactNode } from "react";

import Menu from "../../assets/icons/menu.svg";
import { MessageType } from "../../types";
import { getTimeFromNow } from "../../utils/dates";
import { iconMap } from "../../constants";
import "./styles.css";

interface ItemWrapperProps {
  messageType: MessageType | null;
  children: ReactNode;
  date?: string;
}

export function ItemWrapper(props: ItemWrapperProps) {
  const { messageType, children, date = "" } = props;
  return (
    <li className='item-wrapper'>
      <div className='item-wrapper__date'>
        {date ? getTimeFromNow(date) : null}
      </div>
      <div className='item-wrapper__icon-col'>
        <div className='item-wrapper__icon-wrapper'>
          <img
            src={messageType ? iconMap[messageType] : Menu}
            alt={messageType ?? "form"}
            className='item-wrapper__icon'
          />
        </div>
      </div>
      <div className='item-wrapper__content'>{children}</div>
    </li>
  );
}
