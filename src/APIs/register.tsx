import type { formData } from '../types/types'
import { instance } from './services'

export const registerService = async (userInfo: formData) => {
    const response = await instance.post('register/', userInfo)

    return response.data
}
