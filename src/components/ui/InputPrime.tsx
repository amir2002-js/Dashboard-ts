import { useState } from 'react'
import { PiEyeClosedThin, PiEyeThin } from 'react-icons/pi'

type InputProps = {
    type: 'text' | 'password' | 'number' | 'tel' | 'textarea' // انواع جدید اضافه شد
    placeholder: string
    name: string // پراپرتی name اضافه شد
}

export default function InputPrime({
    type,
    placeholder,
    name,
}: InputProps) {
    const [showPass, setShowPass] = useState(false)

    function toggleState() {
        setShowPass((p) => !p)
    }

    return (
        <div className="">
            {type == 'textarea' ? (
                <div className="relative outline-0 col-span-full ring-2 pr-2 focus-within:ring-main text-xs ring-gray-300 dark:ring-[#5B5774] rounded pt-1">
                    <span className="text-xs font-dana dark:text-[#5B5774] -top-2.5 px-2 bg-white dark:bg-background-secondary-dark truncate w-fit absolute">
                        {placeholder}
                    </span>
                    <textarea className="outline-0 size-full p-2" id=""></textarea>
                </div>
            ) : (
                <label className="w-full border-2 rounded border-gray-300 dark:border-[#5B5774] px-2 py-1 h-10 focus-within:border-main flex relative">
                    <span className="text-xs font-dana dark:text-[#5B5774] -top-2.5 px-2 bg-background-secondary-light dark:bg-background-secondary-dark truncate w-fit absolute">
                        {placeholder}
                    </span>
                    <input
                        type={type === 'password' ? (showPass ? 'text' : type) : type}
                        className="w-full text-xs font-dana outline-0"
                        name={name}

                    />
                    {type === 'password' &&
                        (showPass ? (
                            <button type="button" onClick={toggleState}>
                                <PiEyeThin className="text-xl" />
                            </button>
                        ) : (
                            <button type="button" onClick={toggleState}>
                                <PiEyeClosedThin className="text-xl" />
                            </button>
                        ))}
                </label>
            )}
        </div>
    )
}
