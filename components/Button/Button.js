import React from 'react';
import { asClassName } from '../../helpers/Helper';
import Link from 'next/link';
import styles from './Button.module.css';

const Button = ({ isSubmit, type, outline, action, disabled, content, block, small,}) => {
  const className = asClassName(
    styles.Button,
    block && styles.Button_block,
    outline && styles.Button_outline,
    small && styles.Button_small,
    disabled && styles.Button_disabled,
    styles[`Button_${type}`]
  );

  const props = { className, disabled }

  return typeof action !== 'string'
    ? <button type={`${isSubmit ? 'submit' : ''}`} {...props} onClick={action}>{content}</button>
    : action.startsWith('/')
      ? <Link {...props}></Link>
      : <a {...props} href={action}>
           <div>
          <i className="fab fa-google-play mr-2"></i>
          {content}
        </div>
      </a>
}

export default Button;
