import './Footer.css';

export default function Footer() {
    return (
        <footer className='footer-container'>
            <div className='footer-content'>
                <div className='footer-top'>
                    <div className='footer-col-1'>
                        <div className='footer-header'>
                            <h5>Developer</h5>
                        </div>
                        <div className='footer-link-list'>
                            <div className='footer-link'>
                                <div className="icon">
                                    <img src='https://i.imgur.com/sozkxlW.png'></img>
                                </div>
                                <a href="https://github.com/Mineh222">GitHub</a>
                            </div>
                            <div className='footer-link'>
                                <div className='icon'>
                                    <img src="https://i.imgur.com/gH0w2HJ.png"></img>
                                </div>
                                <a href="https://www.linkedin.com/in/mineh-gharabegi-98696b241/">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                    <div className='footer-col-2'></div>
                        <div className='footer-header'>
                            <h5>Project</h5>
                        </div>
                        <div className='footer-link-list'>
                            <div className='icon'>
                                <img src='https://i.imgur.com/sozkxlW.png'></img>
                            </div>
                            <a href="https://github.com/Mineh222/paws">GitHub Repo</a>
                        </div>
                </div>
                <div className='footer-bottom'>
                    <p>Copyright 2022 Paws Inc.</p>
                </div>
            </div>
        </footer>
    )
}
