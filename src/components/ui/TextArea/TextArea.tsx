import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import clsx from "clsx";

import "./styles.css";

export interface TextAreaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  error?: string;
}

export function TextArea({ className, error, ...props }: TextAreaProps) {
  return (
    <div className='text-area'>
      <textarea
        className={clsx("text-area__input", className, {
          ["error"]: error,
        })}
        placeholder='Add a note about Milton Romaguera...'
        {...props}></textarea>
      {error && (
        <div role='alert' className='text-area__error-message'>
          {error}
        </div>
      )}
    </div>
  );
}

// TextArea.displayName = 'TextArea';
