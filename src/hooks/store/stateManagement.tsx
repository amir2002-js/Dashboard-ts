import { create } from 'zustand'
import type { userType } from '../../types/types'


export type useStoreApi = {
    isShowSidebar: boolean
    toggleIsShow: () => void

    user: userType
    setUser: (data: userType) => void
}

export const useStoreHook = create<useStoreApi>()((set) => ({
    isShowSidebar: false,
    toggleIsShow: () => set((state) => ({ isShowSidebar: !state.isShowSidebar })),

    user: { username: '', email: '', role: '' },
    setUser: (data) =>
        set(() => ({
            user: data,
        })),
}))
