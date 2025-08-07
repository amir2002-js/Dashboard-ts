import { create } from 'zustand'
import type { userType } from '../../typesAndConsts/types'

export type useStoreApi = {
    isShowSidebar: boolean
    toggleIsShow: () => void
    openSidebar: () => void
    closeSidebar: () => void

    user: userType
    setUser: (data: userType) => void
}

export const useStoreHook = create<useStoreApi>()((set) => ({
    isShowSidebar: false,
    toggleIsShow: () => set((state) => ({ isShowSidebar: !state.isShowSidebar })),
    openSidebar: () => set(() => ({ isShowSidebar: true })),
    closeSidebar: () => set(() => ({ isShowSidebar: false })),

    user: { username: '', email: '', role: '' },
    setUser: (data) =>
        set(() => ({
            user: data,
        })),
}))
