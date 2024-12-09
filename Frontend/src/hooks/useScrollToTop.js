import { useEffect } from "react";

const useScrollToTop = (id) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);
};
export default useScrollToTop;
