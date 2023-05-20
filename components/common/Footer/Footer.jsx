import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import cn from 'clsx'
import s from './Footer.module.css'
import Balancer from 'react-wrap-balancer'
import Container from '@components/ui/Container';

const Footer = () => {

  const company = [
    {
      title: 'About Us',
      href: '/about-us',
    },
    // {
    //   title: 'Press & Media',
    //   href: '/press&media',
    // },
    // {
    //   title: 'Privacy Policy',
    //   href: '/privacy-policy',
    // },
    // {
    //   title: 'Cookie Policy',
    //   href: '/cookie-policy',
    // },
    // {
    //   title: 'Terms of Services',
    //   href: '/terms-of-services',
    // },
    // {
    //   title: 'Data Protection',
    //   href: '/data-protection',
    // },
  ]
  const support = [
    // {
    //   title: 'Help Center',
    //   href: '/help-center',
    // },
    {
      title: 'FAQs',
      href: '/faqs',
    },
  ]

  const social = [
    {
      title: 'Facebook',
      icon: '/facebook.svg',
      href: 'https://www.facebook.com/a1itfirm/',
    },
    {
      title: 'Instagram',
      icon: '/instagram.svg',
      href: 'https://www.instagram.com/',
    },
    {
      title: 'Twitter',
      icon: '/twitter.svg',
      href: 'https://www.twitter.com/',
    },
    {
      title: 'LinkedIn',
      icon: '/linkedin.svg',
      href: 'https://www.linkedin.com/',
    },
  ]
  const contact = [
    {
      title: '+880 1997-407041',
      icon: '/telephone.svg',
      href: 'tel:+880 1997-407041',
    },
    {
      title: 'contact@a1itfirm.com',
      icon: '/envelop.svg',
      href: 'mailto:contact@a1itfirm.com',
    },
  ]

  return (
    <AnimatePresence>
      <div className={cn(s.root)}>
        <Container className={cn(s.main)}>
          <div className={cn(s.logopart)}>
            {/* Logo Here */}
          <div
            onClick={() => router.push('/')}
            className="cursor-pointer"
          >
            <Image width={200} height={32} className="my-5" src="/logo.png" alt="" />
            <span className="text-6xl whitespace-nowrap  text-accent-0">
              A1ITFirm
            </span>
          </div>
          </div>
          <div className={cn(s.content)}>
            <ul className="">
              <li className="mb-2 text-xl font-bold">Company</li>
              {
                company.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href}>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))
              }
            </ul>
            <ul className="">
              <li className="mb-2 text-xl font-bold">Support</li>
              {
                support.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href}>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))
              }
            </ul>
            <ul className="">
              <li className="mb-2 text-xl font-bold">
                CONTACT
              </li>
              {
                contact.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="flex gap-2 items-center "
                    >
                      <span className=''>
                        <Image
                          width={20}
                          height={21}
                          src={item.icon}
                          alt='Envelop'
                          className=''
                        />
                      </span>
                      <span>
                        {item.title}
                      </span>
                    </Link>
                  </li>
                ))
              }


              <li className='flex space-x-2'>

                {
                  social.map((item, index) => (
                    <div key={index}>
                      <Link href={item.href}>
                        <Image
                          width={40}
                          height={40}
                          src={item.icon}
                          alt={item.title}
                        />
                      </Link>
                    </div>
                  ))
                }

              </li>
            </ul>
          </div>
        </Container>
          <div className={cn(s.copyright)}>© 2022 -2023 A1 IT Firm. All Rights Reserved.</div>
      </div>
    </AnimatePresence>
  )
}

export default Footer