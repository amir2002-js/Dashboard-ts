type buttonType = {
    color: 'info' | 'warning' | 'error' | 'success' | 'primary' | 'secondary'
    typeBtn: 'contained' | 'outlined' | 'text'
    text: string
    types?: 'button' | 'reset' | 'submit'
    onClick?: () => void
}
export default function Button({
    typeBtn,
    color,
    text,
    types = 'button',
    onClick = () => {
        console.log('clicked')
    },
}: buttonType) {
    let className = ''
    switch (color) {
        case 'error':
            className += ' '
            break
        case 'info':
            className += ' '
            break
        case 'primary':
            className += ' bg-primary-main text-primary-main border-primary-main'
            break
        case 'secondary':
            className += ' bg-secondary-main text-secondary-main border-secondary-main'
            break
        case 'success':
            className += ' '
            break
        case 'warning':
            className += ' '
            break
    }

    switch (typeBtn) {
        case 'contained':
            className = className + ' !text-white border-0 shadow-lg '
            break
        case 'outlined':
        case 'text':
            className = className + ' border-0 !bg-transparent'
            break
    }
    return (
        <button
            className={`${className} py-2 px-3 rounded text-xs`}
            type={types}
            onClick={() => onClick()}
        >
            {text}
        </button>
    )
}
