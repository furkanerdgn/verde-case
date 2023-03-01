import logo from '../assets/logo.svg'
import ring from '../assets/ring.svg'
import apps from '../assets/apps.svg'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

export default function NavBar() {

    const [not, setNot] = useState(0)
    const data = useSelector((state) => state.data.data);

    useEffect(() => {
        setNot(data.length)
    }, [data])
    

    return (
        <>
            <nav>
                <ul className='p-4 flex shadow-sm bg-white justify-between items-center rounded-sm'>
                    
                    <li className="flex items-center gap-4">
                        <img src={logo}>
                        </img>
                        <h2 className='text-2xl hidden md:block text-black font-bold'>Arbit Blog</h2>
                    </li>                  
                    <li className='flex items-center gap-5'>
                    <NavLink to='/posts'>
                    <div className='cursor-pointer flex flex-col relative h-full'>
                    <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs bg-green-200 border-2 border-white rounded-full -top-3 -right-4">
                    {not >99 ?"99+":not}
                    <span class="sr-only">posts</span>
                    </div>
                    <div className='font-medium z-10'>Posts</div> 
                    </div>
                    </NavLink>
                    <NavLink to="" >
                        <img src={ring}></img>
                        </NavLink>
                    <NavLink to="">
                        <img src={apps}></img>
                        </NavLink>
                    <NavLink to="">
                        <img className='w-10 rounded-full' src="https://pbs.twimg.com/profile_images/1612934156077481984/7i18jFAf_400x400.jpg"></img>
                        </NavLink>
                    </li>
                </ul>
            </nav>            
        </>
    )
}