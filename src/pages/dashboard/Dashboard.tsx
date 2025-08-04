import Card from '../../components/ui/Card'
import { useGetCustomerByType } from '../../hooks/query/queries'

export const Dashboard = () => {
    const { isLoading, data: customer } = useGetCustomerByType('debtor')

    console.log(customer)

    if (isLoading) {
        return <div>در حال بارگذاری اطلاعات...</div>
    }

    return (
        <>
            {customer !== undefined ? (
                <div className="py-10">
                    <div className="w-full h-96 mb-20 rounded-2xl overflow-hidden relative flex justify-center items-center bg-none">
                        <img
                            src="/images/bg-search.jpg"
                            className="absolute bottom-0 h-full z-0 w-full object-cover object-center"
                        />
                        <form className="z-50 w-full max-w-96 *:w-full *:*:w-full mx-10 h-fit overflow-hidden shadow-[0_0_20px_2px_#155dfc]  focus-within:ring-4">
                            <label className="bg-white *:outline-0  rounded-xl p-2 ring-blue-600">
                                <input type="text" />
                            </label>
                        </form>
                    </div>
                    <div className="flex justify-center items-center flex-wrap *:flex-1 *:grow *:shrink basis-auto gap-7">
                        {customer.map((item) => (
                            <Card
                                key={item.ID}
                                CreatedAt={item.CreatedAt}
                                totality={item.totality}
                                type={item.type}
                                weight={item.weight}
                                description={item.description}
                                firstName={item.firstName}
                                lastName={item.lastName}
                                phoneNumber={item.phoneNumber}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                ''
            )}
        </>
    )
}
