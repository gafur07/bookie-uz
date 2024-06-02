import { Form, Input, message } from "antd"
import { MaskedInput } from "antd-mask-input"
import "./register.scss"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "@/hooks"
import { authRegister } from "@/store/auth/auth.action"
import { UiButton, UiInput } from "@/components/ui"
import { useRegisterMutation } from "@/store/auth/auth.api"
import { IAuthRegister } from "@/store/auth/auth.interface"
import { useEffect } from "react"
import { useForm } from "antd/es/form/Form"
const Register = () => {
    const [form] = useForm()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { token } = useAppSelector((store) => store.auth)
    const { data, mutate: register, isLoading: isPending, isSuccess } = useRegisterMutation()

    const onFinish = (_values: IAuthRegister) => {
        register({
            ..._values,
            phone: _values.phone.replace(/ /g, "").substring(1)
        })
    }

    useEffect(() => {
        if(isSuccess) {
            localStorage.setItem('token', data.data.token)
            form.resetFields()
            navigate('/', { replace: true })
        }
    },[isSuccess, isPending, data])

    useEffect(() => {
		return () => {
			form.resetFields();
		};
	}, []);
    
    // const register = (data: any) => {
    //     if (data["phone"]) {
    //         data["phone"] = data.phone.replace(/ /g, "").substring(1)
    //     }
    //     dispatch(
    //         authRegister(data)
    //     )
    // }

    if(token) return <Navigate to={'/'} replace/>

  return (
    <>
        <section className="register w-full h-screen py-[160px]">
            <div className="container">
                <div className="flex flex-col justify-center items-center gap-[50px]">
                    <h2 className="register-h1">Dizimnen ótiw</h2>
                    <Form onFinish={onFinish} className="form flex flex-col">
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
                            <UiInput size="large" className="" placeholder="Atıńız"/>
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
                            <MaskedInput className="p-[13px] rounded-[16px] border-[#2d71ae]" inputMode="tel" mask='+{998} 00 000 00 00'/>
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
                            <UiInput size="large" type="password" placeholder="Parolıńız"/>
                        </Form.Item>
                        <UiButton type="primary" size="large" htmlType="submit" className="font-semibold">Dizimnen ótiw</UiButton>
                    </Form>
                    <Link to={'/login'} className="register-link font-semibold leading-[130%] text-center text-[#2d71ae]">Kiriw</Link>
                </div>
            </div>
        </section>
    </>
  )
}

export { Register }