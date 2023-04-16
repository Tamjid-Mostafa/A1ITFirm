import s from './Modal.module.css'
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock'
import { useRef, useEffect, useCallback } from 'react'
import { Cross } from '@components/icons'
import FocusTrap from '@lib/focus-trap'




const Modal = ({ children, onClose }) => {
  const ref = useRef()

  const handleKey = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        return onClose()
      }
    },
    [onClose]
  )

  useEffect(() => {
    const modal = ref.current

    if (modal) {
      disableBodyScroll(modal, { reserveScrollBarGap: true })
      window.addEventListener('keydown', handleKey)
    }
    return () => {
      clearAllBodyScrollLocks()
      window.removeEventListener('keydown', handleKey)
    }
  }, [handleKey])

  return (
    <div className={s.root}>
      <div className={s.modal} role="dialog" ref={ref}>
        <button
          onClick={() => onClose()}
          aria-label="Close panel"
          className={s.close}
        >
          <Cross className="h-6 w-6" />
        </button>
        <FocusTrap focusFirst>{children}</FocusTrap>
      </div>
    </div>
  )
}

export default Modal
