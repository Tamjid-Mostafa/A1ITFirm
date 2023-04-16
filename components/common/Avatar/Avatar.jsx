import { useUserAvatar } from '@lib/hooks/useUserAvatar'
import { FC, useRef, useEffect } from 'react'



const Avatar = ({ }) => {
  let ref = useRef()
  let { userAvatar } = useUserAvatar()

  return (
    <div
      ref={ref}
      style={{ backgroundImage: userAvatar }}
      className="inline-block w-[35px] h-[35px] rounded-full border-2 border-primary hover:border-secondary focus:border-secondary transition-colors ease-linear"
    >
      {/* Add an image - We're generating a gradient as placeholder  <img></img> */}
    </div>
  )
}

export default Avatar
