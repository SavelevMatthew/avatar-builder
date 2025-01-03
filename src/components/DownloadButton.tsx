import type { FC } from 'react'

export const DownloadButton: FC = () => {
    return (
        <button
            className={
                'rounded-lg bg-indigo-500 hover:bg-indigo-600 transition-colors duration-300 text-white font-medium px-4 py-3 pointer-events-auto'
            }
        >
            Download
        </button>
    )
}
