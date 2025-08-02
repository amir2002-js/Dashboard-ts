import Card from '../../components/ui/Card'

export const Dashboard = () => {
    return (
        <div className="py-10">
            <div className="w-full h-96 bg-gradient-to-br from-info-bg  via-primary-light mb-20 rounded-2xl to-main"></div>
            <div className="flex justify-center items-center flex-wrap *:flex-1 *:grow *:shrink basis-auto gap-7">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}
