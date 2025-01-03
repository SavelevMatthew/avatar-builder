import type { FC } from 'react'
import { DownloadButton } from './DownloadButton.tsx'
import { AssetsBox } from './AssetsBox.tsx'

export const UI: FC = () => {
    return (
        <main className={'pointer-events-none fixed z-10 inset-0 p-10'}>
            <div className={'mx-auto h-full max-w-screen-xl w-full flex flex-col justify-between'}>
                <div className={'flex justify-between items-center'}>
                    <a className={'pointer-events-auto'} href={'/'}>
                        <img className={'w-20'} src="/images/logo.png" alt="logo" />
                    </a>
                    <DownloadButton />
                </div>
                <div className={'flex flex-col gap-6'}>
                    <AssetsBox />
                </div>
            </div>
        </main>
    )
}
