import "./Header.scss"
const Header = () => {
    return (
        <header>
            <div className="header__top">
                <div className="nav">
                    <img src="/logo.0072da7f.svg" alt="" className="logo" />
                    <div className="connect-wallet-btn">
                        <span>Connect wallet</span>
                        <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="w-2.5 h-2.5"><path fillRule="evenodd" clipRule="evenodd" d="M5.17157 6.82843C4.42143 6.07828 4 5.06087 4 4C4 2.93913 4.42143 1.92172 5.17157 1.17157C5.92172 0.421427 6.93913 0 8 0C9.06087 0 10.0783 0.421427 10.8284 1.17157C11.5786 1.92172 12 2.93913 12 4C12 5.06087 11.5786 6.07828 10.8284 6.82843C10.0783 7.57857 9.06087 8 8 8C6.93913 8 5.92172 7.57857 5.17157 6.82843ZM12.6207 11.0644C13.9718 12.0204 14.9932 13.372 15.544 14.9328C15.5867 15.0534 15.5999 15.1825 15.5824 15.3093C15.5649 15.4361 15.5172 15.5569 15.4434 15.6614C15.3696 15.766 15.2717 15.8513 15.1581 15.9102C15.0445 15.9691 14.9184 15.9999 14.7904 16H1.20958C1.08158 15.9999 0.955475 15.9691 0.841843 15.9102C0.728211 15.8513 0.630372 15.766 0.556542 15.6614C0.482711 15.5569 0.435045 15.4361 0.417546 15.3093C0.400047 15.1825 0.413226 15.0534 0.455976 14.9328C1.00679 13.372 2.02816 12.0204 3.3793 11.0644C4.73044 10.1085 6.34484 9.59509 7.99998 9.59509C9.65512 9.59509 11.2695 10.1085 12.6207 11.0644Z" fill="currentColor"></path></svg>
                    </div>
                </div>
            </div>
            <div className="banner">
                <div className="banner__content">
                    <h1>Explore the DAO World</h1>
                    <h3>
                        Build your DAO, explore communities, and find inspiration for your project all in one place.
                    </h3>
                </div>
                <div className="banner__logo">
                    <img src="./coloredLogo.bfc02651.svg" alt="" className="banner__logo--main" />
                    <img src="./circleGreenGradient.b24a092c.svg" alt="" className="banner__logo--green" />
                    <img src="./purpleGradient.e35c46bd.svg" alt="" className="banner__logo--purple" />
                </div>
            </div>
        </header>
    )
}

export default Header