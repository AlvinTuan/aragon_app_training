import useFetch from "~/hooks/useFetch"
import { useParams } from "react-router-dom";
import Gende from "~/components/gendes/Gende";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import clipboardCopy from "clipboard-copy";
import ModalWalletConnection from "~/components/modal/ModalWalletConnection";
import ModalDepositFunds from "~/components/modal/ModalDepositFunds";
import styles from "./dashboard.module.scss"
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

const Dashboard = () => {
    const param = useParams()
    const exploreListItem = useFetch(param.daoAuthor);
    const [showPara, setShowPara] = useState(false)
    const notify = () => {
        if (!clickStar) {
            toast.success('DAO favorited', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        } else {
            toast.success('DAO removed from favorites', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }
    };
    const [clickStar, setClickStar] = useState(false);
    const handleClickStar = () => {
        notify()
        setClickStar((clickStar) => !clickStar)
    }
    const copyToast = () => toast.success('Copied', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const handleCopy = () => {
        copyToast()
        clipboardCopy(`app.aragon.org/#/daos/ethereum/${exploreListItem?.author}`)
    }
    const handleClickReadMore = () => {
        setShowPara(setShowPara => !setShowPara)
    }
    const [showModalWalletConnection, setShowModalWalletConnection] = useState(false);
    const [showModalDepositFunds, setShowModalDepositFunds] = useState(false)
    return (
        <>
            <ModalWalletConnection open={showModalWalletConnection} handleClose={() => { setShowModalWalletConnection(false) }}></ModalWalletConnection>
            <ModalDepositFunds open={showModalDepositFunds} handleClose={() => setShowModalDepositFunds(false)}></ModalDepositFunds>
            <div className={cx("container")}>
                <div className={cx("banner")}>
                    <div className={cx("banner--top")}>
                        <div className={cx("banner__content")}>
                            <h1 className={cx("content__title")}>{exploreListItem?.title}</h1>
                            <p className={cx("content__author")}>{exploreListItem?.author}</p>
                            <a className={cx("content__link")} onClick={handleCopy}>
                                <span>
                                    {`app.aragon.org/#/daos/ethereum/${exploreListItem?.author}`}
                                </span>
                                <div className={cx("icon-copy")}>
                                    <i className="fa-regular fa-copy"></i>
                                </div>
                            </a>
                            <div className={cx("content__description")} onClick={handleClickReadMore}>
                                <p className={`${showPara ? cx("show-para") : ""}`}>
                                    {exploreListItem?.desc}
                                </p>
                                <a target="_blank" rel="noopener noreferrer">
                                    {showPara ? <span>Read less ↓</span> : <span>Read more ↑</span>}
                                </a>
                            </div>

                        </div>
                        <div className={cx("banner__right")}>
                            <div className={cx("banner__avatar")}>
                                <span>{exploreListItem?.avatar}</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx("banner--bottom")}>
                        <div className={cx("content__foot")}>
                            <div className={cx("content__gendes")}>
                                {exploreListItem?.gendes.map((gende) => (<Gende itemName={gende.item} key={gende.id}></Gende>))}
                            </div>
                            <div className={cx("content__text")}>
                                <button className={cx("btn-all-link")}>
                                    <span className={cx("btn__content")}>All Links</span>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </button>
                                <span className={cx("text__link")}>{exploreListItem?.title} web</span>
                                <button className={cx("star")} onClick={handleClickStar}>
                                    {!clickStar ?
                                        <i className="fa-regular fa-star"></i>
                                        : <i className="fa-solid fa-star"></i>}
                                    <ToastContainer></ToastContainer>
                                </button>

                            </div>

                        </div>
                    </div>
                </div>

                <div className={cx("middle")}>
                    <div className={cx("middle--left")}>
                        <div className={cx("card__img")}>
                        </div>
                        <h2 className={cx("card__title")}>Create your first proposal</h2>
                        <p className={cx("card__desc")}>Get your community involved in the decision-making process. Learn more in our <a href="">proposal guide</a>.</p>
                        <button className={cx("card__btn")} onClick={() => { setShowModalWalletConnection(true) }}>
                            <span>
                                Create proposal
                            </span>
                        </button>
                    </div>
                    <div className={cx("middle--right")}>
                        <div className={cx("card__img")}>
                        </div>
                        <h2 className={cx("card__title")}>Make your first deposit</h2>
                        <p className={cx("card__desc")}>Begin by making your first treasury deposit. Learn more about managing a DAO treasury <a href="">in this guide</a>.</p>
                        <button className={cx("card__btn")} onClick={() => setShowModalDepositFunds(true)}>
                            <span>
                                Deposit funds
                            </span>
                        </button>
                    </div>

                </div>

                <div className={cx("bottom")}>
                    <div className={cx("bottom--left")}>
                        <div className={cx("member--top")}>
                            <div className={cx("icon")}>
                                <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path fillRule="evenodd" clipRule="evenodd" d="M8.6753 3.54398C8.64863 3.63064 8.6953 3.72398 8.78196 3.75731L8.71996 3.70664C9.63329 4.03331 10.24 4.89997 10.2466 5.8733V6.85996C10.2466 7.03996 10.1 7.1933 9.91996 7.1933H9.37996C9.29996 7.1933 9.22663 7.2533 9.21996 7.33996L8.93996 9.86662C8.91996 10.0333 8.77996 10.1533 8.6133 10.16H7.29997C7.12664 10.16 6.98664 10.04 6.9733 9.87329L6.6933 7.35329C6.68664 7.27329 6.6133 7.20663 6.5333 7.2133H5.99331C5.81331 7.2133 5.66664 7.06663 5.66664 6.88663V5.89997C5.66664 4.92664 6.27331 4.05998 7.19463 3.73731C7.2413 3.71731 7.27463 3.69064 7.29463 3.65064C7.32797 3.56398 7.29463 3.46398 7.21463 3.43064C6.82797 3.25064 6.51464 2.93731 6.34131 2.55731C5.92131 1.65065 6.31464 0.570656 7.2213 0.150657C8.12796 -0.269341 9.20796 0.123991 9.63463 1.03065C10.0546 1.93732 9.66129 3.01731 8.7613 3.44398H8.76196C8.7153 3.46398 8.68863 3.49731 8.6753 3.54398ZM14.1086 7.69265C14.0754 7.77899 14.1216 7.87194 14.2142 7.9056L14.1479 7.83998C15.2146 8.19998 15.9279 9.19998 15.9346 10.3333V12.3173C15.9346 12.4973 15.7879 12.65 15.6079 12.6506V12.6513H15.0213C14.9346 12.6513 14.8679 12.718 14.8613 12.8046L14.6279 15.6439C14.6146 15.8173 14.4679 15.9506 14.3013 15.9506H12.3279C12.1546 15.9506 12.0146 15.8173 12.0013 15.6506L11.7679 12.8113C11.7613 12.7246 11.6879 12.6646 11.6079 12.6646V12.6653H11.0213C10.8346 12.6653 10.6879 12.5186 10.6946 12.3386V10.3653C10.6946 9.23864 11.4146 8.23865 12.4813 7.87865H12.4819C12.5286 7.86531 12.5686 7.83198 12.5886 7.79198C12.6219 7.71198 12.5819 7.61198 12.5019 7.57865V7.57932C11.9953 7.36598 11.5886 6.95932 11.3753 6.45265C10.9086 5.35932 11.4153 4.106 12.5086 3.646C13.6019 3.17933 14.8553 3.686 15.3219 4.77933C15.7886 5.87266 15.2819 7.12598 14.1953 7.59265C14.1553 7.60598 14.1219 7.64598 14.1086 7.69265ZM3.48199 7.90662C3.41532 7.87996 3.36866 7.81996 3.36866 7.75329C3.36199 7.67996 3.40199 7.61996 3.46866 7.59329H3.46799C4.55465 7.12663 5.06132 5.8733 4.59465 4.77997C4.12799 3.68664 2.87466 3.17997 1.78133 3.64664C0.688001 4.10664 0.181336 5.35997 0.648001 6.4533C0.861334 6.95996 1.268 7.36662 1.77466 7.57996C1.85466 7.61329 1.89466 7.71329 1.86133 7.79329C1.84133 7.83329 1.80133 7.86662 1.76133 7.87996C0.694668 8.23995 -0.0253296 9.23995 -0.0253296 10.3666V12.3399C-0.0253296 12.5199 0.121336 12.6666 0.304002 12.6666H0.891333C0.971333 12.6666 1.04467 12.7266 1.05133 12.8133L1.28467 15.6526C1.298 15.8193 1.438 15.9526 1.61266 15.9526H3.58599C3.75266 15.9459 3.89265 15.8193 3.91265 15.6459L4.14599 12.8066C4.15265 12.7199 4.21932 12.6533 4.30599 12.6533H4.89265C5.07265 12.6533 5.21932 12.4999 5.21932 12.3199C5.21932 12.3133 5.21265 12.3133 5.21265 12.3133V10.3333C5.20598 9.19995 4.49265 8.19995 3.42599 7.83996L3.48199 7.90662Z" fill="currentColor"></path></svg></div>
                            <button className={cx("member__btn")} onClick={() => { setShowModalWalletConnection(true) }}>
                                <span>Manage memmbers</span>
                            </button>
                        </div>
                        <div className={cx("member--bottom")}>
                            <p>1 Members</p>
                            <span>Wallet-based</span>
                        </div>
                    </div>
                    <div className={cx("bottom--right")}>
                        <div className={cx("dbr--top")}>
                            <p className={cx("address")}>0x5b9…ab10</p>
                            <div className={cx("icon--share")}><svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path fillRule="evenodd" clipRule="evenodd" d="M2 16H14C14.5302 15.9994 15.0386 15.7885 15.4135 15.4135C15.7885 15.0386 15.9994 14.5302 16 14V9.42857C16 9.20124 15.9097 8.98323 15.7489 8.82248C15.5882 8.66173 15.3702 8.57143 15.1429 8.57143C14.9155 8.57143 14.6975 8.66173 14.5368 8.82248C14.376 8.98323 14.2857 9.20124 14.2857 9.42857V14C14.2857 14.0758 14.2556 14.1484 14.202 14.202C14.1484 14.2556 14.0758 14.2857 14 14.2857H2C1.92422 14.2857 1.85155 14.2556 1.79797 14.202C1.74439 14.1484 1.71429 14.0758 1.71429 14V2C1.71429 1.92422 1.74439 1.85155 1.79797 1.79797C1.85155 1.74439 1.92422 1.71429 2 1.71429H6.57143C6.79876 1.71429 7.01678 1.62398 7.17752 1.46323C7.33827 1.30249 7.42857 1.08447 7.42857 0.857143C7.42857 0.629814 7.33827 0.411797 7.17752 0.251051C7.01678 0.0903059 6.79876 0 6.57143 0H2C1.46975 0.00060496 0.961396 0.211513 0.586455 0.586455C0.211513 0.961396 0.00060496 1.46975 0 2V14C0.00060496 14.5302 0.211513 15.0386 0.586455 15.4135C0.961396 15.7885 1.46975 15.9994 2 16ZM11.1427 0H15.1427C15.37 0 15.588 0.0903059 15.7488 0.251051C15.9095 0.411797 15.9998 0.629814 15.9998 0.857143V4.85714C15.9998 5.08447 15.9095 5.30249 15.7488 5.46323C15.588 5.62398 15.37 5.71429 15.1427 5.71429C14.9154 5.71429 14.6973 5.62398 14.5366 5.46323C14.3758 5.30249 14.2855 5.08447 14.2855 4.85714V2.92686L8.60554 8.60571C8.44305 8.75712 8.22814 8.83955 8.00608 8.83563C7.78403 8.83171 7.57216 8.74175 7.41511 8.58471C7.25807 8.42767 7.16811 8.2158 7.1642 7.99374C7.16028 7.77168 7.2427 7.55677 7.39411 7.39429L13.073 1.71429H11.1427C10.9154 1.71429 10.6973 1.62398 10.5366 1.46323C10.3758 1.30249 10.2855 1.08447 10.2855 0.857143C10.2855 0.629814 10.3758 0.411797 10.5366 0.251051C10.6973 0.0903059 10.9154 0 11.1427 0Z" fill="currentColor"></path></svg></div>
                        </div>
                        <div className={cx("dbr--btn")}>
                            <a href={`/daos/ethereum/:${exploreListItem?.author}/community`}>
                                <span>See all</span>
                                <i className="fa-solid fa-angle-right"></i>
                            </a>
                        </div>
                    </div>
                </div>

            </div >
        </>

    )
}

export default Dashboard