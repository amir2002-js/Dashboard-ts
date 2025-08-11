import { Footer } from './footer/Footer'
import { Head } from './Head'
import Body from './body/Body'

export default function Landing() {
    return (
        <div className="box-border overflow-hidden pt-0">
            <Head />
            <Body />
            <Footer />
        </div>
    )
}
