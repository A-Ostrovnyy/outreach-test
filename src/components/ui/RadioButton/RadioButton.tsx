import { DetailedHTMLProps, InputHTMLAttributes } from "react";

import { MessageType } from "../../../types";
import { iconMap } from "../../../constants";
import "./styles.css";

interface RadioButtonProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  messageType: MessageType;
}

export function RadioButton(props: RadioButtonProps) {
  const { messageType, ...rest } = props;

  return (
    <div className='radio-button'>
      <input
        className='radio-button__input'
        type='radio'
        {...rest}
        id={messageType}
      />
      <label className='radio-button__label' htmlFor={messageType}>
        {/* TODO: implement icon color change on selected state */}
        <img
          src={iconMap[messageType]}
          alt={messageType}
          width={30}
          height={30}
          className='radio-button__icon'
        />
      </label>
    </div>
  );
}
