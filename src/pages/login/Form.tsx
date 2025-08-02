import { useNavigate } from 'react-router-dom'
import Button from '../../components/ui/buttons/Button'
import Input from '../../components/ui/Input'
import Logo from '../../components/ui/Logo'

export default function Form() {
    const navigation = useNavigate()
    return (
        <div
            className="p-5  rounded shadow-lg z-[99] max-w-80 w-full shadow-gray-300 bg-background-secondary-light flex flex-col gap-5"
            dir="rtl"
        >
            <section className="w-full flex justify-center items-center">
                <Logo />
            </section>
            <h2 className="text-2xl font-morabba">به وبسایت ما خوش آمدید</h2>
            <p className="text-xs font-dana-light">
                برای استفاده از امکانات سایت ما لطفا وارد حساب کاربری خودتون بشید
            </p>
            <form className="w-full flex flex-col gap-5">
                <label className="w-full border-2 rounded border-gray-300 px-2 py-1 h-10 focus-within:border-main flex relative">
                    <Input type="text" placeholder="ایمیل..." />
                </label>
                <label className="w-full border-2 rounded border-gray-300 px-2 py-1 h-10 focus-within:border-main flex relative">
                    <Input type="password" placeholder="رمز عبور..." />
                </label>
                <div className="flex justify-between items-center">
                    <label className="flex gap-2 font-dana text-xs hover:cursor-pointer w-fit">
                        <input type="checkbox" />
                        مرا به خاطر بسپار
                    </label>

                    <Button text="رمز خود را فراموش کردم" color="primary" typeBtn="text" />
                </div>

                <Button text="وارد شوید" color="primary" typeBtn="contained" types="submit" />

                <section className="flex gap-0.5 font-dana text-xs items-center justify-center flex-col">
                    <p>اکانت فعال ندارید؟</p>
                    <Button
                        text="ساخت اکانت جدید"
                        color="primary"
                        typeBtn="text"
                        onClick={() => navigation('/sign-up')}
                    />
                </section>
            </form>
        </div>
    )
}
