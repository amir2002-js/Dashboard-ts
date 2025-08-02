import { useState } from 'react'
import Form from './Form'

const people = [
    { id: 1, name: 'مشتری فروشنده', typeCustomer: 'creditor' },
    { id: 2, name: 'مشتری خریدار', typeCustomer: 'debtor' },
]

export default function AddCustomer() {
    const [query, setQuery] = useState('')
    const [selected, setSelected] = useState(people[1])

    const filteredPeople =
        query === ''
            ? people
            : people.filter((person) => {
                  return person.name.toLowerCase().includes(query.toLowerCase())
              })

    return (
        <div>
            <div className=" resp w-11/12 mx-auto bg-background-secondary-light shadow-lg font-dana dark:bg-background-secondary-dark py-10 rounded-xl mt-10 mb-4">
                <div className="text-3xl text-background-dark dark:text-background-secondary-light font-morabba text-center mb-14">
                    ثبت اطلاعات کاربر
                </div>

                <Form
                    filteredPeople={filteredPeople}
                    selected={selected}
                    setQuery={setQuery}
                    setSelected={setSelected}
                />
            </div>
        </div>
    )
}
