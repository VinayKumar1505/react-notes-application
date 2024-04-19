import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "Title 1",
      description: "This is an example note!",
      media: "",
      date: "12/04/2024",
    },
    {
      id: nanoid(),
      title: "Title 2",
      description: "This is an example note!",
      media: "",
      date: "12/04/2024",
    },
    // {
    //   id: nanoid(),
    //   title: "Title 3",
    //   description: "This is my third note!",
    //   media: "",
    //   date: "12/04/2024",
    // },
  ]);
  
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode]= useState(false);
  const [sortBy, setSortBy] = useState(null);

  useEffect(()=>{
    const savedNotes= JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );
    // console.log(savedNotes)
    if(savedNotes){
      setNotes(savedNotes);
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem('react-notes-app-data', 
    JSON.stringify(notes)
  );
  }, [notes]);

  const addNote = (title, description, media) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: title,
      description: description,
      media: media,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const updateNote = (id, title, description, mediaLink) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          title,
          description,
          mediaLink,
        };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  const handleSort = (option) => {
    setSortBy(option);
    const sortedNotes = [...notes].sort((a, b) => {
      if (option === 'asc') {
        return new Date(a.date) - new Date(b.date);
      } else {
        return new Date(b.date) - new Date(a.date);
      }
    });
    setNotes(sortedNotes);
  };

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
    <div className="container">
      <Header 
      handleAddNote={addNote}
      handleToggleDarkMode= {setDarkMode}
      handleSort={handleSort}
      />
      <Search handleSearchText={setSearchText} />
      <NotesList
        notes={notes.filter((note) =>
          note.title.toLowerCase().includes(searchText) 
          
        )}
        handleDeleteNote={deleteNote}
        handleUpdateNote={updateNote}
      />
    </div>
    </div>
  );
};

export default App;
