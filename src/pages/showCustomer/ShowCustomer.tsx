import { useParams } from 'react-router-dom'
import { useGetCustomerById } from '../../hooks/query/queries'
import { getJalaliDateByClock } from '../../logics/funcs'
import { FaUserAlt } from 'react-icons/fa'
import BoxIcon from './BoxIcon'
import { PiCalendarDotsThin, PiCoinsThin, PiMoneyThin, PiPhoneCallThin } from 'react-icons/pi'
import type { JSX } from 'react'

export default function ShowCustomer() {
    const { id } = useParams()
    const { data, isLoading } = useGetCustomerById(id as string)

    const infoOfCustomer = {
        phoneNumber: [<PiPhoneCallThin className="text-3xl" />, ''],
        totality: [<PiMoneyThin className="text-3xl" />, ' تومان '],
        CreatedAt: [<PiCalendarDotsThin className="text-3xl" />, ''],
        weight: [<PiCoinsThin className="text-3xl" />, ' گرم '],
    }

    if (isLoading) {
        return (
            <div className="size-full flex justify-center items-center">
                درحال دریافت اطلاعات ...
            </div>
        )
    }
    return (
        <div className="text-black font-dana-light dark:text-white py-4">
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
                                        />
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
                        <BoxIcon Icon={<span>توضیحات تکمیلی : </span>} value={data.description} />
                    )}
                </div>
            </section>
            {/* more info */}
        </div>
    )
}
