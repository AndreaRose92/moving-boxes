import { useContext, useState } from "react"
import { deleteRequest } from "./tools/FetchTypes"
import { NavButton, UserContext } from "./tools/Hooks"

export const BoxForm = ({setBoxes}) => {

    const {user} = useContext(UserContext)

    const [newBoxes, setNewBoxes] = useState([])

    const [boxData, setBoxData] = useState({
        room: '',
        contents: '',
        user_id: user.id
    })

    const handleForm = e => {
        const formName = e.target.name
        let formData = e.target.value
        setBoxData({
            ...boxData,
            [formName]: formData
        })
    }

    const submitBox = e => {
        e.preventDefault()
        // console.log(boxData)
        fetch('/boxes',{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(boxData)
        }).then(r=>{
            if (r.ok) {
                r.json().then(newBox=>{setBoxes(boxes=>[...boxes, newBox]); setNewBoxes(boxes=>[...boxes, newBox])})
            } else {
                r.json().then(error=>console.log(error))
            }
        })
    }

    

    const showNexBoxes = newBoxes.map(box=>{
    const deleteBox = box => {
        deleteRequest(`/boxes/${box}`)
        setNewBoxes(boxes=>boxes.filter(b=>b.id!==box))
    }
    return <li key={box.id} onClick={()=>deleteBox(box.id)} >{box.room}, {box.number}, {box.contents}</li>
    })

    return (
        <div>
            <form onSubmit={submitBox}>
                <input type='text' name='room' placeholder="room" onChange={handleForm}/><br/>
                <textarea name='contents' placeholder="contents" onChange={handleForm}/><br/>
                <button type='submit'>Submit</button>
            </form>
            <NavButton />
            <ul>
                {showNexBoxes}
            </ul>
        </div>
    )
}