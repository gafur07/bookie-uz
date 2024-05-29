import { TypeRootState } from "@/store/store";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const useAppSelector: TypedUseSelectorHook<TypeRootState> = useSelector
export default useAppSelector