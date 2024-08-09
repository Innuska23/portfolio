import { useEffect, useState } from "react";

import { Icon } from "../icon/Icon";
import { animateScroll as scroll } from 'react-scroll';
import { useWindowSize } from "../../components/hooks/useWindowSize";

import { S } from "./GoTopBtn_Styles";

export const GoToTop: React.FC = () => {
    const { width } = useWindowSize();
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBtn(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {showBtn && width > 768 && (
                <S.StyledGoToTop onClick={() => { scroll.scrollToTop() }}>
                    <Icon
                        iconId={"goToTop"}
                        height={"24px"}
                        width={"24px"}
                        viewBox="0 0 24 24" />
                </S.StyledGoToTop>
            )}
        </>
    );
};
