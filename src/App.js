import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNote, deleteLast } from "./notesSlice";
import { Input, Button } from "@mui/material";
import { Container, Wrapper, Typography } from "./AppStyles";

export default function App() {
  const [value, setValue] = useState();
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const notes = useSelector((state) => state.notes.notes); // access the state
  const dispatch = useDispatch();

  const save = (e) => {
    if (value) {
      return dispatch(addNote(value));
    }
  };

  return (
    <Container>
      <Wrapper>
        <h1>Add note </h1>
        <Input onChange={handleOnChange} />
        <Button variant="contained" onClick={save}>
          add
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={() => dispatch(deleteLast())}
        >
          delete
        </Button>
      </Wrapper>
      <ul>
        {notes.map((note) => {
          return <li>{note}</li>;
        })}
      </ul>
    </Container>
  );
}
