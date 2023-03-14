import { NotesAPI } from 'api/note-api';
import { NoteForm } from 'components/NoteForm/NoteForm';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteNote, updateNote } from 'store/note/note-slice';
import s from './style.module.css';

export function Note(props){

    const [isEditable, setIsEditable] = useState(false);

    const dispatch = useDispatch();

    const { noteId } = useParams();

    const note = useSelector((store) => store.NOTE.noteList).find((note) => note.id === noteId)

    const navigate = useNavigate();

    async function submit(formValues){
        const updatedNote = await NotesAPI.update({ ...formValues, id : note.id});

        dispatch(updateNote(updatedNote));

        setIsEditable(false);
    }

    function deleteNote_(note) {
        if (window.confirm('Supprimer la note ?')) {
            NotesAPI.deleteById(note.id);
            dispatch(deleteNote(note));
            navigate('/');
        }
    }

    return (
        <>
            { note &&
                <NoteForm 
                    title={isEditable ? "Edit note" : note.title}
                    isEditable={isEditable}
                    note={note}
                    onClickEdit={() => setIsEditable(!isEditable)}
                    onClickTrash={() => deleteNote_(note)}
                    onSubmit={isEditable && submit}
                />
            }
        </>
    )
}