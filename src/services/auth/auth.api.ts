import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchGetMe, fetchLogin, fetchRegister } from "./auth.services";
import { message } from "antd";
import { IError } from "@/services/index.interface";
import { useAppDispatch } from "@/hooks";
import { signOut } from "@/store/index.actions";

const useGetMeQuery = () => {
  const dispatch = useAppDispatch();
  const query = useQuery({
    queryFn: fetchGetMe,
    queryKey: ["auth"],
    onError: (error: IError) => {
      message.error(
        error.response.data.data.message || error.response.data.data.error
      );
      dispatch(signOut());
    },
  });

  return query;
};

const useRegisterMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: fetchRegister,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["auth"],
      });
      message.success("Siz dizimnen ottiniz!");
    },
    onError: (error: IError) => {
      if (error.response.status === 500) {
        message.error("Akkaunt maǵlıwmatları qáte kiritildi");
      } else if (error.response.status === 401) {
        message.error("Paydalaniwshi dizimde bar");
      } else if (error.response.status === 422) {
        message.error("Login 3 haripten kop boliwi kerek!");
      }
    },
  });
  return mutation;
};

const useLoginMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: fetchLogin,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["auth"],
      });
      message.success("Siz dizimge kirdin'iz!");
    },
    onError: (error: IError) => {
			message.error(error.response.data.data.error)
      if (error.response.status === 500) {
        message.error("Akkaunt maǵlıwmatları qáte kiritildi");
      }
    },
  });
  return mutation;
};

export { useGetMeQuery, useLoginMutation, useRegisterMutation };
