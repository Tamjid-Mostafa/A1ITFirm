
import React from 'react'
import cn from 'clsx'
import s from './Input.module.css'


const Input = (
  { className,
    children,
    onChange,
    variant = 'input',
    ...rest
  }
) => {



  const rootClassName = cn(s.root, {
    [s.input]: variant === 'input',
    [s.textarea]: variant === 'textarea',
  }, className)

  const handleOnChange = (e) => {
    if (onChange) {
      onChange(e.target.value)
    }
    return null
  }
  const componentsMap = {
    input: 'input',
    textarea: 'textarea'
  }
  const Component = componentsMap[variant]
  return (
    <label>
      <Component
        className={rootClassName}
        onChange={handleOnChange}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        {...rest}
      />
    </label>
  )
}

export default Input
