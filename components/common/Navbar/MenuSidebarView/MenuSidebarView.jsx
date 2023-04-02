
import SidebarLayout from '@components/common/SidebarLayout'
import Button from '@components/ui/Button'
import { useUI } from '@components/ui/context'
import Link from 'next/link'
import s from './MenuSidebarView.module.css'


export default function MenuSidebarView({
  links = [],
}) {
  const { closeSidebar } = useUI()

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
            <li className='md:hidden block'>
              <Button
                className="rounded-full bg-secondary-2" variant={'slim'}>
                Get Started
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </SidebarLayout>
  )
}

MenuSidebarView
