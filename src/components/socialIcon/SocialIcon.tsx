import { Icon } from "../icon/Icon"

export const SocialIcon = () => {
    return (
        <>
            <li>
                <a href="">
                    <Icon iconId={'githubSvg'} width={"30"} height={"30"} viewBox={"0 0 30 30"} />
                </a>
            </li>
            <li>
                <a href="">
                    <Icon iconId={'twitterSvg'} width={"30"} height={"30"} viewBox={"0 0 30 30"} />
                </a>
            </li>
            <li>
                <a href="">
                    <Icon iconId={'linkedinSvg'} width={"30"} height={"30"} viewBox={"0 0 30 30"} />
                </a>
            </li>
        </>
    )
}