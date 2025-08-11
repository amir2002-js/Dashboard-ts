import { Footer } from './footer/Footer'
import { Head } from './Head'
import Body from './body/Body'
import { Header } from './header/Header'

export default function Landing() {
    return (
        <div className="box-border overflow-hidden pt-0">
            <Header />
            <Head />
            <Body />
            <Footer />
        </div>
    )
}
