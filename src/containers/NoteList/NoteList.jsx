import { NotesAPI } from "api/note-api";
import { TextCard } from "components/TextCard/TextCard";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteNote } from "store/note/note-slice";
import s from "./style.module.css";

export function NoteList({ noteList }){

    const navigate = useNavigate();

    const dispatch = useDispatch();

    function deleteNote_(note){
        if(window.confirm('Supprimer la note ?')){
            NotesAPI.deleteById(note.id);
            dispatch(deleteNote(note));
        }
    }

    return (
        <div className={`row justify-content-center ${s.cards_container}`}>
            {noteList.map(note => {
                return (
                    <div key={note.id} className={s.card_container}>
                        <TextCard 
                            title={note.title}
                            subtitle={note.subtitle}
                            content={note.content}
                            onClick={() => navigate("/note/" + note.id)}
                            onClickTrash={() => deleteNote_(note)}
                        />
                    </div>
                )
            })}
        </div>
    )
}