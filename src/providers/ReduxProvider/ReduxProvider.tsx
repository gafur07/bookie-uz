import { store, persistor } from "@/store";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

const ReduxProvider: FC<{children: ReactNode}> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
				{children}
			</PersistGate>
    </Provider>
  );
};

export { ReduxProvider };
