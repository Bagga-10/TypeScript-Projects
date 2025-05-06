import { createContext, useState, useContext, useEffect } from "react";
import type { Blog } from "../types";

interface BlogContextType {
  blogs: Blog[];
  addBlog: (blog: Blog) => void;
  updateBlog: (blog: Blog) => void;
  deleteBlog: (id: number) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [blogs, setBlogs] = useState<Blog[]>(() => {
    const stored = localStorage.getItem("blogs");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  const addBlog = (blog: Blog) => {
    setBlogs((prev) => [...prev, blog]);
  };

  const updateBlog = (updatedBlog: Blog) => {
    setBlogs((prev) =>
      prev.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog))
    );
  };

  const deleteBlog = (id: number) => {
    setBlogs((prev) => prev.filter((blog) => blog.id !== id));
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogs = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlogs must be used within a BlogProvider");
  }
  return context;
};
