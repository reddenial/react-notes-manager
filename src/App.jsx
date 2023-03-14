import s from './style.module.css';

import { NotesAPI } from "api/note-api";
import { Header } from "components/Header/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { setNoteList } from "store/note/note-slice";

export function App() {

  const dispatch = useDispatch();

  async function fetchAllNotes(){
    const noteList = await NotesAPI.fetchAll()
    dispatch(setNoteList(noteList))
  }

  useEffect(()=>{
    fetchAllNotes();
  }, [])

  return (
    <div className="container-fluid">
      <Header />
      <div className={s.container}>
        <Outlet />
      </div>
    </div>
  );
}
