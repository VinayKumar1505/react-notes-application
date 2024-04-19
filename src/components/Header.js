import { MdAdd , MdBrightness4, MdSort} from "react-icons/md";
import AddNoteModal from "./AddNoteModel";
import { useState } from "react";

const Header = ({ handleAddNote, handleToggleDarkMode, handleSort }) => {
  const [showModal, setShowModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleSortChange = (event) => {
    const option = event.target.value;
    handleSort(option);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    handleToggleDarkMode(!darkMode);
  };

  return (
    <div className="header">
      <h1>Notes</h1>
      <button onClick={toggleModal}><MdAdd/> Add Note</button>
      <AddNoteModal isOpen={showModal} onClose={toggleModal} handleAddNote={handleAddNote} />
      <div>
        <select className="sort-select" onChange={handleSortChange}>
          <option value="">Sort by</option>
          <option value="asc">New to Old</option>
          <option value="desc">Old to New</option>
        </select>
      </div>
      <button className="dark-mode" onClick={toggleDarkMode}>
        {darkMode ? <MdBrightness4 /> : <MdBrightness4 />}
      </button>
    </div>
  );
};

export default Header;
