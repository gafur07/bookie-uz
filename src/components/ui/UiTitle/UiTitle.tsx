import { FC, ReactNode } from "react";

const UiTitle: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <h1 
      className="opacity-70 font-semibold text-[48px] 
      first-letter:uppercase max-[820px]:text-[34px] max-[600px]:text-[28px]">
      {children}
    </h1>
  );
};

export { UiTitle };
