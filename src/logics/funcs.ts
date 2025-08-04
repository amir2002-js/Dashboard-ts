import { filteredPeople } from '../typesAndConsts/consts'

export function getNameByIdInfilteredPeople(id: number): string {
    // از متد find برای پیدا کردن اولین آبجکتی که شرط را برآورده می‌کند، استفاده می‌کنیم
    const person = filteredPeople.find((p) => p.id === id)

    // اگر شخص پیدا شد، نام او را برگردان، در غیر این صورت undefined برگردان
    return person ? person.name : ''
}
