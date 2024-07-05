import { FC, useEffect } from "react";
import {Form, Spin} from "antd";
import { MaskedInput } from "antd-mask-input";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "antd/es/form/Form";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  UiButton,
  UiButtonGoogle,
  UiInput,
  UiInputPassword,
} from "@/components/ui";
import {useAuthGoogleMutation, useRegisterMutation} from "@/services/auth/auth.api";
import { IAuth } from "@/services/auth/auth.interface";
import {signIn, signOn} from "@/store/index.actions";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { FormProps } from "antd/lib";

const Register: FC = () => {
    const [form] = useForm();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {token} = useAppSelector((store) => store.auth);
    const {data: registerData, mutate: register, isSuccess: isRegisterSuccess, isLoading: isRegisterLoading} = useRegisterMutation();

    const { data: googleData, mutate: authGoogle, isSuccess: isGoogleSuccess, isLoading: isGoogleLoading } = useAuthGoogleMutation();


    const auth = useGoogleLogin({
        onSuccess: (response) => {
            const {access_token} = response;

            axios.get("https://www.googleapis.com/oauth2/v2/userinfo", {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            })
                .then((response) => response.data)
                .then((userInfo) => {
                    authGoogle(userInfo);
                })
                .catch((error) => console.error(error));
        },
    });

  const onFinish: FormProps<IAuth>["onFinish"] = (_values) => {
    register({
      ..._values,
      phone: _values.phone.replace(/ /g, "").substring(1),
    });
  };

  useEffect(() => {
    if (isRegisterSuccess) {
      dispatch(signOn(registerData.token));
      form.resetFields();
      navigate("/", { replace: true });
    }
  }, [isRegisterSuccess, register, registerData]);

    useEffect(() => {
        if (isGoogleSuccess) {
            dispatch(signIn(googleData.data.token));
            navigate("/", { replace: true });
        }
    }, [isGoogleSuccess, googleData, authGoogle]);

  if (token) <Navigate to={"/"} replace />;

  return (
      <Spin spinning={isGoogleLoading}>
        <div className="flex flex-col justify-center items-center gap-[50px]">
          <h2 className="font-semibold leading-[100%] text-center text-4xl">
            Dizimnen ótiw
          </h2>
          <Form
            form={form}
            onFinish={onFinish}
            className="form flex flex-col gap-y-[24px] w-[305px]"
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
                },
                {
                  min: 8,
                  message: "Parol keminde 8 belginen ibarat bolıwı kerek",
                },
              ]}
            >
              <UiInputPassword type="password" placeholder="Parolıńız" />
            </Form.Item>
            <UiButton
                loading={isRegisterLoading}
              type="primary"
              onClick={() => form.submit()}
              className="font-semibold"
            >
              Dizimnen ótiw
            </UiButton>
          </Form>

          {/* <Google /> */}

          <UiButtonGoogle className="w-[305px]" onClick={() => auth()}>
            Sign up with Google
          </UiButtonGoogle>
          <Link
            to={"/login"}
            className="font-semibold leading-[130%] text-center text-primary text-md"
          >
            Kiriw
          </Link>
        </div>
      </Spin>
  );
};

export { Register };
