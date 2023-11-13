import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"

const Dropdown = () => {
    const [open, setOpen] = useState(false);

    const handleMouseEnter = () => {
        setOpen(true);
    };

    const handleMouseLeave = () => {
        setOpen(false);
    };

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button
                className="text-button dropdown-button"
                title="More"
            >
                more&nbsp;<FontAwesomeIcon icon={faCaretDown} />
            </button>
            {open ? (
                <ul className="dropdown-content">
                    <a className="text-button" href="/users">users</a>
                    <a className="text-button" href="/articles">articles</a>
                    <a className="text-button" href="/games">games</a>
                    <a className="text-button" href="/about">about</a>
                </ul>
            ) : null}
        </div>
    );
};

export default Dropdown;