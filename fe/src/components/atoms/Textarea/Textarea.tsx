import { forwardRef, HTMLAttributes, Ref } from 'react';
import { textareaStyle } from './Textarea.css';

interface Props extends HTMLAttributes<HTMLTextAreaElement> {
  value: string;
  placeholder?: string;
  height?: string | number;
}

const _Textarea = (
  { value, placeholder, height = 140, ...htmlTextareaAttributes }: Props,
  ref: Ref<HTMLTextAreaElement>,
) => {
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      className={textareaStyle}
      ref={ref}
      {...htmlTextareaAttributes}
      style={{ height, ...htmlTextareaAttributes.style }}></textarea>
  );
};

export const Textarea = forwardRef(_Textarea);
