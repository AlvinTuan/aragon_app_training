import useFetch from "~/hooks/useFetch"
import { useParams } from "react-router-dom"
import { useState } from "react"
import ModalWalletConnection from "~/components/modal/ModalWalletConnection"
import styles from "./settings.module.scss"
import classNames from "classnames/bind"

const cx = classNames.bind(styles)

const Settings = () => {
    const param = useParams()
    const exploreDaosItem = useFetch(param.daoAuthor)
    const [showModalWalletConnection, setShowModalWalletConnection] = useState(false);
    return (
        <>
            <ModalWalletConnection open={showModalWalletConnection} handleClose={() => { setShowModalWalletConnection(false) }}></ModalWalletConnection>
            <div className={cx('container')}>
                <div className={cx("content")}>
                    <div className={cx("content--top")}>
                        <div className={cx("gear")}>
                            <i className="fa-solid fa-gear"></i>
                            <span className={cx("gear-text")}>Settings</span>
                        </div>
                        <h2>DAO settings</h2>
                        <span>Review your DAO's settings</span>
                    </div>
                    <div className={cx("content--bottom")}>
                        <div className={cx("net-block")}>
                            <h1>Blockchain</h1>
                            <span>Not changeable</span>
                            <dl className={cx("table__def")}>
                                <dl className={cx("def_net")}>
                                    <dt>Network</dt>
                                    <dd>Mainnet</dd>
                                </dl>
                                <dl className={cx("def_blockchain")}>
                                    <dt>Blockchain</dt>
                                    <dd>Ethereum</dd>
                                </dl>
                            </dl>
                        </div>
                        <div className={cx("DAO-details")}>
                            <h1>
                                <span>DAO details</span>
                            </h1>
                            <dl>
                                <dl className={cx("details--logo")}>
                                    <dt>Logo</dt>
                                    <dd>
                                        <p className={cx("details--author")}>{exploreDaosItem?.avatar}</p>
                                    </dd>
                                </dl>
                                <dl className={cx("details--name")}>
                                    <dt>DAO name</dt>
                                    <dd>{exploreDaosItem?.author}</dd>
                                </dl>
                                <dl className={cx("details--ens")}>
                                    <dt>ENS</dt>
                                    <dd>{exploreDaosItem?.desc}</dd>
                                </dl>
                                <dl className={cx("details--links")}>
                                    <dt>Links</dt>
                                    <dd>
                                        <a href="">We Have Had Enough web
                                        </a>
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    </dd>
                                </dl>
                            </dl>
                        </div>
                        <div className={cx("section__community")}>
                            <h1>Community</h1>
                            <dl>
                                <dl className={cx("eligible-voters")}>
                                    <dt>Eligible voters</dt>
                                    <dd>Multisig members</dd>
                                </dl>
                                <dl className={cx("members")}>
                                    <dt>Members</dt>
                                    <dd>
                                        <a href={`/daos/ethereum/${exploreDaosItem?.author}/community`}>See 1 addresses</a></dd>
                                </dl>
                            </dl>
                        </div>
                        <div className={cx("section__governance")}>
                            <h1>Governance</h1>
                            <dl>
                                <dl className={cx("minimum-approval")}>
                                    <dt>Minimum approval</dt>
                                    <dd>1 of 1 Authorized wallets / addresses</dd>
                                </dl>
                                <dl className={cx("proposal-creation")}>
                                    <dt>Proposal creation</dt>
                                    <dd>Multisig members</dd>
                                </dl>
                            </dl>
                        </div>
                        <button className={cx("btn-edit")} onClick={() => { setShowModalWalletConnection(true) }}>
                            <span><i className="fa-solid fa-box"></i></span>
                            <span>Edit settings</span>
                        </button>
                        <div className={cx("note")}>
                            <i className="fa-solid fa-circle-info"></i>
                            <span>To make changes to the settings, create a proposal and put it to vote in your DAO.</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Settings