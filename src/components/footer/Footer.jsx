import React from "react";
import "./styles/Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-column">
                    <h3>Team</h3>
                    <ul>
                        <li>Mad Lion</li>
                        <li>Fools Dreams</li>
                        <li>Cairo</li>
                        <li>David Jr</li>
                        <li>Dimples</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Products</h3>
                    <ul>
                        <li>
                        <a href="https://www.amazon.com/Love-Chaos-Buhle-Kgatla-ebook/dp/B0BQXBRLQS" target="_blank" rel="noreferrer">Love and Chaos</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Socials</h3>
                    <ul>
                        <li>
                        <a href="https://www.youtube.com/@bigcatgraphics007" target="_blank" rel="noreferrer">YouTube</a>
                        </li>
                        <li>
                        <a href="https://www.instagram.com/bigcatgraphics/" target="_blank" rel="noreferrer">Instagram</a>
                        </li>
                        <li>
                        <a href="https://web.facebook.com/BigCatGraphics" target="_blank" rel="noreferrer">Facebook</a>
                        </li>
                        <li>
                        <a href="https://twitter.com/MusicInGreenbcg" target="_blank" rel="noreferrer">X (Twitter)</a>
                        </li>
                    </ul>
                </div>
            </div>
            <p>&copy; BIG CAT GRAPHICS 2024</p>
        </footer>
    )
}

export default Footer;
