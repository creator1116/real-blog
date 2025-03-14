import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { db } from "./config/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import "tailwindcss/tailwind.css";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollection = await getDocs(collection(db, "posts"));
      setPosts(postsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Anonymous Forum</h1>
      <Link to="/create" className="bg-blue-500 text-white px-4 py-2 rounded">New Post</Link>
      <div className="mt-4">
        {posts.map(post => (
          <div key={post.id} className="border p-4 mb-2 rounded">
            <Link to={`/post/${post.id}`} className="text-lg font-bold">{post.title}</Link>
            <p className="text-gray-600">{post.content.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && content) {
      await addDoc(collection(db, "posts"), { title, content, timestamp: new Date() });
      setTitle("");
      setContent("");
      window.location.href = "/";
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create a Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} className="w-full border p-2" />
        <textarea placeholder="Content" value={content} onChange={e => setContent(e.target.value)} className="w-full border p-2 h-32"></textarea>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </Router>
  );
};

export default App;
