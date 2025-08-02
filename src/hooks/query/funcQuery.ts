import { toast } from 'sonner'
import { setCookie } from '../../cookies/mangae'
import type { RegisterResponse } from '../../types/types'

export function successFunc(data: RegisterResponse) {
    console.log('is success')
    setCookie('accessToken', data.accessToken, 1000 * 60 * 5)
    setCookie('refreshToken', data.refreshToken, 1000 * 60 * 60 * 24 * 7)
    toast.success('ثبت نام شما موفقیت آمیز بود')
}
