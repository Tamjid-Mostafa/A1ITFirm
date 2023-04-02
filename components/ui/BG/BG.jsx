import Image from 'next/image'
import React from 'react'
const BG = ({bg}) => {
    return (
        <div
                style={{
                    position: "fixed",
                    height: "100vh",
                    width: "100vw",
                    overflow: 'hidden',
                    zIndex: -1,
                }}
            >
                <Image
                    src={bg}
                    placeholder="blur"
                    quality={100}
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                    }}
                    blurDataURL={bg}
                    alt=""
                />
            </div>
    )
}

export default BG