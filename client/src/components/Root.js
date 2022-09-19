import { useContext, useEffect } from "react"
import { getRequest } from "./tools/FetchTypes"
import { NavButton, UserContext } from "./tools/Hooks"

export const Root = ({rooms}) => {
    
    const {setUser} = useContext(UserContext)

    useEffect(()=>{getRequest('/me', setUser)}, [setUser])

    const roomButtons = rooms.map(room => <NavButton key={room} path={room} text={room}/>)

    return (
        <div>
            {roomButtons}
        </div>
    )
}