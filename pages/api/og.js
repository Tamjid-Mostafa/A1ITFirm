/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

const ClashDisplay = fetch(
  new URL('../../style/ClashDisplay-Light.otf', import.meta.url)
).then((res) => res.arrayBuffer())

export default async function handler(req) {
  const [ClashDisplayData] = await Promise.all([ClashDisplay])

  const { searchParams } = req.nextUrl
  const title = searchParams.get('title') || 'A1 IT Firm'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          backgroundImage:
            'linear-gradient(315deg, #045de9 0%, #09c6f9 74%)',
        }}
      >
        <img
          src={new URL('../../public/logo.svg', import.meta.url).toString()}
          alt="A1 IT Firm Logo"
          tw="w-48 h-48 mb-4 opacity-95"
        />
        <h1
          style={{
            fontSize: '100px',
            fontFamily: 'Clash Display',
            background:
            'linear-gradient(to bottom right, #000000 21.66%, #78716c 86.47%)',
            backgroundClip: 'text',
            color: 'transparent',
            lineHeight: '5rem',
            letterSpacing: '-0.02em',
          }}
        >
          {title}
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Clash Display',
          data: ClashDisplayData,
        },
      ],
    }
  )
}
