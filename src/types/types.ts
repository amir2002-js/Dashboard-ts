export type formData = {
    username?: string
    email?: string
    password?: string
}

export type userType = {
    email: string
    role: string
    username: string
}

export type RegisterResponse = {
    result: string
    accessToken: string
    refreshToken: string
    user: userType
}
