import { useParams } from "react-router-dom";

function ShowGenre() {

    const { id } = useParams();
    console.log(id)
    return (
        <div>
            Show
        </div>
    )
}

export default ShowGenre;