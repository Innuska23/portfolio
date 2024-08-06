import { SectionTitle } from "../../../components/SectionTitle"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme.styled"

import { S } from "./Contacts_Styles"

export const Contact: React.FC = () => {
    return (
        <S.Contact id="contact">
            <Container>
                <SectionTitle
                    color={"#1e0e62"}
                    letSps={"-0.02em"}
                    family={`${theme.font.secondFamily}`}
                >For any questions please mail me:</SectionTitle>
                <S.ContactText>
                    <S.ContactLink href="mailto:hi@pavanmg.in">hi@pavanmg.in</S.ContactLink>
                </S.ContactText>
            </Container>
        </S.Contact >
    )
}

