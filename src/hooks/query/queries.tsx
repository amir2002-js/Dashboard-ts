import { useMutation, type UseMutationResult } from '@tanstack/react-query'
import { registerService } from '../../APIs/register'
import type { formData, RegisterResponse } from '../../types/types'
import { toast } from 'sonner'
import { successFunc } from './funcQuery'
import { AxiosError } from 'axios'
import { useStoreHook } from '../store/stateManagement'

type ApiError = {
    error: string
}

export function useRegister(): UseMutationResult<RegisterResponse, Error, formData> {
    const setUser = useStoreHook((state) => state.setUser)

    const mutation = useMutation<RegisterResponse, Error, formData>({
        mutationFn: (userInfo: formData) => registerService(userInfo),
        onSuccess: (data) => {
            successFunc(data)
            setUser(data.user)
        },
        onError: (error: AxiosError<ApiError>) => {
            console.log('error', error.response?.data.error)
            if (error.response?.data.error === 'user already exist') {
                toast.error('کاربری با این اطلاعات وجود دارد ')
            } else {
                toast.error('مشکلی در ثبت نام شما پیش امده لطفا مجدد امتحان کنید')
            }
        },
    })

    return mutation
}

export function useLogin(): UseMutationResult<RegisterResponse, Error, formData> {
    const setUser = useStoreHook((state) => state.setUser)

    const mutation = useMutation<RegisterResponse, Error, formData>({
        mutationFn: (userInfo: formData) => registerService(userInfo),
        onSuccess: (data) => {
            successFunc(data)
            setUser(data.user)
        },
        onError: (error: AxiosError<ApiError>) => {
            console.log('error', error.response?.data.error)
            if (error.response?.data.error === 'user already exist') {
                toast.error('کاربری با این اطلاعات وجود دارد ')
            } else {
                toast.error('مشکلی در ثبت نام شما پیش امده لطفا مجدد امتحان کنید')
            }
        },
    })

    return mutation
}
