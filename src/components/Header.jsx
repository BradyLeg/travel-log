import imgGlobe from "../images/globe.png";

export default function Header() {
    return (
        <header>
            <img src={imgGlobe} alt="globe icon" />
            <h1>my travel journal.</h1>
        </header>
    )
}