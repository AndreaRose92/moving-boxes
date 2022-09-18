import {useNavigate} from "react-router-dom"

export const NavButton = ({path="/", text="home"}) => {
    const navigate = useNavigate()
    return <button onClick={()=>navigate(path)}>{text}</button>
}