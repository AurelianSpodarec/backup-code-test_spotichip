import { Link } from "react-router-dom";

interface Props {
    title?: string;
    titleLink?: string;
    description?: string;
    link?: string;
    linkText?: string;
    children?: any;
    className?: string;
    contentClassName?: string;
}

function Shelf(props:Props) {
    const { title, titleLink, description, link, linkText, children, className, contentClassName } = props;

    return (
        <div className={className}>

            {title &&
                <header className="px-8 pb-6 pt-10">
                <div className="flex justify-between">

                    <div>
                        <h2 className="text-white text-2xl font-bold">
                            {titleLink ? <Link to={titleLink}>{title}</Link>
                            : 
                            <>{title}</>
                            }
                        </h2>
                        {description && <span className="text-white">{description}</span>}
                    </div>
    
                    {link && 
                        <Link className="text-white" to={link}>
                            {linkText}
                        </Link>
                    }

                </div>
                </header>
            }
            
            <section className={`grid gap-6 grid-cols-2 lg:grid-cols-6 p-8 ${contentClassName} `}>
                {children}
            </section>
        </div>
    )
}

export default Shelf;