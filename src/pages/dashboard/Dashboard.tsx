import { useLocation } from 'react-router-dom'
import Card from '../../components/ui/Card'
import { useGetCustomerByType } from '../../hooks/query/queries'
import { useEffect, useState } from 'react'
import type { CustomerTypeSearch } from '../../typesAndConsts/types'
// import { CustomerTypeSearch } from '../../typesAndConsts/types'

export const Dashboard = () => {
    const { pathname } = useLocation()
    const [typeSearch, setTypeSearch] = useState<CustomerTypeSearch>('debtor')

    useEffect(() => {
        const arrType = pathname.split('/')
        const ownType = arrType[arrType.length - 1]

        console.log(ownType)
        setTypeSearch(ownType as CustomerTypeSearch)
    }, [pathname])

    const { isLoading: customersLoder, data: customers } = useGetCustomerByType(typeSearch)

    if (customersLoder) {
        return (
            <div className="h-screen w-screen absolute inset-0 flex justify-center items-center">
                در حال بارگذاری اطلاعات...
            </div>
        )
    }

    return (
        <>
            {customers !== undefined ? (
                <div className="py-10">
                    <div className="w-full h-96 mb-20 rounded-2xl overflow-hidden relative flex justify-center items-center bg-none">
                        <img
                            src="/images/bg-search.jpg"
                            className="absolute bottom-0 h-full z-0 w-full object-cover object-center"
                        />
                        <form
                            dir="rtl"
                            className="z-50 w-full max-w-96 bg-white ring-blue-600 *:w-full *:*:w-full rounded-xl p-2 mx-10 h-fit overflow-hidden  shadow-[0_0_20px_2px_#155dfc]  focus-within:ring-4"
                        >
                            <label className="*:outline-0 ">
                                <input type="text" />
                            </label>
                        </form>
                    </div>
                    <div className="flex justify-center items-stretch flex-wrap *:flex-1 *:grow *:shrink basis-auto gap-7">
                        {customers.map((item) => (
                            <Card
                                key={item.ID}
                                CreatedAt={item.CreatedAt as string}
                                type={item.type}
                                firstName={item.firstName}
                                lastName={item.lastName}
                                ID={item.ID as number}
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
