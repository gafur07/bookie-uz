import { axiosClassic } from "@/api";
import { ISupport } from "./support.interface";

const fetchPostSupport = async(props: ISupport):Promise<ISupport> => {
    const response = await axiosClassic.post('/supports', props)
    return response.data.data
}

export { fetchPostSupport }

