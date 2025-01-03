import { create } from 'zustand'
import PocketBase from 'pocketbase'

export const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL)

type CategoryResponse = {
    id: string
    name: string
}

type CategoryType = CategoryResponse & {
    assets: Array<AssetType>
}

type AssetType = {
    id: string
    group: string
    url?: string
    thumbnail: string
    name: string
}

type ConfiguratorStoreType = {
    categories: Array<CategoryType>
    currentCategory: CategoryType | null
    assets: Array<AssetType>
    fetchCategories: () => Promise<void>
    setCurrentCategory: (currentCategory: CategoryType) => void
}

export const useConfiguratorStore = create<ConfiguratorStoreType>((set) => ({
    categories: [],
    currentCategory: null,
    assets: [],
    async fetchCategories() {
        const categories: Array<CategoryType> = await pb.collection('CustomizationGroups').getFullList({
            sort: '+position',
        })

        const assets: Array<AssetType> = await pb.collection('CustomizationAssets').getFullList({
            sort: '-created ',
        })

        for (const category of categories) {
            category.assets = assets.filter((item) => item.group === category.id)
        }

        set({ categories, assets, currentCategory: categories[0] })
    },
    setCurrentCategory(currentCategory: CategoryType) {
        set({ currentCategory })
    },
}))
