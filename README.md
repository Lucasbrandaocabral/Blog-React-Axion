
# 📝 Projeto Blog Admin - React + Axios

Este é o **meu primeiro projeto usando React** com integração a uma API REST (JSONPlaceholder) utilizando **Axios**. Nele desenvolvi um pequeno sistema de gerenciamento de posts estilo "blog admin", com funcionalidades de:

- 📄 Visualização de posts
- ➕ Criação de novos posts
- 🛠️ Edição de posts
- ❌ Exclusão de posts

---

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Axios](https://axios-http.com/)
- [React Router DOM](https://reactrouter.com/)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) (API fake REST)

---

## 📸 Demonstração (Screenshots)

<img width="1906" height="945" alt="Image" src="https://github.com/user-attachments/assets/81a4a4bf-17d0-4b30-aedb-8687c0f69469" />
<img width="1917" height="936" alt="Image" src="https://github.com/user-attachments/assets/011bf8ad-2464-4721-8de7-b6f522df09d3" />
<img width="1915" height="940" alt="Image" src="https://github.com/user-attachments/assets/901af72d-ce70-4926-98b7-eb302d2dad3e" />

---

## 🧠 Aprendizados

Durante o desenvolvimento deste projeto, aprendi:

- Criar e estruturar componentes React.
- Utilizar rotas dinâmicas com `react-router-dom`.
- Integrar com APIs usando `axios`.
- Lidar com `useState`, `useEffect`, `useParams`, e `useNavigate`.
- Fazer requisições GET, POST, PUT e DELETE.
- Tratar erros e trabalhar com estado assíncrono.
- Organizar rotas e modularizar um app React.

---

## 📂 Estrutura de Pastas

src/
├── axios/               # Configuração global do Axios
│   └── config.js
├── routes/              # Páginas do sistema
│   ├── Admin.jsx
│   ├── EditPost.jsx
│   ├── Home.jsx
│   ├── NewPost.jsx
│   └── Post.jsx
├── App.jsx              # Layout principal e rotas
├── main.jsx             # Inicialização do app
└── index.css            # Estilo global