import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNote } from "./notesSlice";

export default function App() {
  const [value, setValue] = useState();
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const notes = useSelector((state) => state.notes.notes); // access the state
  const dispatch = useDispatch();
  console.log(notes);

  const save = (e) => {
    if (value) {
      return dispatch(addNote(value));
    }
  };

  return (
    <div className="App">
      <h1>Add note </h1>
      <input onChange={handleOnChange} />
      <button onClick={save}> add </button>
      <ul>
        {notes.map((note) => {
          return <li>{note}</li>;
        })}
      </ul>
    </div>
  );
}
