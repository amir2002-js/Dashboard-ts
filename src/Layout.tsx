import { Outlet } from 'react-router-dom'
import Header from './components/layer/header/Header'
import SideBar from './components/layer/sideBar/SideBar'

export default function Layout() {
    return (
        <div
            className={`bg-background-light font-morabba dark:bg-background-dark min-h-screen flex dark:text-white max-w-dvw overflow-y-hidden`}
        >
            <SideBar />
            <div className="grow lg:ml-72 ">
                <div className="flex flex-col items-stretch relative ">
                    <Header />
                    <div className="mt-20 my-0 resp">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}
