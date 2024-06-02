import { UiButton, UiInput } from "@/components/ui";
import {
  useAppDispatch,
  useAppSelector
} from "@/hooks";
import { authLogin } from "@/store/auth/auth.action";
import { IAuthLogin } from "@/store/auth/auth.interface";
import { Form, Input } from "antd";
import { MaskedInput } from "antd-mask-input";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { token } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const registerSubmit = (data: IAuthLogin) => {
    if (data["phone"]) {
      data["phone"] = data.phone.replace(/ /g, "").substring(1)
    }
    dispatch(
      authLogin(data)
    );
  };

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
            <Form onFinish={registerSubmit} className="form flex flex-col">
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
                <UiInput 
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
