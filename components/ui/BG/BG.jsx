import Image from 'next/image'
import React from 'react'
const BG = ({bg}) => {
    // Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr =
'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1, e2, e3) =>
keyStr.charAt(e1 >> 2) +
keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
keyStr.charAt(e3 & 63)

const rgbDataURL = (r, g, b) =>
`data:image/gif;base64,R0lGODlhAQABAPAA${
  triplet(0, r, g) + triplet(b, 255, 255)
}/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

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
                    blurDataURL={rgbDataURL(2, 129, 210)}
                    alt=""
                />
            </div>
    )
}

export default BG