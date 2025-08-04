import {
    useMutation,
    useQuery,
    type UseMutationResult,
    type UseQueryResult,
} from '@tanstack/react-query'
import { registerService } from '../../APIs/register'
import type {
    customerType,
    CustomerTypeSearch,
    formData,
    RegisterResponse,
    responseCustomerType,
    User,
} from '../../typesAndConsts/types'
import { toast } from 'sonner'
import { successFunc } from './funcQuery'
import { AxiosError } from 'axios'
import { useStoreHook } from '../store/stateManagement'
import { getAlluserService } from '../../APIs/getAllusers'
import { loginService } from '../../APIs/login'
import { useNavigate } from 'react-router-dom'
import { addCustomerService } from '../../APIs/addCustomer'
import { getCustomerByType } from '../../APIs/getCustomerByType'

type ApiError = {
    error: string
}

export function useRegister(): UseMutationResult<RegisterResponse, AxiosError<ApiError>, formData> {
    const setUser = useStoreHook((state) => state.setUser)

    const mutation = useMutation<RegisterResponse, AxiosError<ApiError>, formData>({
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
    const navigation = useNavigate()

    const mutation = useMutation<RegisterResponse, AxiosError<ApiError>, formData>({
        mutationFn: (userInfo: formData) => loginService(userInfo),
        onSuccess: (data) => {
            successFunc(data)
            setUser(data.user)
            navigation('/')
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

export function useGetUsers(): UseQueryResult<User[], AxiosError<ApiError>> {
    const query = useQuery<User[], AxiosError<ApiError>>({
        queryFn: getAlluserService,
        queryKey: ['users'],
    })

    return query
}

export function useAddCustomer(): UseMutationResult<responseCustomerType, Error, customerType> {
    const mutation = useMutation<responseCustomerType, Error, customerType>({
        mutationFn: (customer) => addCustomerService(customer),
        onError: (e) => {
            toast.error('مشکلی در ارسال داده ها ایجاد شده')
            console.log(e)
        },
        onSuccess: () => {
            toast.success('داده با موفقیت ارسال شد')
        },
    })

    return mutation
}

export function useGetCustomerByType(
    cType: CustomerTypeSearch,
): UseQueryResult<customerType[], AxiosError<ApiError>> {
    const query = useQuery<customerType[], AxiosError<ApiError>>({
        queryKey: ['customer', cType],
        queryFn: async () => getCustomerByType(cType),
        enabled: !!cType,
    })

    return query
}
