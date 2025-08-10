import React from 'react'
import SvgN1 from './svgs/SvgN1'
import { SvgN2 } from './svgs/SvgN2'
import { SvgN3 } from './svgs/SvgN3'

export default function Trust() {
    return (
        <div className="pt-12">
            <h2 className="font-dana-bold text-4xl text-center">مورد اعتماد 2000 شرکت </h2>
            <p className='text-base text-neutral-500 text-center'>نظرات شرکت‌هایی که شما را استخدام کرده‌اند</p>

            <div className="flex flex-wrap justify-center items-center">
                <SvgN1/>
                <SvgN2/>
                <SvgN3/>
            </div>
        </div>
    )
}
