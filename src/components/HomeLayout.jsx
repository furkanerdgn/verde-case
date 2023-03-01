import NavBar from "./NavBar"
import { Outlet } from "react-router-dom"
export default function HomeLayout() {
    return (
        <>
            <div className="bg-primary p-8 mx-auto">

            <NavBar/>
            <section className="p-4 flex mt-4 shadow-sm bg-white justify-center items-center rounded-sm">
                <Outlet/>
            </section>

            </div>
        </>
    )
}