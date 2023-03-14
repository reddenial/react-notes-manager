import { NotesAPI } from 'api/note-api';
import { NoteForm } from 'components/NoteForm/NoteForm';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNote } from 'store/note/note-slice';
import s from './style.module.css';

export function NoteCreate(props) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function createNote(formValues){
        const createdNote = await NotesAPI.create({ 
            ...formValues, 
            created_at : new Date().toLocaleDateString()
        });

        dispatch(addNote(createdNote));

        navigate("/");
    }

    return (
        <>
            <NoteForm
                title="Create a note"
                onSubmit={createNote}
            />
        </>
    )
}