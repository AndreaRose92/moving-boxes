import { useParams } from "react-router-dom"

export const Room = ({boxes}) => {

    const params = useParams()

    const filteredBoxes = boxes.filter(box => box.room === params.room)

    const renderBoxes = filteredBoxes.map(box => <h4 key={box.id}>{box.number}: {box.contents}</h4>)

    return (
        <div>
            {renderBoxes}
        </div>
    )

}