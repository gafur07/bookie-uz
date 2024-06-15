import { FC, ReactNode } from "react"
import { useAppSelector } from "./useAppSelector"
import { Navigate } from "react-router-dom"


export const RequireAuth: FC<{children: ReactNode}> = ({children}) => {
    const token = useAppSelector(state => state.auth.token)

    if (token) {
        return <Navigate to={"/"} replace />
    }
    return children
}