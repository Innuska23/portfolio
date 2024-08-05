import styled from "styled-components"
import { theme } from "../../../styles/Theme.styled"

const Project = styled.section`
`

const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
    gap: 62px 21px;
    justify-content: center;
    margin-top: 110px;
    align-items: center;
    justify-items: center; 

@media ${theme.media.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 40px 20px;
}

@media ${theme.media.mobile} {
    grid-template-columns: 1fr;
}
`
export const S = {
    Project,
    ProjectsGrid
}