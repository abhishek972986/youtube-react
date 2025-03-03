import Navigation from "./components/Navigation"
import PeopleToFollow from "./components/PeopleToFollow"
import TopicsList from "./components/Topicslist"
import TrendsList from "./components/TrendsList"
import { BlogProvider } from "./shared/BlogContext"
import { IoAddCircle } from "react-icons/io5";
import { useState } from "react"
import Modal from "./components/Modal"
import Blogform from "./components/Blogform"
import Articlelist from "./components/Articlelist"

const App = () => {
  const [isediting, setIsEditing] = useState(false);
  const [modalopen, setModalOpen] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
    setModalOpen(true); // Ensure modal opens when editing
  };

  const openModal = () => {
    setIsEditing(false);
    setModalOpen(true);
  };

  const closeModal = () => {
    setIsEditing(false);
    setModalOpen(false);
  };

  return (
    <BlogProvider>  
      <Navigation/>
      <div className="flex p-5 ">
        <div className="w-[70%] flex flex-col items-center p-5 text-center">
          <button 
            className="bg-blue-950 text-white text-3xl p-1 rounded-2xl flex items-center text-center justify-center w-[50%] hover:bg-blue-900 cursor-pointer"
            onClick={openModal}
          >
            Add Blog <IoAddCircle className="text-white text-3xl text-center "/>
          </button>

          <Articlelist onEdit={handleEdit} />
        </div>

        {(modalopen || isediting) && 
          <Modal onClose={closeModal}>
            <Blogform onClose={closeModal}/>
          </Modal>
        }

        <div className="flex flex-col w-[30%] ">
          <PeopleToFollow/>
          <TopicsList/>
          <TrendsList/>
        </div>
      </div>
    </BlogProvider>
  );
};

export default App;
