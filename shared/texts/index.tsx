type TTitleProps = {
    text: string;
    className?: string
}

export const Title = ({text, className}: TTitleProps) => {
    return(
        <h1
            className={`
                text-2xl md:text-4xl lg:text-5xl 
                font-axi text-russian
                ${className}
            `}
        >
            {text}
        </h1>
    )
}

export const H2 = ({text, className}: TTitleProps) => {
    return(
        <h2
            className={`
               text-2xl md:text-3xl lg:text-4xl 
                text-russian font-axi font-bold
                ${className}
            `}
        >
            {text}
        </h2>
    )
}

export const Tag = ({text, className}: TTitleProps) => {
    return(
        <h1
            className={`
                text-xs font-quinta font-medium
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
                text-xs md:text-md font-quinta
                text-darkgray font-light tracking-wider
                ${className}
            `}
        >
            {text}
        </h1>
    )
}