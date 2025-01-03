import { FC, useEffect } from 'react'
import { useConfiguratorStore, pb } from '../store.ts'

export const AssetsBox: FC = () => {
    const { categories, currentCategory, setCurrentCategory, fetchCategories } = useConfiguratorStore()

    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <div className={'rounded-2xl bg-white drop-shadow-md p-6 gap-6 flex flex-col'}>
            <div className={'flex items-center gap-6 pointer-events-auto'}>
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setCurrentCategory(category)}
                        className={`transition-colors duration-200 font-medium ${
                            currentCategory?.id === category.id
                                ? 'text-indigo-500'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
            <div className={'flex gap-2 flex-wrap'}>
                {currentCategory?.assets.map((asset) => (
                    <button
                        key={asset.id}
                        className={
                            'w-20 h-20 rounded-md overflow-hidden bg-gray-200 pointer-events-auto ' +
                            'hover:opacity-10 transition-all border-2 duration-500'
                        }
                    >
                        <img src={pb.files.getURL(asset, asset.thumbnail)} alt={`${asset.name} asset`} />
                    </button>
                ))}
            </div>
        </div>
    )
}
