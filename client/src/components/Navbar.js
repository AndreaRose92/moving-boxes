import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { Logout, UserContext } from "./tools/Hooks"

export const Navbar = () => {

    const {user} = useContext(UserContext)

    if (!user) {
        return (
            <div>
                <NavLink to='login'>Login</NavLink><> </>
                <NavLink to='signup'>Signup</NavLink><> </>
            </div>
        )
    } else {
        return (
            <div>
                <NavLink to='new-box'>New Box</NavLink>
                <Logout />
            </div>
        )
    }
}