import Head from "@components/common/Head"
import Layout from "@components/common/Layout"
import Text from "@components/ui/Text"
import Link from "next/link"


export default function NotFound() {
  return (
    <>
    <Head title={"NotFound"}/>
    <div className="max-w-2xl mx-8 sm:mx-auto py-20 flex flex-col items-center justify-center min-h-screen">
      <Text variant="heading">Not Found</Text>
      <Text className="">
        The requested page doesn&apos;t exist or you don&apos;t have access to it.
      </Text>
      <Link href='/'>
      <Text variant="body" className="text-cyan hover:text-blue">
        Fall Back to Home
      </Text>
      </Link>
    </div>
    </>
  )
}

NotFound.Layout = Layout
