import { useMutation, type UseMutationResult } from '@tanstack/react-query'
import { registerService } from '../../APIs/register'
import { setCookie } from '../../cookies/mangae'
import type { formData } from '../../types/types'
import { toast } from 'sonner'

type RegisterResponse = {
    result: string
    accessToken: string
    refreshToken: string
    user: {
        email: string
        username: string
    }
}

export function useRegister(): UseMutationResult<RegisterResponse, Error, formData> {
    const mutation = useMutation<RegisterResponse, Error, formData>({
        mutationFn: (userInfo: formData) => registerService(userInfo),
        onSuccess: (data) => {
            console.log('is success')
            setCookie('accessToken', data.accessToken, 1000 * 60 * 5)
            setCookie('refreshToken', data.refreshToken, 1000 * 60 * 60 * 24 * 7)
            toast.success('ثبت نام شما موفقیت آمیز بود')
        },
        onError: (error) => {
            console.log('error', error.response.data.error)
            if (error.response.data.error === 'user already exist') {
                toast.error('کاربری با این اطلاعات وجود دارد ')
            } else {
                toast.error('مشکلی در ثبت نام شما پیش امده لطفا مجدد امتحان کنید')
            }
        },
    })

    return mutation
}
