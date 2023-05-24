import React from 'react'
import cn from 'clsx'
import Footer from '../Footer'
import Navbar from '../Navbar'
import s from './Layout.module.css'
import { useRouter } from 'next/router'
import Meta from 'Meta/Meta'
import LoadingDots from '@components/ui/LoadingDots'
import dynamic from 'next/dynamic'
import { useUI } from '@components/ui/context'
const Layout = ({
  meta,
  children,
  pageProps: { categories = [], ...pageProps },
}) => {

  const router = useRouter()

  const Loading = () => (
    <div className="w-80 h-80 flex items-center text-center justify-center p-3">
      <LoadingDots />
    </div>
  )

  // Modal Authentication
  const dynamicProps = {
    loading: Loading,
  }
  // const SignUpView = dynamic(() => import('@components/auth/SignUpView'), {
  //   ...dynamicProps,
  // })
  // const LoginView = dynamic(() => import('@components/auth/LoginView'), {
  //   ...dynamicProps,
  // })
  // const ForgotPassword = dynamic(
  //   () => import('@components/auth/ForgotPassword'),
  //   {
  //     ...dynamicProps,
  //   }
  // )
  const Proposal = dynamic(
    () => import('@components/Proposal'),
    {
      ...dynamicProps,
    }
  )
  const Modal = dynamic(() => import('@components/ui/Modal'), {
    ...dynamicProps,
    ssr: true,
  })
  const ModalView = ({
    modalView,
    closeModal,
  }) => {
    return (
      <Modal onClose={closeModal}>
        {/* {modalView === 'LOGIN_VIEW' && <LoginView />}
        {modalView === 'SIGNUP_VIEW' && <SignUpView />}
        {modalView === 'FORGOT_VIEW' && <ForgotPassword />} */}
        {modalView === 'PROPOSAL_VIEW' && <Proposal/> }
      </Modal>
    )
  }
  const ModalUI = () => {
    const { displayModal, closeModal, modalView } = useUI()
    return displayModal ? (
      <ModalView modalView={modalView} closeModal={closeModal} />
    ) : null
  }

  const noAuth = ['/']

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
      {/* {
        noAuth.includes(router.pathname)
          ?
          <main className="fit">{children}</main>
          :
          <PrivateRoute >

            <main className="fit">{children}</main>
          </PrivateRoute>
      } */}
<main className="fit">{children}</main>
      {router.pathname !== '/404' && (
        <Footer />
      )}
      <ModalUI />
    </div>
  )
}

export default Layout