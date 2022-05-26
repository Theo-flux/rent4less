import React from "react";

type TGeneralProps = {
    children: React.ReactNode;
    className?: string;
};

type TButtonProps = {
    text: string;
    variant: string;
    className?: string;
    onClick?: () => void;
};

export const Section = ({ children, className}: TGeneralProps) => {
    return(
        <section className={` ${className}`}>
            {children}
        </section>
    )
};

export const Div = ({ children, className }: TGeneralProps) => {
    return(
        <div className={`w-11/12 mx-auto max-w-5xl ${className}`}>
            {children}
        </div>
    )
};

export const Nav = ({ children, className }: TGeneralProps) => {
    return(
        <nav className={`w-11/12 mx-auto max-w-6xl ${className}`}>
            {children}
        </nav>
    )
};

export const Button = ({text, className, onClick, variant}: TButtonProps) => {
    return(
        <button
            onClick={onClick} 
            className={`
                px-4 py-2 transition-all duration-500 ease-in-out
                font-quinta font-bold text-xs uppercase
                ${
                    variant === "borderd" &&
                        `bg-transparent outline outline-flamingo text-flamingo
                         hover:bg-flamingo hover:text-white
                        `
                }
                ${
                    variant === "filled" &&
                        `bg-flamingo text-white
                         hover:bg-transparent hover:text-flamingo
                        `
                }
                ${
                    variant === "unfilled" &&
                        `bg-transparent text-flamingo 
                        hover:ring-1 hover:ring-flamingo
                        hover:ring-offset-0
                        `
                }
                ${className}
            `}
            >
            {text}
        </button>
    )
}