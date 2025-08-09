import { useParams } from 'react-router-dom'
import { getJalaliDate, getJalaliDateByClock, getNameById } from '../../logics/funcs'
import { FaUserAlt } from 'react-icons/fa'
import BoxIcon from './BoxIcon'
import { PiCalendarDotsThin, PiCoinsThin, PiMoneyThin, PiPhoneCallThin } from 'react-icons/pi'
import type { JSX } from 'react'
import { useGetCustomerById, usePostPayment } from '../../hooks/query/queries'
import InputPrime from '../../components/ui/InputPrime'
import Button from '../../components/ui/buttons/Button'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { filteredAccount } from '../../typesAndConsts/consts'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Toaster } from 'sonner'

const zodInputs = z
    .object({
        amount: z.string().min(1, 'وارد کردن این فیلد الزامیست'),
    })
    .transform((data) => ({
        amount: Number(data.amount),
    }))

type Inputs = z.infer<typeof zodInputs>

export default function ShowCustomer() {
    const { id } = useParams()
    const { data, isLoading } = useGetCustomerById(id as string)
    const { mutate } = usePostPayment(id as string)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(zodInputs) })

    const accountType = getNameById(data?.accountType as number, filteredAccount)

    const infoOfCustomer = {
        phoneNumber: [<PiPhoneCallThin className="text-3xl" />, ''],
        totality: [<PiMoneyThin className="text-3xl" />, ' تومان '],
        CreatedAt: [<PiCalendarDotsThin className="text-3xl" />, ''],
        weight: [<PiCoinsThin className="text-3xl" />, ' گرم '],
    }

    const onSubmit: SubmitHandler<Inputs> = (info) => {
        console.log('submit')
        console.log(info)
        mutate(info)
    }

    console.log(data)

    if (isLoading) {
        return (
            <div className="size-full flex justify-center items-center">
                درحال دریافت اطلاعات ...
            </div>
        )
    }
    return (
        <div className="text-black font-dana-light dark:text-white py-4">
            <Toaster
                richColors
                position="top-center"
                toastOptions={{
                    // در این قسمت کلاس‌های Tailwind را به بخش‌های مختلف اعلان می‌دهیم
                    classNames: {
                        toast: 'font-dana text-xs', // ✅ اعمال کلاس فونت به کل اعلان
                        title: 'font-dana text-xs', // می‌توانید برای عنوان جداگانه تنظیم کنید
                        description: 'font-dana text-xs', // و برای توضیحات
                    },
                }}
            />
            {/* profile */}
            <div className="flex max-sm:flex-col-reverse max-sm:justify-center max-sm:items-center justify-end items-stretch gap-10">
                {/* info */}
                <div className="flex justify-center max-sm:items-center items-end gap-6 flex-col">
                    <div className="flex justify-center items-center gap-4" dir="rtl">
                        <span>نام : </span>
                        <span className="font-dana-bold">{data?.firstName}</span>
                    </div>
                    <div className="flex justify-center items-center gap-4" dir="rtl">
                        <span>نام خانوادگی : </span>
                        <span className="font-dana-bold">{data?.lastName}</span>
                    </div>
                </div>
                {/* info */}
                <section className="size-32 shadow-lg shadow/20 shadow-black min-w-32 min-h-32 flex justify-center items-center bg-background-secondary-light dark:bg-background-secondary-dark rounded-full overflow-hidden">
                    <FaUserAlt className="text-6xl text-main" />
                </section>
            </div>
            {/* profile */}

            <div className="w-full bg-gray-200 dark:bg-background-secondary-dark my-10 h-px"></div>

            {/* more info */}
            <section className="mt-2 flex flex-col gap-5" dir="rtl">
                {data !== undefined && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 *:w-full gap-4">
                        {Object.entries(data).map(([key, value]) => {
                            if (key.toString() in infoOfCustomer) {
                                const typedKey = key as keyof typeof infoOfCustomer
                                return (
                                    <div className="" key={key}>
                                        <BoxIcon
                                            value={
                                                (key === 'CreatedAt'
                                                    ? getJalaliDateByClock(value as string)
                                                    : key === 'totality'
                                                      ? value.toLocaleString()
                                                      : (value as string)) +
                                                infoOfCustomer[typedKey][1]
                                            }
                                            Icon={infoOfCustomer[typedKey][0] as JSX.Element}
                                        ></BoxIcon>
                                    </div>
                                )
                            }
                        })}
                    </div>
                )}
                <div className="flex flex-col justify-center items-stretch *:grow gap-4">
                    {data?.description && (
                        <BoxIcon
                            Icon={<span> مانده : </span>}
                            value={data?.remainingAmount?.toLocaleString() as string}
                        />
                    )}

                    {data?.description && (
                        <BoxIcon
                            Icon={<span>توضیحات تکمیلی : </span>}
                            value={data.description}
                        ></BoxIcon>
                    )}
                </div>
            </section>
            {/* more info */}

            {/* pay input */}
            <div className="p-7 rounded-lg flex justify-center my-5 shadow shadow/15 shadow-black items-center flex-col gap-6 bg-background-secondary-light dark:bg-background-secondary-dark">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    dir="rtl"
                    className="w-full max-w-96 flex justify-between items-center flex-col *:w-full gap-7"
                >
                    <label className="relative">
                        <label className="w-full border-2 rounded border-gray-300 dark:border-[#5B5774] px-2 py-1 h-10 focus-within:border-main flex relative">
                            <InputPrime
                                type={'number'}
                                placeholder={'پرداخت قسط'}
                                {...register('amount')}
                            />
                        </label>

                        <span className="text-xs font-dana text-red-500 absolute -bottom-5 right-0">
                            {errors.amount?.message?.toString()}
                        </span>
                    </label>

                    <Button
                        color="primary"
                        text="ثبت"
                        typeBtn="contained"
                        types="button"
                        onClick={handleSubmit(onSubmit)}
                    />
                </form>
            </div>
            {/* pay input */}

            {/* pay info */}
            <BoxIcon Icon={<p>اطلاعات پرداخت قسط</p>} value="">
                <section className="pb-6 w-full">
                    {data?.payment !== null ? (
                        accountType === filteredAccount[0].name ? (
                            <div className="flex w-full flex-col gap-4" dir="rtl">
                                {data?.payment?.map((item) => (
                                    <div
                                        className="w-full flex gap-10 justify-between items-center"
                                        key={item.ID as number}
                                    >
                                        <span>{item.amount} گرم</span>
                                        <span>{getJalaliDate(item.CreatedAt as string)}</span>
                                        <div className="flex justify-center items-center gap-2">
                                            <button className="bg-success-light rounded-lg  dark:bg-success-dark px-5 py-2 text-white font-dana-bold text-xs">
                                                ویرایش
                                            </button>
                                            <button className="bg-error-light rounded-lg  dark:bg-error-dark px-5 py-2 text-white font-dana-bold text-xs">
                                                حذف
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className=""></div>
                        )
                    ) : (
                        '-- هیچ پرداختی وجود ندارد --'
                    )}
                </section>
            </BoxIcon>
            {/* pay info */}
        </div>
    )
}
