import s from './style.module.css';
import { Search as SearchIcon } from 'react-bootstrap-icons';

export function Searchbar({ placeholder, onTextChange }){
    return (
        <>
            <SearchIcon className={s.icon} size={25} />
            <input 
                type="text" 
                className={s.input} 
                onChange={(e) => onTextChange(e.target.value)} 
                placeholder={placeholder}            
            />
        </>
    );
}