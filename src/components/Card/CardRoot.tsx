import { ReactNode } from "react";

export const CardRoot = ({ children }: { children: ReactNode; }) => {
    return (
        <div className="
            grid grid-cols-1 max-w-md shadow-xl bg-white h-full
            md:max-w-full md:grid-cols-3
            xl:grid-cols-1
        ">
            {children}
        </div>
    );
};