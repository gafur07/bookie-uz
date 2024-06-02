import { ConfigProvider } from "antd"
import { FC, ReactNode } from "react"

const AntdProvider: FC<{ children: ReactNode }> = ({ children }) => (
    <ConfigProvider
        theme={{
            token:{
                colorPrimary: "#2d71ae"
            }
        }}
    >
        {children}
    </ConfigProvider>
)

export { AntdProvider }