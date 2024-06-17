import { Form } from "antd";
import { MaskedInput } from "antd-mask-input";
import "./register.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { UiButton, UiInput, UiInputPassword } from "@/components/ui";
import { useRegisterMutation } from "@/services/auth/auth.api";
import { IAuthRegister } from "@/services/auth/auth.interface";
import { FC, useEffect } from "react";
import { useForm } from "antd/es/form/Form";
import { signOn } from "@/store/index.actions";
import { BkGoogleLogo } from "@/assets/images";

const Register: FC = () => {
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

  if (token) <Navigate to={"/"} replace/>

  return (
    <>
      <section className="w-full h-screen py-[160px]">
        <div className="container">
          <div className="flex flex-col justify-center items-center gap-[50px]">
            <h2 
              className="font-semibold leading-[100%] text-center"
              style={{ fontSize: 'calc(22px + 14 * (100vw - 320px) / 1280)' }}
              >
                Dizimnen ótiw
              </h2>
            <Form
              form={form}
              onFinish={onFinish}
              className="form flex flex-col w-[305px]"
              size="large"
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
                <UiInput className="" placeholder="Atıńız" />
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
                initialValue={""}
              >
                <MaskedInput
                  className="p-[13px] rounded-[16px] border-primary"
                  mask="+{998} 00 000 00 00"
                  size="large"
                />
              </Form.Item>
              <Form.Item
                name={"password"}
                required={true}
                rules={[
                  {
                    required: true, 
                    message: "Parolıńızdı kiritiń",
                  }, {
                    min: 8, 
                    message: "Parol keminde 8 belginen ibarat bolıwı kerek"
                  }
                ]}
              >
                <UiInputPassword
                  type="password"
                  placeholder="Parolıńız"
                />
              </Form.Item>
              <UiButton
                type="primary"
                onClick={() => form.submit()}
                className="font-semibold"
                style={{ fontSize: 'calc(12px + 4 * (100vw - 320px) / 1280)'}}
                >
                Dizimnen ótiw
              </UiButton>
                </Form>

              <button className="gsi-material-button w-[305px]">
                <div className="gsi-material-button-state"></div>
                <div className="gsi-material-button-content-wrapper">
                  <div className="gsi-material-button-icon">
                    <img src={BkGoogleLogo} />
                  </div>
                  <span className="gsi-material-button-contents">
                    Sign up with Google
                  </span>
                  <span className="hidden">Sign up with Google</span>
                </div>
              </button>
            <Link
              to={"/login"}
              className="font-semibold leading-[130%] text-center text-primary"
              style={{ fontSize: 'calc(12px + 4 * (100vw - 320px) / 1280)' }}
            >
              Kiriw
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export { Register }
