import { Navigate, useNavigate } from "react-router-dom";
import arrow from "../assets/arrow.svg";
import pencil from "../assets/pencil.svg";
import bin from "../assets/bin.svg";
import plus from "../assets/plus.svg";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setAddDataAction, setDataAction, setUpdateDataAction } from "../utils";
import { setDeleteDataAction } from "../utils";






export default function Post() {
    const navigate = useNavigate();
    const blog = useSelector((state) => state.data.selectedBlog);
    const id = useSelector((state) => state.auth.userId);
    const [title, setTitle] = useState(blog.title);
    const [body, setBody] = useState(blog.body);



    const updateHandler = async() => {
    const dataObj ={
        id: blog.id,
        title: title,
        body: body,
        userId: id,
    };
    await fetch(`https://jsonplaceholder.typicode.com/posts/${blog.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: blog.id,
                title: title,
                body: body,
                userId: id,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));


    setUpdateDataAction(dataObj)
    navigate('/posts');
    }

    const deleteHandler = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${blog.id}`, {
            method: 'DELETE',
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
        
        
        setDeleteDataAction(blog.id);
        navigate('/posts');
    }

    const postHandler = async() => {
        const dataObj ={
            id: blog.id,
            title: title,
            body: body,
            userId: id,
        };
        await fetch(`https://jsonplaceholder.typicode.com/posts`, {
                method: 'POST',
                body: JSON.stringify({
                    dataObj
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((json) => console.log(json));
            
        setAddDataAction(dataObj);
        navigate('/posts');
    }


    return (
        
    <div className="md:w-1/2">
        <div className="w-full">
        <div className="w-full flex justify-between">
        <div className=" flex gap-5 items-center">
            <div className="cursor-pointer flex items-center justify-center rounded-full p-2 w-12 h-12 bg-primary" onClick={() => navigate(-1)}>
                <img src={arrow}></img>
            </div>
            <span className="sr-only">Go Back</span>
            <h1 className="text-xl font-bold text-black">Posts</h1>
        </div>
        <button onClick={postHandler} className="bg-blue-500 hover:bg-blue-700 text-white flex  items-center justify-center font-bold gap-1 py-0.5 px-2 rounded" ><img src={plus}></img>New Post</button>
        </div>
        <section className="mt-4">
            <h1 className="text-black font-bold text-md mb-1">Title</h1>
            <textarea rows={2} onChange={(e)=>setTitle(e.target.value)} value={title ? title:""} className="w-full text-black resize-none text-2xl font-bold p-4 bg-primary rounded-sm"></textarea>
            <h1 className="text-black font-bold text-md mb-1">Detail</h1>
            <textarea rows={5} onChange={(e)=>setBody(e.target.value)} value={body ? body:""}  className="w-full resize-none text-md font-bold p-4 border-1 border-primary bg-primary rounded-sm"></textarea>
        <div className="flex mt-6 justify-end gap-4">
            <button onClick={updateHandler} className="bg-blue-500 hover:bg-blue-700 flex gap-1 text-white font-bold py-2 px-4 rounded" ><img src={pencil}></img>Update</button>
            <button onClick={deleteHandler} className="bg-red-500 hover:bg-red-700 flex gap-1 text-white font-bold py-2 px-4 rounded" ><img src={bin}></img>Delete</button>
        </div>
        </section>
        </div>
    </div>

    )
}
