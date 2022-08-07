function PageFooter(props:any) {
    const { className } = props

    return (
        <footer className={`p-8 ${className}`}>

            <hr className="mt-10 py-6" style={{ "borderColor": "rgba(255, 255, 255, 0.1)" }} />
           
        </footer>
    )
}

export default PageFooter;