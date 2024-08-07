import { forwardRef, HTMLAttributes, Ref } from 'react';
import * as styles from './Button.css';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  fullWidth?: boolean;
}

const _Button = (
  { text, fullWidth = false, ...htmlButtonAttributes }: Props,
  ref: Ref<HTMLButtonElement>,
) => {
  return (
    <button className={styles.button({ fullWidth })} {...htmlButtonAttributes} ref={ref}>
      {text}
    </button>
  );
};

export const Button = forwardRef(_Button);
