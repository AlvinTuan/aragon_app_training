import { NavLink } from "react-router-dom"
import "./homepage.scss"
import Card from "~/components/card/Card"
import ExploreDAO from "~/components/exploreDAO/ExploreDAO"

const bannerItemList = [
    {
        "id": 1,
        "image": "/createDao.5662ad59.svg",
        "title": "Create your DAO",
        "description": "Mint tokens, set governance parameters, and deploy your DAO on-chain in minutes with our no-code setup process.",
        "btn": "Create a DAO"
    },
    {
        "id": 2,
        "image": "/learnDao.185be441.svg",
        "title": "Learn about DAOs",
        "description": "Find inspiration and learn about DAOs in our education portal designed for builders at every stage of the journey.",
        "btn": "Learn about DAOs"
    },
    {
        "id": 3,
        "image": "buildFaster.4b4e3b7e.svg",
        "title": "Build faster",
        "description": "Use our governance plugins to build a DAO, dApp, or anything you can imagine on the Aragon OSx protocol.",
        "btn": "Coming soon"
    }
]

const HomePage = () => {
    return (
        <>
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

            <div className='container'>
                <div className="content__list">
                    {bannerItemList.map(card => (
                        <Card key={card.id} card={card}></Card>
                    ))}
                </div>
                <ExploreDAO></ExploreDAO>
            </div>

            <footer>
                <div className="footer">
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
                </div>

            </footer>

        </>
    )
}

export default HomePage