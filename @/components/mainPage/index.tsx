import Menu from './menu'
import { Outlet } from "@remix-run/react"
export default function mainPage() {
    return (
        <div className='grid grid-flow-col auto-cols-max gap-2'>
            <Menu/>
            <Outlet/>
        </div>
    )
}