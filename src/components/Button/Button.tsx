function Button(props?:any) {

    const { children, className } = props

    return (
        <button className={className}>
            { children }
        </button>
    )
}

export default Button;