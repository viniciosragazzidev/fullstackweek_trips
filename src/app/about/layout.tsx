import React, { ReactNode } from "react";

export const metadata = {
    title: "About"
}
const Layout = ({ children }: { children: ReactNode }) => {
  return(
    <div>
        {children}
    </div>
  );
};


export default Layout