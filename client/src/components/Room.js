import { useParams } from "react-router-dom"
import { NavButton } from "./tools/Hooks"
import { deleteRequest } from "./tools/FetchTypes"
import { useState } from "react"

export const Room = ({boxes}) => {

    const params = useParams()

    const [roomBoxes, setRoomBoxes] = useState(boxes.filter(box => box.room === params.room))

    const deleteBox = box => {
        deleteRequest(`/boxes/${box}`)
        setRoomBoxes(boxes => boxes.filter(b => b.id !== box))
    }

    const renderBoxes = roomBoxes.map(box => <h4 key={box.id} onClick={()=>deleteBox(box.id)}>{box.number}: {box.contents}</h4>)

    return (
        <div>
            <NavButton />
            {renderBoxes}
        </div>
    )

}