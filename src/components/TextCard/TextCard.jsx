import { useState } from 'react';
import s from './style.module.css';
import { Trash as TrashIcon } from "react-bootstrap-icons";

export function TextCard({ title, subtitle, content, onClickTrash, onClick }){
    const [isCardHovered, setIsCardHovered] = useState(false);
    const [isTrashHovered, setIsTrashHovered] = useState(false);

    function onClickTrash_(e){
        onClickTrash();
        e.stopPropagation();
    }

    return (
        <div 
            onMouseEnter={() => setIsCardHovered(true)}
            onMouseLeave={() => setIsCardHovered(false)}
            style={{ borderColor: isCardHovered  ? '#0d6efd':'transparent'}}
            className={`${s.container} card`} 
            onClick={onClick}
        >
            <div className={`${s.card_body} card-body`}>
                <div className={s.title_row}>
                    <h5 className="card-title">{title}</h5>
                    <TrashIcon
                        size={20}
                        onMouseEnter={() => setIsTrashHovered(true)}
                        onMouseLeave={() => setIsTrashHovered(false)}
                        onClick={onClickTrash_}
                        style={{ color: isTrashHovered ? '#FF6363' :'#b8b8b8'}}
                    />
                </div>
                <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
                <p className={`${s.text_content} card-text`}>{content}</p>
            </div>
        </div>
    );
}