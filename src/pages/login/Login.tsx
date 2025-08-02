import Form from './Form'

export default function Login() {
    return (
        <div className="h-screen relative bg-background-light px-3 dark:bg-background-dark flex justify-center items-center font-dana-bold">
            <Form />

            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className="absolute bottom-0"
            >
                <path fill="#000" fill-opacity="0.1" d="M0,160L1440,64L1440,320L0,320Z"></path>
            </svg> */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className="absolute bottom-0"
            >
                <path
                    fill="#000"
                    fill-opacity="0.1"
                    d="M0,192L48,192C96,192,192,192,288,208C384,224,480,256,576,250.7C672,245,768,203,864,160C960,117,1056,75,1152,53.3C1248,32,1344,32,1392,32L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
        </div>
    )
}
