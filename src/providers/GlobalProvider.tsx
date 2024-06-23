import { FC, ReactNode } from 'react'
import { ReactQueryProvider } from './ReactQueryProvider/ReactQueryProvider'
import { RouterProvider } from './RouterProvider/RouterProvider'
import { ReduxProvider } from './ReduxProvider/ReduxProvider'
import { AntdProvider } from './AntdProvider/AntdProvider'
import { GoogleProvider } from './GoogleProvider/GoogleProvider'

const GlobalProvider: FC<{children: ReactNode}> = ({ children }) => {
  return (
    <ReactQueryProvider>
        <ReduxProvider>
            <RouterProvider>
              <GoogleProvider>
                <AntdProvider>
                    {children}
                </AntdProvider>
              </GoogleProvider>
            </RouterProvider>
        </ReduxProvider>
    </ReactQueryProvider>
  )
}

export { GlobalProvider }