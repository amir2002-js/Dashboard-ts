import { create } from 'zustand'
type form = {
    firstName: string
    lastName: string
    goldWeight: string
    totalAmount: string
    phoneNumber: string
    description: string
}

export type useStoreApi = {
    isShowSidebar: boolean
    toggleIsShow: () => void
    formData: form
    setFormData: (t: form) => void
}

export const useStoreHook = create<useStoreApi>()((set) => ({
    isShowSidebar: false,
    toggleIsShow: () => set((state) => ({ isShowSidebar: !state.isShowSidebar })),

    formData: {
        firstName: '',
        lastName: '',
        goldWeight: '',
        totalAmount: '',
        phoneNumber: '',
        description: '',
    },
    setFormData: (newVal) => set(() => ({ formData: newVal })),
}))
