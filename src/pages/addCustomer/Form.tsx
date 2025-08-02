import {
    Button,
    Combobox,
    ComboboxButton,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
} from '@headlessui/react'
import InputPrime from '../../components/ui/InputPrime'

import clsx from 'clsx'
import { PiCaretDownThin, PiCheckThin } from 'react-icons/pi'


type formTp = {
    setQuery: (t: string) => void
    setSelected: (t: { id: number; name: string; typeCustomer: string }) => void
    selected: { id: number; name: string; typeCustomer: string }
    filteredPeople: {
        id: number
        name: string
        typeCustomer: string
    }[]
}

export default function Form({ setSelected, selected, setQuery, filteredPeople }: formTp) {

    return (
        <form
            className="grid grid-cols-2 gap-6 max-sm:grid-cols-1 max-sm:px-3"
            dir="rtl"
            // onSubmit={}
            noValidate
        >
            <InputPrime
                type="text"
                name="firstName"
                placeholder="نام"
                // value={formData.firstName}
                // onChange={handleChange}
                // error={errors.firstName}
            />
            <InputPrime
                type="text"
                name="lastName"
                placeholder="نام خانوادگی"
            />
            <InputPrime
                placeholder="شماره تماس"
                type="tel" // type 'tel' برای شماره تماس مناسب‌تر است
                name="phoneNumber"

            />
            <InputPrime
                type="number"
                name="totalAmount"
                placeholder="مبلغ کل"

            />
            <InputPrime
                type="number"
                name="goldWeight"
                placeholder="وزن طلا (گرم)"
            />
            {/* select box */}
            <div className="font-dana">
                <Combobox
                    value={selected}
                    onChange={(value) => setSelected(value!)}
                    onClose={() => setQuery('')}
                >
                    <div className="relative text-secondary-dark dark:text-white">
                        <ComboboxInput
                            className={clsx(
                                'w-full h-10 rounded dark:border-none border-2 border-gray-300 bg-white/5 py-1.5 pr-8 pl-3 text-sm/6',
                                'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25',
                            )}
                            displayValue={(person: {
                                id: number
                                name: string
                                typeCustomer: string
                            }) => person.name}
                            onChange={(event) => setQuery(event.target.value)}
                        />
                        <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
                            <PiCaretDownThin className="size-4" />
                        </ComboboxButton>
                    </div>

                    <ComboboxOptions
                        anchor="bottom"
                        transition
                        className={clsx(
                            'w-(--input-width) rounded border-2 border-background-dark/30 dark:border-white/20 dark:bg-background-secondary-dark  bg-white p-2 [--anchor-gap:--spacing(1)] empty:invisible',
                            'transition duration-100 ease-in data-leave:data-closed:opacity-0',
                        )}
                    >
                        {filteredPeople.map((person) => (
                            <ComboboxOption
                                key={person.id}
                                value={person}
                                className="group flex cursor-pointer flex-row-reverse items-center gap-2 rounded px-3 py-1.5 select-none data-focus:bg-background-dark/35 dark:data-focus:bg-white/10"
                            >
                                <PiCheckThin className="invisible size-4 text-secondary-dark dark:text-white group-data-selected:visible" />
                                <div className="text-sm/6 text-secondary-dark dark:text-white">
                                    {person.name}
                                </div>
                            </ComboboxOption>
                        ))}
                    </ComboboxOptions>
                </Combobox>
            </div>

            <div className="col-span-full">
                <InputPrime
                    type="textarea" // از نوع جدید textarea استفاده می‌کنیم
                    name="description"
                    placeholder="توضیحات تکمیلی"
                />
            </div>
            <Button
                type="submit"
                className={
                    'col-span-full shadow-lg text-white bg-info-bg max-w-96 mx-auto w-full p-2 rounded-md'
                }
            >
                ثبت اطلاعات
            </Button>
        </form>
    )
}
