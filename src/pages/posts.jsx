import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { setDataAction } from '../utils'
import { useState } from 'react'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom';
import { setSelectedBlogAction } from '../utils';



export default function Home() {

    const userId = useSelector((state) => state.auth.userId);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const data = useSelector((state) => state.data.data);

    const clickHandler = (item) => {
        return () => {
            setSelectedBlogAction(item);
            console.log(item);
        }
    }
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const value = await response.json();
            setDataAction(value);
          } catch (error) {
            setError(error);
          } finally {
            setLoading(false);
          }
        }
    
        fetchData();
      }, []);

      
    return (
        <>
        {error ? <div>{error.message}</div> :null}
        {loading ? <Loading/> : 
        <section>
            <ul className="p-4 w-full grid grid-cols-1 gap-y-12 md:grid-cols-3 justify-center ">

            {data.map((item) => (
                <li key={item.id} onClick={clickHandler(item)} className="w-full h-full max-w-xs p-4 rounded-sm ">
                <Link to={`/posts/${item.id}`}>                                             
                        <h1 className="text-lg  mb-2 text-black font-bold">{item.title}</h1>               
                        <p className="text-sm line-clamp-4">{item.body}</p>                                             
                </Link>
                </li>
            ))}
            </ul>
        </section>


        }
        
        </>
    )
}
