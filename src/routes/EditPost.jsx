import { useState, useEffect } from 'react';
import blogFetch from '../axios/config';
import { useParams, useNavigate } from 'react-router-dom';

const EditPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    useEffect(() => {
        const getPost = async () => {
            try {
                const response = await blogFetch.get(`/posts/${id}`);
                console.log("Post carregado:", response.data);
                const data = response.data;
                setTitle(data.title);
                setBody(data.body);
            } catch (error) {
                console.error("Erro ao buscar post:", error);
            }
        };
        getPost();
    }, [id]);

    const updatePost = async (e) => {
        e.preventDefault();

        const post = { title, body };

        try {
            await blogFetch.put(`/posts/${id}`, post);
            alert("Post editado (simulado com JSONPlaceholder)");
            navigate("/admin");
        } catch (error) {
            console.error("Erro ao editar post:", error);
        }
    };

    return (
        <div className='new-post'>
            <h2>Editando: {title}</h2>
            <form onSubmit={updatePost}>
                <div className="form-control">
                    <label htmlFor="title">Título:</label>
                    <input 
                        type="text" 
                        id="title" 
                        name="title" 
                        placeholder='Digite o Título' 
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="body">Conteúdo</label>
                    <textarea 
                        name="body" 
                        id="body" 
                        placeholder='Digite o conteúdo'
                        onChange={(e) => setBody(e.target.value)}
                        value={body}
                    ></textarea>
                </div>
                <input type="submit" value="Editar post" className='btn'/>
            </form>
        </div>
    );
};

export default EditPost;
