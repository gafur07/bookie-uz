import { Form, Input, message } from "antd"
import { MaskedInput } from "antd-mask-input"
import "./register.scss"
import { Link, Navigate } from "react-router-dom"
import useAppDispatch from "@/hooks/useAppDispatch"
import useAppSelector from "@/hooks/useAppSelector"
import { authRegister } from "@/store/auth/auth.action"
const Register = () => {
    const dispatch = useAppDispatch()
    const { data, token} = useAppSelector((store) => store.auth)
    
    console.log(data);
    
    const register = (data: any) => {
        dispatch(
            authRegister({
                ...data,
                callback: (res: any) => {
                    localStorage.setItem('token', res.data.token)
                    message.success("Siz dizimnen ottinz!")
                    console.log(res);
                    
                },
                errorCallback:() => {
                    message.error("Severde qatelik juz berdi!")
                }
            })
        )
    }

    if(token) return <Navigate to={'/'} replace={true}/>

  return (
    <>
        <section className="register w-full h-screen py-[160px]">
            <div className="container">
                <div className="flex flex-col justify-center items-center gap-[50px]">
                    <h2 className="register-h1">Dizimnen ótiw</h2>
                    <Form onFinish={register} className="form flex flex-col">
                        <Form.Item
                            name={'name'}
                            required={true}
                            rules={[
                                {
                                    required: true,
                                    message: 'Atıńızdı kiritiń'
                                }
                            ]}
                        >
                            <Input className="p-[13px] rounded-[16px] border-[#2d71ae]" placeholder="Atıńız"/>
                        </Form.Item>
                        <Form.Item
                            name={'phone'}
                            required={true}
                            rules={[
                                {
                                    required: true,
                                    message: 'Telefon nomerińzdi kiritiń'
                                }
                            ]}
                        >
                            <MaskedInput className="p-[13px] rounded-[16px] border-[#2d71ae]" mask={'+998000000000'} placeholder="+998 (__) ___-__-__"/>
                        </Form.Item>
                        <Form.Item
                            name={'password'}
                            required={true}
                            rules={[
                                {
                                    required: true,
                                    message: 'Parolıńızdı kiritiń'
                                }
                            ]}
                        >
                            <Input.Password className="p-[13px] rounded-[16px] border-[#2d71ae]" placeholder="Parolıńız"/>
                        </Form.Item>
                        <button type="submit" className="rounded-[16px] leading-[130%] bg-[#2d71ae] py-[13px] text-white font-semibold">Dizimnen ótiw</button>
                    </Form>
                    <Link to={'/login'} className="register-link font-semibold leading-[130%] text-center text-[#2d71ae]">Kiriw</Link>
                </div>
            </div>
        </section>
    </>
  )
}

export default Register