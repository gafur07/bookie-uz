import { FC, useEffect } from "react";
import { Form, message } from "antd";
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
import { useRegisterMutation } from "@/services/auth/auth.api";
import { IAuth } from "@/services/auth/auth.interface";
import { signOn } from "@/store/index.actions";
import { axiosClassic } from "@/api";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { FormProps } from "antd/lib";

const Register: FC = () => {
  const [form] = useForm();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((store) => store.auth);
  const { data, mutate: register, isSuccess } = useRegisterMutation();

  const auth = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      const res = await axiosClassic.get("/v2/auth/google/redirect");
      authCallback(res.data.url, codeResponse.code);
    },
    onError: (errorResponse) => {
      message.error(errorResponse.error);
    },
  });
  const authCallback = async (url: string, code: string) => {
    try {
		const res = await axios.get(url, {
			headers: {
				Authorization: `Bearer ${code}`,
				Accept: "application/json",
			},
		});
		console.log(res);
	} catch (error) {
		console.log(error);
	}
  };

  const onFinish: FormProps<IAuth>["onFinish"] = (_values) => {
    register({
      ..._values,
      phone: _values.phone.replace(/ /g, "").substring(1),
    });
  };
  useEffect(() => {
    if (isSuccess) {
      dispatch(signOn(data.token));
      form.resetFields();
      navigate("/", { replace: true });
    }
  }, [isSuccess, register, data]);

  if (token) <Navigate to={"/"} replace />;

  return (
    <div className="flex flex-col justify-center items-center gap-[50px]">
      <h2 className="font-semibold leading-[100%] text-center text-4xl">
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
  );
};

export { Register };
