import { UiButton, UiInputPassword } from "@/components/ui";
import {
  useAppDispatch,
  useAppSelector
} from "@/hooks";
import { IAuthLogin } from "@/services/auth/auth.interface";
import { Form } from "antd";
import { MaskedInput } from "antd-mask-input";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "@/store/index.actions";
import { useLoginMutation } from "@/services";
import { useForm } from "antd/es/form/Form";
import googleIcon from "@/images/googleIcon.svg"

const Login = () => {
  const { token } = useAppSelector((store) => store.auth);
  const [form] = useForm()
  const {data, mutate: login, isSuccess} = useLoginMutation()
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onFinish = (_values: IAuthLogin) => {
    login({
      ..._values,
      phone: _values.phone.replace(/ /g, "").substring(1)
    })
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(signIn(data.token))
      form.resetFields()
      navigate('/', {replace: true})
    }
  },[isSuccess, login, data])

  useEffect(() => {
    if (token) {
      navigate("/", { replace: true });
    }
  }, [token]);

  return (
    <>
      <section className="register w-full h-screen py-[160px]">
        <div className="container">
          <div className="flex flex-col justify-center items-center gap-[50px]">
            <h2 className="register-h1">Kiriw</h2>
            <Form form={form} onFinish={onFinish} className="form flex flex-col">
              <Form.Item
                name={"phone"}
                required={true}
                rules={[
                  {
                    required: true,
                    message: "Telefon nomerińzdi kiritiń",
                  },
                ]}
              >
                <MaskedInput
                  className="p-[13px] rounded-[16px] border-[#2d71ae]"
                  inputMode="tel"
                  mask='+{998} 00 000 00 00'
                />
              </Form.Item>
              <Form.Item
                name={"password"}
                required={true}
                rules={[
                  {
                    required: true,
                    message: "Parolıńızdı kiritiń",
                  },
                ]}
              >
                <UiInputPassword
                  size="large"
                  type="password"
                  placeholder="Parolıńız"
                />
              </Form.Item>
              <div className="flex items-center justify-center gap-[10px] mb-[12px]">
                <span className="cursor-pointer text-[#a1a1a1]">
                  Parolińizdi umıttıńız ba?
                </span>
                <p className="cursor-pointer text-[#2d71ea]">Qayta tiklew</p>
              </div>
              <UiButton
                type="primary"
                className="font-semibold"
                size="large"
                htmlType="submit"
              >
                Kiriw
              </UiButton>
            </Form>
            <button className="gsi-material-button w-[305px]">
                <div className="gsi-material-button-state"></div>
                <div className="gsi-material-button-content-wrapper">
                  <div className="gsi-material-button-icon">
                    <img src={googleIcon} />
                  </div>
                  <span className="gsi-material-button-contents">
                    Sign in with Google
                  </span>
                  <span className="hidden">Sign in with Google</span>
                </div>
              </button>
            <Link
              to={"/register"}
              className="register-link font-semibold leading-[130%] text-center text-[#2d71ae]"
            >
              Dizimnen ótiw
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export { Login };
