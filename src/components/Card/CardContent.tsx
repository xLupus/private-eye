import { ReactNode } from "react";

export const CardContent = ({ children }: { children: ReactNode; }) => {
    return (
        <div className="flex flex-col gap-3">
            {children}
        </div>
    );
};