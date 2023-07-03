import "./Footer.scss"

const Footer = () => {
    return (
        <footer>
            <div className='footer-nav'>
                <div className="menu--left">
                    <img src="iconLogo.66476f5c.svg" alt="" />
                    <ul>
                        <li><a href="">Explore</a></li>
                        <li><a href="">Learn</a></li>
                        <li><a href="">Build</a></li>
                        <li><a href="">Help</a></li>
                    </ul>
                </div>
                <div className="footer__img">
                    <img src="./greenGradient.3b21314c.svg" alt="" className="footer__img--left" />
                    <img src="./purpleGradient.e35c46bd.svg" alt="" className="footer__img--right" />
                </div>
                <div className="menu--right">
                    <ul >
                        <li><a href="">Terms of service</a></li>
                        <li><a href="">Privacy</a></li>
                    </ul>
                    <span>© 2023 Aragon</span>
                </div>

            </div>
            <div className="footer--description">
                <svg width="16" height="16" fill="none" viewBox="0 0 16 17"><path d="M8 0.5C6.41775 0.5 4.87103 0.969192 3.55544 1.84824C2.23985 2.72729 1.21447 3.97672 0.608967 5.43853C0.00346627 6.90034 -0.15496 8.50887 0.153721 10.0607C0.462403 11.6126 1.22433 13.038 2.34315 14.1569C3.46197 15.2757 4.88743 16.0376 6.43928 16.3463C7.99113 16.655 9.59966 16.4965 11.0615 15.891C12.5233 15.2855 13.7727 14.2602 14.6518 12.9446C15.5308 11.629 16 10.0822 16 8.5C15.9975 6.37905 15.1538 4.34569 13.6541 2.84595C12.1543 1.34621 10.121 0.502541 8 0.5V0.5ZM9 12.5C9 12.7652 8.89465 13.0196 8.70711 13.2071C8.51957 13.3946 8.26522 13.5 8 13.5C7.73479 13.5 7.48043 13.3946 7.2929 13.2071C7.10536 13.0196 7 12.7652 7 12.5V9.3C7 9.03478 7.10536 8.78043 7.2929 8.59289C7.48043 8.40536 7.73479 8.3 8 8.3C8.26522 8.3 8.51957 8.40536 8.70711 8.59289C8.89465 8.78043 9 9.03478 9 9.3V12.5ZM8 6.9C7.68355 6.9 7.37421 6.80616 7.11109 6.63035C6.84797 6.45454 6.6429 6.20466 6.5218 5.91229C6.4007 5.61993 6.36901 5.29822 6.43075 4.98786C6.49248 4.67749 6.64487 4.39239 6.86863 4.16863C7.0924 3.94486 7.37749 3.79248 7.68786 3.73074C7.99823 3.66901 8.31994 3.70069 8.6123 3.82179C8.90466 3.94289 9.15454 4.14797 9.33036 4.41109C9.50617 4.67421 9.6 4.98355 9.6 5.3C9.6 5.72435 9.43143 6.13131 9.13137 6.43137C8.83132 6.73143 8.42435 6.9 8 6.9Z" fill="currentColor" ></path></svg>
                <span>Aragon App Public Beta</span>
            </div>
        </footer>
    )
}

export default Footer