import cn from 'clsx'
import React from 'react'


const Container = ({
  children,
  className,
  el = 'div',
  clean = false, // Full Width Screen
}) => {
  const rootClassName = cn(className, {
    'mx-auto max-w-[1520px] px-6 w-full': !clean,
  })

  let Component = el

  return <Component className={rootClassName}>{children}</Component>
}

export default Container
