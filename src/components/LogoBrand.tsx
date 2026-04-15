import React from "react";
import Logo from "@/assets/CRTLogo.png";

type LogoBrandProps = {
    title?: string;
    className?: string;
    textClassName?: string;
    imgClassName?: string;
};

const LogoBrand: React.FC<LogoBrandProps> = ({
    title = "college for research and technology",
    className = "",
    imgClassName = "",
    textClassName = ""
}) => {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <img
                src={Logo}
                alt="logo"
                className={`size-10 shrink-0 ${imgClassName}`}/>
            {
                title && (
                    <span
                        className={`text-xs font-semibold uppercase max-w-[150px] dark:text-white ${textClassName}`}>
                        {title}
                    </span>
                )
            }
        </div>
    );
};

export default LogoBrand;