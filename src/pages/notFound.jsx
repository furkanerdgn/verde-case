import { useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom"

export default function NotFound() {

    const navigate = useNavigate();

    /*useEffect(() => {
        setTimeout(() => {
           // navigate('/');
        }, 3000);
    }, [navigate])
        */
       // we can use for 3 sec to turn home page

    return (
        <div className="bg-slate-300">

<div class="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
<div class="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
<div class="border-t border-gray-200 text-center pt-8">
<h1 class="text-9xl font-bold text-purple-400">404</h1>
<h1 class="text-6xl py-8"><span className="font-medium">Oops!</span> Page not found</h1>
<p class="text-2xl pb-8 px-12">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
<button onClick={()=>{navigate("/")}} class="bg-purple-400 text-white font-bold py-2 px-4 rounded">Go to homepage</button>
</div>
</div>
</div>
        </div>
    )
}
