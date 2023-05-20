import React, { useState } from 'react';
import cn from 'clsx';
import { Visibility, VisibilityOff } from '@mui/icons-material'; 
import s from './Input.module.css';

const Input = ({ className, children, onChange, type, variant = 'input', ...rest }) => {
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
  
  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === 'password' ? (showPassword ? 'text' : 'password') : type;

  return (
    <label className="relative"> 
      <Component
        className={rootClassName}
        onChange={handleOnChange}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        type={inputType}
        {...(variant === 'checkbox' ? { type: 'checkbox' } : {})} // Set 'type' attribute for checkbox
        {...rest}
      />
      {type === 'password' && (
        <div
          className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <Visibility className='text-gray-600' /> : <VisibilityOff className='text-gray-600' />}
        </div>
      )}
    </label>
  );
};

export default Input;
