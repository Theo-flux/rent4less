import React from "react";

type TGeneralProps = {
    children: React.ReactNode;
    className?: string;
};

type TButtonProps = {
    text: string;
    className?: string;
    handler?: (event: React.MouseEvent<HTMLButtonElement>) => void
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

export const Button = ({text, className}: TButtonProps) => {
    return(
        <button className={`${className}`}>
            {text}
        </button>
    )
}