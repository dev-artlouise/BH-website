import './toggleButton.scss'

import { AlignJustify, X } from 'lucide-react';

const ToggleButton = ({ open, setOpen }) => {

    return (
        <button
            onClick={() => setOpen((prev) => !prev)}
        >
            <div>
                {open ? <X /> : <AlignJustify />}
            </div>
        </button >
    )
}

export default ToggleButton