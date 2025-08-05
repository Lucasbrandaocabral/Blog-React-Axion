import { useState } from 'react'
import blogFetch from '../axios/config'
import { useNavigate } from 'react-router-dom'

import "./Newpost.css"

const NewPost = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState();
    const [body, setBody] = useState();

    const createPost = async (e) => {
        e.preventDefault();
        const post = {
            title,
            body,
            userId: 1,
        };
        await blogFetch.post("/posts", {
            body: post,
        })
    };
  return (
    <div className='new-post'>
        <h2>Criar novo post:</h2>
        <form onSubmit={(e) => createPost(e)} >
            <div className="form-control">
                <label htmlFor="title">Título:</label>
                <input 
                type="text" 
                id="title" 
                name="title" 
                placeholder='Digite o Títolo' 
                onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label htmlFor="body">Conteúdo</label>
                <textarea 
                name="body" 
                id="bady" 
                placeholder='Digite o conteúdo'
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
            </div>
            <input type="submit" value="Criar post" className='btn'/>
        </form>
    </div>
  )
}

export default NewPost