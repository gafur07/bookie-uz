import { useEffect } from "react";
import { Form } from "antd";
import { MaskedInput } from "antd-mask-input";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UiButton, UiInputPassword } from "@/components/ui";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { IAuthLogin } from "@/services/auth/auth.interface";
import { signIn } from "@/store/index.actions";
import { useLoginMutation } from "@/services";
import { BkGoogleLogo } from "@/assets/images";
import { FormProps } from "antd/lib";

const Login = () => {
  const { token } = useAppSelector((store) => store.auth);
  const [form] = Form.useForm();
  const { data, mutate: login, isSuccess } = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onFinish: FormProps<IAuthLogin>["onFinish"] = (_values) => {
    login({
      ..._values,
      phone: _values.phone.replace(/ /g, "").substring(1),
    });
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(signIn(data.token));
      form.resetFields();
      navigate("/", { replace: true });
    }
  }, [isSuccess, login, data]);

  if (token) return <Navigate to={"/"} replace />;

  return (
    <>
      <section className="w-full h-screen py-[160px]">
        <div className="container">
          <div className="flex flex-col justify-center items-center gap-[50px]">
            <h2 
              className="font-semibold leading-[100%] text-center"
              style={{ fontSize: 'calc(22px + 14 * (100vw - 320px) / 1280)' }}
            >
              Kiriw
            </h2>
            <Form
              form={form}
              onFinish={onFinish}
              className="form flex flex-col w-[305px]"
              layout="vertical"
              size="large"
            >
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
                  className="p-[13px] rounded-[16px] border-[#2d71ae]"
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
                  },
                ]}
              >
                <UiInputPassword placeholder="Parolıńız" />
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
                onClick={() => form.submit()}
                style={{ fontSize: 'calc(12px + 4 * (100vw - 320px) / 1280)' }}
              >
                Kiriw
              </UiButton>
            </Form>
            <button className="gsi-material-button w-[305px]">
              <div className="gsi-material-button-state"></div>
              <div className="gsi-material-button-content-wrapper">
                <div className="gsi-material-button-icon">
                  <img src={BkGoogleLogo} />
                </div>
                <span className="gsi-material-button-contents">
                  Sign in with Google
                </span>
                <span className="hidden">Sign in with Google</span>
              </div>
            </button>
            <Link
              to={"/register"}
              className="font-semibold leading-[130%] text-center text-[#2d71ae]"
              style={{ fontSize: 'calc(12px + 4 * (100vw - 320px) / 1280)' }}
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
