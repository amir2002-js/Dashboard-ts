export function getJalaliDate(createAt: string): string {
    const date = new Date(createAt)

    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Tehran',
    } as const

    const shamsiDate = new Intl.DateTimeFormat('fa-IR', options).format(date)
    return shamsiDate
}
