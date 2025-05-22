import {useEffect} from "react";
import {useLocation} from "react-router-dom";

export default function useResetScroll() {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo({top: 0, behavior: "instant"}); // или "smooth", если хочешь анимацию
    }, [pathname]);

    return null;
}