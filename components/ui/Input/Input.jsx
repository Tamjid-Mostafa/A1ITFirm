import React from 'react';
import cn from 'clsx';
import s from './Input.module.css';

const Input = ({ className, children, onChange, variant = 'input', ...rest }) => {
  const rootClassName = cn(
    s.root,
    {
      [s.input]: variant === 'input',
      [s.textarea]: variant === 'textarea',
      [s.checkbox]: variant === 'checkbox', // Add checkbox style if needed
    },
    className
  );

  const handleOnChange = (e) => {
    if (onChange) {
      // Handle checkbox value differently
      if (variant === 'checkbox') {
        onChange(e.target.checked);
      } else {
        onChange(e.target.value);
      }
    }
    return null;
  };

  const componentsMap = {
    input: 'input',
    textarea: 'textarea',
    checkbox: 'input', // Map 'checkbox' variant to 'input'
  };

  const Component = componentsMap[variant];

  return (
    <label>
      <Component
        className={rootClassName}
        onChange={handleOnChange}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        {...(variant === 'checkbox' ? { type: 'checkbox' } : {})} // Set 'type' attribute for checkbox
        {...rest}
      />
    </label>
  );
};

export default Input;
