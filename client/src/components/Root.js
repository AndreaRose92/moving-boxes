import { NavButton } from "./Tools"

export const Root = ({rooms}) => {
    
    const roomButtons = rooms.map(room => <NavButton key={room} path={room} text={room}/>)

    return (
        <div>
            {roomButtons}
        </div>
    )
}