export interface IAuthRegister {
    name: string,
    phone: string,
    password: string,
    callback: (res: any) => void,
    errorCallback: () => void
}

export interface IAuthLogin {
    phone: string,
    password: string,
    callback: (res: any) => void,
    errorCallback: () => void
}
