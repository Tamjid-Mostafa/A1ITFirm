
import SidebarLayout from '@components/common/SidebarLayout'
import Button from '@components/ui/Button'
import { useUI } from '@components/ui/context'
import useWindowSize from '@lib/hooks/use-window-size'
import { AuthContext } from 'context/AuthProvider'
import Link from 'next/link'
import { useContext } from 'react'
import s from './MenuSidebarView.module.css'


export default function MenuSidebarView({
  links = [],
}) {
  const { isDesktop} = useWindowSize()

  const { closeSidebar } = useUI()

  if(isDesktop) {
    closeSidebar()
  }
  
  return (
    <SidebarLayout handleClose={() => closeSidebar()}>
      <div className={s.root}>
        <nav>
          <ul>

            {links.map((l) => (
              <li
                key={l.href}
                className={s.item}
                onClick={() => closeSidebar()}
              >
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
            <li className='flex flex-col gap-5 mt-5'>
              <Button
                className="" variant={'slim'}>
                Request Demo
              </Button>
              {/* {
                  user && user?.uid ?
                    <Button
                      onClick={() => logOut()}
                      variant={"slim"}
                    >
                      Log Out
                    </Button>
                    :
                    <Button
                      onClick={() => openModal()}
                      variant={"slim"}
                    >
                      Log In
                    </Button>
                } */}
            </li>
          </ul>
        </nav>
      </div>
    </SidebarLayout>
  )
}

MenuSidebarView
