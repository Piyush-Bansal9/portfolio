import { useDispatch } from "react-redux"
import { toggleMenu } from "../../store/menuSlice";
import { AlignJustify } from "lucide-react";

export default function NavbarToggler() {
    const dispatch = useDispatch();

    function setToggleMenu() {
        dispatch(toggleMenu());
    }

    return (
        <button  className="text-2xl p-3 border border-orange rounded-full" onClick = {setToggleMenu}>
            <AlignJustify/>
        </button>
    )
}