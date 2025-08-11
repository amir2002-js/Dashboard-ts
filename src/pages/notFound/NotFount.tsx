import { PiArrowUUpLeft } from 'react-icons/pi'
import { LandingHeader } from '../../components/layer/header/LandingHeader'
import Button from '../../components/ui/buttons/Button'

export default function NotFount() {
    return (
        <div className="w-full min-h-screen h-screen bg-gray-400">
            <LandingHeader />
            <div className=" w-full max-w-laptop mx-auto h-full p-5 grid  grid-cols-1 md:grid-cols-2 justify-center items-center justify-items-center pt-20">
                <div className="">
                    <img src="/public/images/404.png" alt="" />
                </div>
                <div className="flex flex-col gap-4" dir="rtl">
                    <h2 className="text-3xl text-white font-dana-bold">صفحه مورد نظر یافت نشد</h2>
                    <p className="text-sm font-dana text-white/55 mb-4">
                        متأسفیم، به نظر می‌رسد صفحه‌ای که به دنبال آن هستید وجود ندارد یا منتقل شده
                        است. نگران نباشید! می‌توانید به صفحه اصلی بازگردید یا از منوی جستجو برای
                        یافتن خدمات حسابداری مورد نظر خود استفاده کنید.
                    </p>
                    <Button
                        color="error"
                        text={
                            <div className="flex gap-2 justify-center items-center">
                                <span className="h-fit m-0 p-0">
                                    <PiArrowUUpLeft className="text-2xl" />
                                </span>
                                برگشت به عقب
                            </div>
                        }
                        onClick={() => history.back()}
                        typeBtn="contained"
                        types="button"
                        size="lg"
                    />
                </div>
            </div>
        </div>
    )
}
