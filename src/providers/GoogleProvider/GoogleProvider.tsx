import { clientID } from "@/api"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { FC, ReactNode } from "react"

const GoogleProvider:FC<{children: ReactNode}> = ({ children }) => {
  return (
    <GoogleOAuthProvider clientId={clientID}>
        {children}
    </GoogleOAuthProvider>
  )
}

export { GoogleProvider }