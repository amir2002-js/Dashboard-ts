import { Companies } from './Companies'
import { Features } from './Features'
import Trust from './Trust'

export default function Body() {
    return (
        <div className="p-5 flex flex-col justify-center items-center gap-[88px]">
            <Trust />
            <Companies />
            <Features />
        </div>
    )
}
