import React, { useState, useEffect, ChangeEventHandler } from "react";
import NoteItem from "./components/NoteItem";
import axios from "axios";
// import AppButton from "./components/AppButton";

type noteType = {
  
    id: string;
    title: string; 
    description: string;
};

const App = () => {

  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [count, setCount] = useState(0);
  const [noteToView, seNoteToView] = useState<noteType>();
  const [notes, setNotes] = useState<noteType[]>([]);
  const [values, setValues] = useState({
    title:"",
    description:""
  });

  const [selectedNoteId, setSelectedNoteId] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = ({target}) => {
    const {name, value} = target;
    setValues({...values, [name]: value});
  };

  //runs depends on the function or the change of "[]"
  useEffect(() => {
    //call the api and fetch notes
  const fetchNotes = async () => {
    const { data } = await axios("http://localhost:3000/note")
    setNotes(data.notes)
  };
    fetchNotes();

  }, []);


  return (
  <div className="max-w-3xl mx-auto bg-white rounded my-5">
    <form 
    className="space-y-5 shadow-md p-5"
    onSubmit={async (event) => {
      event.preventDefault();
      if (selectedNoteId) {
        //update 
        const { data } = await axios.patch('http://localhost:3000/note/' + selectedNoteId, 
        {
          title: values.title,
          description: values.description
        }
        );
           // console.log(data.note);
           const updatedNotes = notes.map((note) => {
            if (note.id === selectedNoteId) {
              note.title = data.note.title;
              note.description = data.note.description;
            }
            return note;
           });
           
           setNotes([...updatedNotes]);
           setValues({title:"", description:""});
           return;
        
      }

      const { data } = await axios.post('http://localhost:3000/note/create', {
          title: values.title,
          description: values.description
        }
        );

      setNotes([ data.note, ...notes]);
      setValues({title:"", description:""});
      
    }}>
      {/* <div>
        <span>{count}</span>
        <button type="button" onClick={() => setCount(count + 1)}>click</button>
      </div> */}
      <h1 className="font-bold text-3xl text-center">Note Applicaiton</h1>
      <div onSubmit={() => {
        console.log(values);
        }}>
        {values.title.trim() && values.title.length < 3 ? <p className="text-red-500">Title is too short</p>: null}        
        <input 
        className="w-full border-b-2 border-black p-3 resize-none outline-none" 
        placeholder="title"
        value={values.title}
        onChange={handleChange}
        name="title"
        ></input>
        <textarea 
        className="w-full border-b-2 border-black p-3 resize-none outline-none h-36" 
        placeholder="description"
        value={values.description}
        onChange={handleChange}
        name="description"
        ></textarea>
      </div>
      <div className="text-right">
         {/* <AppButton name="Submit" type="regular" onChange={(event) => {console.log(event);}}/> */}
         <button 
         className="bg-blue-500 text-white font-semibold p-2 rounded-md" 
         >Submit</button>
      </div> 
    </form>

    {/*note items */}
    {notes.map(( note ) => {
      return  <NoteItem 
                key={note.id} 
                title={note.title} 
                onEditClick={() => {
                  setSelectedNoteId(note.id);
                  setValues({title: note.title, description: note.description});
                }}

                onDeleteClick={ async () => {
                  const result = confirm("Are you sure?");
                  // console.log(confirmation);
                  if (result) {
                    //delete the selected note
                  await axios.delete("http://localhost:3000/note/" + note.id);
                    
                  // const updatedNotes = notes.filter(({id}) => {
                  //   if (id === note.id) { return note; }
                  //  });

                  // better way of doing above code
                   const updatedNotes = notes.filter(({id}) => id !== note.id );

                   setNotes([...updatedNotes]);

                  }
                }}

                onViewClick={() => {
                  if(noteToView) {
                    seNoteToView(undefined);
                  } else {
                    seNoteToView(note);
                  }
                }}

                description={noteToView?.id === note.id ? noteToView?.description : ""}
                />
    })}
    
  </div>



  );
};

export default App;