import './Footer.css';

export default function Footer() {
    return (
        <div className='footer'>
            <div className="footer-content">
                <p>JavaScript</p>
                <p>|</p>
                <p>Express</p>
                <p>|</p>
                <p>React</p>
                <p>|</p>
                <p>Redux</p>
                <p>|</p>
                <p>PostgreSQL</p>
                <p>|</p>
                <p>HTML</p>
                <p>|</p>
                <p>CSS</p>
            </div>
            <div className="footer-content-bottom">
                <p>Copyright 2022 Paws Inc.</p>
                <a id="about-links" target="_blank" href='https://github.com/Mineh222/paws'><i className="fa-brands fa-square-github fa-2x"></i></a>
            </div>
        </div>
    )
}
