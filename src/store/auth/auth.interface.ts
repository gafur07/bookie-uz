
export interface IToken {
    token: string | null
}

export interface IAuthRegister {
    name: string,
    phone: string,
    password: string
}

export interface IAuthLogin {
    phone: string,
    password: string
}