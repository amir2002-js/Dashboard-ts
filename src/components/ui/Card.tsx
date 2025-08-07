import Button from './buttons/Button'
import { getJalaliDate, getNameByIdInfilteredPeople } from '../../logics/funcs'
import { useNavigate } from 'react-router-dom'

export default function Card({
    type,
    firstName,
    lastName,
    CreatedAt,
    ID,
}: {
    CreatedAt: string
    type: string
    firstName: string
    lastName: string
    ID: number
}) {
    const strType = getNameByIdInfilteredPeople(Number(type))
    const dateJalali = getJalaliDate(CreatedAt as string)
    const navigation = useNavigate()

    return (
        <>
            <div
                className="bg-background-secondary-light hover:-translate-y-2 rounded-lg transition-all duration-300 flex flex-col items-stretch justify-between dark:bg-background-secondary-dark max-w-80 min-w-60 p-4 shadow-lg"
                dir="rtl"
            >
                <table>
                    <tbody className="*:*:p-3">
                        <tr className="m-4">
                            <td className="text-[10px] ml-5 truncate">اسم : </td>
                            <td className="text-[14px] font-dana">{firstName + ' ' + lastName}</td>
                        </tr>

                        <tr className="m-4">
                            <td className="text-[10px] ml-5 truncate">تاریخ : </td>
                            <td className="text-[14px] font-dana">{dateJalali}</td>
                        </tr>

                        <tr className="m-4">
                            <td className="text-[10px] ml-5 truncate">نوع حساب : </td>
                            <td className="text-[14px] font-dana">{strType}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="*:w-full *:p-3.5">
                    <Button
                        color="primary"
                        text="مشاهده جزییات"
                        typeBtn="contained"
                        types="button"
                        onClick={() => navigation(`/dashboard/customers/${ID}`)}
                    />
                </div>
            </div>
        </>
    )
}
