import { useEffect, useState } from "react";
import { useBlogStore } from "./blogStore"; // Import Zustand store

const BlogForm = ({ onClose }: { onClose: () => void }) => {
  const { addBlog, editblog } = useBlogStore();
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);

  useEffect(() => {
    if (editblog.length !== 0) {
      const blog = editblog[0]; // Assuming only one blog is being edited at a time
      setAuthor(blog.author);
      setTitle(blog.title);
      setImage(blog.image);
      setDescription(blog.description);
      setIsEditing(true);
      setEditId(blog.id);
    }
  }, [editblog]);

  const handleSubmit = () => {
    if (isEditing && editId !== null) {
      // Update the existing blog
      addBlog({
        id: editId,
        author,
        title,
        image,
        description,
      });
    } else {
      // Add new blog
      addBlog({
        id: Date.now(),
        author,
        title,
        image,
        description,
      });
    }

    // Reset form fields
    setAuthor("");
    setTitle("");
    setImage("");
    setDescription("");
    setIsEditing(false);
    setEditId(null);

    onClose();
  };

  return (
    <div className="flex flex-col gap-5 items-center justify-center p-5">
      <div className="flex justify-around w-full gap-1">
        <h1 className="text-3xl font-extrabold text-center">Author:</h1>
        <input
          className="border border-gray-400 text-center rounded-2xl p-2"
          type="text"
          placeholder="Author name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div className="flex justify-around gap-1 w-full">
        <h1 className="text-3xl font-extrabold text-center">Title:</h1>
        <input
          className="border border-gray-400 text-center rounded-2xl p-2"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="flex justify-around gap-1 w-full">
        <h1 className="text-3xl font-extrabold text-center">Image:</h1>
        <input
          className="border border-gray-400 text-center rounded-2xl p-2"
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      <div className="flex justify-around gap-1 w-full">
        <h1 className="text-3xl font-extrabold text-center">Description:</h1>
        <textarea
          className="border border-gray-400 text-center rounded-2xl p-2 w-full"
          placeholder="Write description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button
        className="bg-blue-600 cursor-pointer p-3 rounded-2xl text-amber-50 w-[90%]"
        onClick={handleSubmit}
      >
        {isEditing ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default BlogForm;
