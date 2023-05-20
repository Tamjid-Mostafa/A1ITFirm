import Image from "next/image";
import cn from 'clsx'
import s from './Logo.module.css'

export default function Logo({variant=''}) {
    return (
        <div className={s.logoContainer}>
            <Image
                width={100}
                height={100}
                className={cn({
                    [s.imgSmall]: variant === 'small',
                    [s.img]: variant === ''
                })}
                src={"/logo.svg"}
                alt="logo"
                priority
            />
            <h1 className={cn({
                [s.logoTextSmall]: variant === 'small',
                [s.logoText]: variant === ''
            })}>Edlighten.ai</h1>
        </div>

    )
}
