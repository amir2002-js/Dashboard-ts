import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import Button from './buttons/Button'
import { useState } from 'react'
import type { customerType } from '../../typesAndConsts/types'
import { getNameByIdInfilteredPeople } from '../../logics/funcs'
import { getJalaliDate } from '../../logics/getJalaiDate'

export default function Card({
    type,
    firstName,
    lastName,
    phoneNumber,
    totality,
    weight,
    description,
    CreatedAt,
}: customerType) {
    const [isOpen, setIsOpen] = useState(false)
    const strType = getNameByIdInfilteredPeople(Number(type))
    const dateJalali = getJalaliDate(CreatedAt as string)

    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }

    return (
        <>
            <div
                className="bg-background-secondary-light hover:-translate-y-2 rounded-lg transition-all duration-300 flex flex-col items-stretch justify-stretch dark:bg-background-secondary-dark max-w-80 min-w-60 p-4 shadow-lg"
                dir="rtl"
            >
                <table>
                    <tbody className="*:*:p-3">
                        <tr className="m-4">
                            <td className="text-[10px] ml-5">اسم : </td>
                            <td className="font-dana">{firstName + ' ' + lastName}</td>
                        </tr>

                        <tr className="m-4">
                            <td className="text-[10px] ml-5">تاریخ : </td>
                            <td className="font-dana">{dateJalali}</td>
                        </tr>

                        <tr className="m-4">
                            <td className="text-[10px] ml-5">نوع حساب : </td>
                            <td className="font-dana">{strType}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="*:w-full *:p-3.5">
                    <Button
                        color="primary"
                        text="مشاهده جزییات"
                        typeBtn="contained"
                        types="button"
                        onClick={open}
                    />
                </div>
            </div>

            <Dialog
                open={isOpen}
                as="div"
                className="relative z-[999999999999999999] focus:outline-none font-dana"
                onClose={close}
            >
                <div className="fixed inset-0 z-10 w-screen bg-black/80 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-5">
                        <DialogPanel
                            transition
                            className="w-full max-w-md py-10 flex flex-col justify-center items-stretch gap-10 rounded-xl dark:bg-white/5 bg-black/20 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                        >
                            <DialogTitle
                                as="h3"
                                className="text-base/7 font-medium text-center text-white"
                            >
                                اطلاعات مشتری
                            </DialogTitle>
                            <section
                                className="mt-2 text-sm/6 text-white/50 *:flex *:justify-between *:items-center"
                                dir="rtl"
                            >
                                <div className="">
                                    <span>اطلاعات تماس: </span>
                                    <span>{phoneNumber}</span>
                                </div>

                                <div className="">
                                    <span className="">مبلغ : </span>
                                    <span className="">{totality} تومان</span>
                                </div>

                                <div className="">
                                    <span className="">طلای برده : </span>
                                    <span className="">{weight} گرم</span>
                                </div>

                                <div className="">
                                    <span className=""> مانده : </span>
                                    <span className="">{} تومان</span>
                                </div>
                                {description && (
                                    <div className="">
                                        <span> توضیحات تکمیلی: </span>
                                        <span>{description}</span>
                                    </div>
                                )}
                            </section>
                            <div className="mt-4">
                                <Button
                                    color="primary"
                                    text="مشاهده شد"
                                    typeBtn="contained"
                                    types="button"
                                    onClick={close}
                                />
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}
