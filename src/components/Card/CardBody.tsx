import { ReactNode } from "react";

export const CardBody = ({ children }: { children: ReactNode; }) => {
    return (
        <div className="flex flex-col col-span-2 gap-2 p-4 text-justify">
            {children}
        </div>
    );
};