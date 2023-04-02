import Head from "next/head";

const DOMAIN = "https://a1itfirm.vercel.app";

export default function Meta({
    title = "A1ITFirm | Best Lead Generation Agency",
    description = "A1ITFirm is a fast-growing start-up with a very talented and rapidly expanding team. We build hand picked lead list with 100% verified guaranty.",
    image = `${DOMAIN}/api/og`,
}) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="icon" href="/favicon.ico" />

            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta itemProp="image" content={image} />
            <meta property="og:logo" content={`${DOMAIN}/logo.png`}></meta>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@vercel" />
            <meta name="twitter:creator" content="@Tamjid_Mostafa" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Head>
    );
}