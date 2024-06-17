import { FC, useState } from "react"
import { ForgotPassword } from "./ForgotPassorwd/ForgotPassword"
import { LoginForm } from "./LoginForm/LoginForm"

const Login: FC = () => {
  const [isForgot, setIsForgot] = useState(false)
  const toggleForgot = () => {
    setIsForgot(!isForgot)
  }
  return (
    <div>
      {
        isForgot ? 
          <ForgotPassword setIsForgot={setIsForgot} />
          :
          <LoginForm toggleForgot={toggleForgot}/>
      }
    </div>
  )
}

export { Login }