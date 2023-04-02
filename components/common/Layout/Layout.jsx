import React from 'react'
import cn from 'clsx'
import Footer from '../Footer'
import Navbar from '../Navbar'
import s from './Layout.module.css'
import { useRouter } from 'next/router'
import Sidebar from '@components/ui/Sidebar'
import MenuSidebarView from '../Navbar/MenuSidebarView'
import { useUI } from '@components/ui/context'
import Meta from 'Meta/Meta'

const Layout = ({
  meta,
  children,
  pageProps: { categories = [], ...pageProps },
}) => {

  const router = useRouter()
  
  return (
    <div className={cn(s.root)}>
      <Meta {...meta} />
      {router.pathname !== '/404' && (
        <>
        {
          router.pathname !== '/request-demo' && (
            <Navbar />
          )
        }
        </>
      )}
      <main className="fit">{children}</main>
      {router.pathname !== '/404' && (
        <Footer />
      )}
    
    </div>
  )
}

export default Layout