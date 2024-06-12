import { Form } from "antd";
import { MaskedInput } from "antd-mask-input";
import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { UiButton, UiInput, UiInputPassword } from "@/components/ui";
import { useRegisterMutation } from "@/services/auth/auth.api";
import { IAuthRegister } from "@/services/auth/auth.interface";
import { useEffect } from "react";
import { useForm } from "antd/es/form/Form";
import { signOn } from "@/store/index.actions";
import googleIcon from "@/images/googleIcon.svg"
const Register = () => {
  const [form] = useForm();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((store) => store.auth);
  const { data, mutate: register, isSuccess } = useRegisterMutation();

  const onFinish = (_values: IAuthRegister) => {
    register({
      ..._values,
      phone: _values.phone.replace(/ /g, "").substring(1),
    });
  };
  useEffect(() => {
    if (isSuccess) {
      dispatch(signOn(data.token));
      localStorage.setItem("token", data.token);
      form.resetFields();
      navigate("/", { replace: true });
    }
  }, [isSuccess, register, data]);

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
            <h2 className="register-h1">Dizimnen ótiw</h2>
            <Form
              form={form}
              onFinish={onFinish}
              className="form flex flex-col"
            >
              <Form.Item
                name={"name"}
                required={true}
                rules={[
                  {
                    required: true,
                    message: "Atıńızdı kiritiń",
                  },
                ]}
              >
                <UiInput size="large" className="" placeholder="Atıńız" />
              </Form.Item>
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
                  mask="+{998} 00 000 00 00"
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
              <UiButton
                type="primary"
                size="large"
                htmlType="submit"
                className="font-semibold"
                >
                Dizimnen ótiw
              </UiButton>
                </Form>

              <button className="gsi-material-button w-[305px]">
                <div className="gsi-material-button-state"></div>
                <div className="gsi-material-button-content-wrapper">
                  <div className="gsi-material-button-icon">
                    <img src={googleIcon} />
                  </div>
                  <span className="gsi-material-button-contents">
                    Sign up with Google
                  </span>
                  <span className="hidden">Sign up with Google</span>
                </div>
              </button>
            <Link
              to={"/login"}
              className="register-link font-semibold leading-[130%] text-center text-[#2d71ae]"
            >
              Kiriw
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export { Register };
