type TTitleProps = {
    text: string;
    className?: string
}

export const Title = ({text, className}: TTitleProps) => {
    return(
        <h1
            className={`
                text-5xl font-axi font-bold
                text-russian
                ${className}
            `}
        >
            {text}
        </h1>
    )
}

export const Tag = ({text, className}: TTitleProps) => {
    return(
        <h1
            className={`
                text-xs font-axi
                text-flamingo uppercase
                ${className}
            `}
        >
            {text}
        </h1>
    )
}

export const Description = ({text, className}: TTitleProps) => {
    return(
        <h1
            className={`
                text-md font-axi
                text-darkgray
                ${className}
            `}
        >
            {text}
        </h1>
    )
}