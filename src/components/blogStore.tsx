import { create } from "zustand";

interface Blog {
  id: number;
  author: string;
  title: string;
  image: string;
  description: string;
}

interface BlogStore {
  blogs: Blog[];
  editblog: Blog[];
  addBlog: (blog: Blog) => void;
  updateBlog: (blog: Blog) => void;
  deleteBlog: (id: number) => void;
  setEditBlog: (blog: Blog) => void;
}

export const useBlogStore = create<BlogStore>((set) => ({
  blogs: [],
  editblog: [],

  addBlog: (blog) => set((state) => ({
    blogs: [...state.blogs, blog],
  })),

  updateBlog: (updatedBlog) => set((state) => ({
    blogs: state.blogs.map((blog) =>
      blog.id === updatedBlog.id ? updatedBlog : blog
    ),
  })),

  deleteBlog: (id) => set((state) => ({
    blogs: state.blogs.filter((blog) => blog.id !== id),
  })),

  setEditBlog: (blog) => set({ editblog: [blog] }),
}));
