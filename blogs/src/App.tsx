import { IoMdAddCircle } from "react-icons/io";
import Navigation from "./components/Navigation";
import PeopleToFollow from "./components/PeopleToFollow";
import TopicsList from "./components/TopicsList";
import TrendsList from "./components/TrendsList";
import { BlogProvider } from "./shared/BlogContext";
import { useState } from "react";
import type { Blog } from "./types";
import Modal from "./components/Modal";
import BlogForm from "./components/BlogForm";
import ArticleList from "./components/ArticleList";
import Footer from "./components/Footer";

const App = () => {
  const [isModalOpen, setModalopen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  const openModalNewBlog = () => {
    setEditingBlog(null);
    setModalopen(true);
  };

  const openModalForEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setModalopen(true);
  };

  return (
    <div>
      <BlogProvider>
        <Navigation />
        <div className="flex justify-center">
          <section className="mx-auto p-6">
            <div>
              <button
                onClick={openModalNewBlog}
                className="ml-[7rem] bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4 "
              >
                Add New Blog <IoMdAddCircle className="ml-[.5rem]" />
              </button>

              <ArticleList onEdit={openModalForEdit} />
              {isModalOpen && (
                <Modal onClose={() => setModalopen(false)}>
                  <BlogForm
                    existingBlog={editingBlog || undefined}
                    onClose={() => setModalopen(false)}
                  />
                </Modal>
              )}
            </div>
          </section>
          <div className="w-[30%]">
            <PeopleToFollow />
            <TrendsList />
            <TopicsList />
          </div>
        </div>
        <Footer />
      </BlogProvider>
    </div>
  );
};

export default App;
