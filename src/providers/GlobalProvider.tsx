import { FC, ReactNode } from 'react'
import { ReactQueryProvider } from './ReactQueryProvider/ReactQueryProvider'
import { RouterProvider } from './RouterProvider/RouterProvider'
import { ReduxProvider } from './ReduxProvider/ReduxProvider'
import { AntdProvider } from './AntdProvider/AntdProvider'

const GlobalProvider: FC<{children: ReactNode}> = ({ children }) => {
  return (
    <ReactQueryProvider>
        <ReduxProvider>
            <RouterProvider>
                <AntdProvider>
                    {children}
                </AntdProvider>
            </RouterProvider>
        </ReduxProvider>
    </ReactQueryProvider>
  )
}

export { GlobalProvider }