import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";
import { IAuthLogin } from "@/services/AuthServices/auth.interface";
import { authLogin } from "@/store/auth/auth.action";
import { Form, Input, message } from "antd";
import { MaskedInput } from "antd-mask-input";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const { data, token } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  console.log(data);

  const registerSubmit = (data: IAuthLogin) => {
    dispatch(
      authLogin({
        ...data,
        callback: (res: any) => {
          localStorage.setItem("token", res.data.token)
          message.success("Success login!");
          console.log(res);
        },
        errorCallback: () => {
          message.error("Kiriwde qatelik juz berdi!")
        },
      })
    );
  };

  useEffect(() => {
    if (token) {
      navigate("/", { replace: true });
    }
  }, [data]);

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
                  mask={"+998000000000"}
                  placeholder="+998 (__) ___-__-__"
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
                <Input.Password
                  className="p-[13px] rounded-[16px] border-[#2d71ae]"
                  placeholder="Parolıńız"
                />
              </Form.Item>
              <div className="flex items-center justify-center gap-[10px] mb-[12px]">
                <span className="cursor-pointer text-[#a1a1a1]">
                  Parolińizdi umıttıńız ba?
                </span>
                <p className="cursor-pointer text-[#2d71ea]">Qayta tiklew</p>
              </div>
              <button
                type="submit"
                className="rounded-[16px] leading-[130%] bg-[#2d71ae] py-[13px] text-white font-semibold"
              >
                Kiriw
              </button>
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

export default Login;
