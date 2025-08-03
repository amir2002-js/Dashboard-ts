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

export type Customer = {
    ID:number
    firstName: string
    lastName: string
    type: number
    weight: number
    totality: number
    phoneNumber: string
    description: string
}

// تایپ آپدیت شده و نهایی برای User
export type User = {
    ID: number
    CreatedAt: string
    UpdatedAt: string
    email: string
    username: string
    role: string
    customer: Customer[]
}

export type refreshTokenType = {
    accessToken : string
}