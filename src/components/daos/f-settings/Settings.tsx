import useFetch from "~/hooks/useFetch"
import "./settings.scss"
import { useParams } from "react-router-dom"
import { useState } from "react"
import ModalWalletConnection from "~/components/modal/ModalWalletConnection"

const Settings = () => {
    const param = useParams()
    const exploreDaosItem = useFetch(param.daoAuthor)
    const [showModalWalletConnection, setShowModalWalletConnection] = useState(false);
    return (
        <>
            <ModalWalletConnection open={showModalWalletConnection} handleClose={() => { setShowModalWalletConnection(false) }}></ModalWalletConnection>
            <div className='settings__container'>
                <div className="settings__content">
                    <div className="settings__content--top">
                        <h2>DAO settings</h2>
                        <span>Review your DAO's settings</span>
                    </div>
                    <div className="settings__content--bottom">
                        <div className="net-block">
                            <h1>Blockchain</h1>
                            <span>Not changeable</span>
                            <dl className="table__def">
                                <dl className="def_net">
                                    <dt>Network</dt>
                                    <dd>Mainnet</dd>
                                </dl>
                                <dl className="def_blockchain">
                                    <dt>Blockchain</dt>
                                    <dd>Ethereum</dd>
                                </dl>
                            </dl>
                        </div>
                        <div className="DAO-details">
                            <h1>
                                <span>DAO details</span>
                            </h1>
                            <dl>
                                <dl className="details--logo">
                                    <dt>Logo</dt>
                                    <dd>
                                        <p className="details--author">{exploreDaosItem?.avatar}</p>
                                    </dd>
                                </dl>
                                <dl className="details--name">
                                    <dt>DAO name</dt>
                                    <dd>{exploreDaosItem?.author}</dd>
                                </dl>
                                <dl className="details--ens">
                                    <dt>ENS</dt>
                                    <dd>{exploreDaosItem?.desc}</dd>
                                </dl>
                                <dl className="details--links">
                                    <dt>Links</dt>
                                    <dd>
                                        <a href="">We Have Had Enough web
                                        </a>
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    </dd>
                                </dl>
                            </dl>
                        </div>
                        <div className="section__community">
                            <h1>Community</h1>
                            <dl>
                                <dl className="eligible-voters">
                                    <dt>Eligible voters</dt>
                                    <dd>Multisig members</dd>
                                </dl>
                                <dl className="members">
                                    <dt>Members</dt>
                                    <dd>
                                        <a href={`/daos/ethereum/${exploreDaosItem?.author}/community`}>See 1 addresses</a></dd>
                                </dl>
                            </dl>
                        </div>
                        <div className="section__governance">
                            <h1>Governance</h1>
                            <dl>
                                <dl className="minimum-approval">
                                    <dt>Minimum approval</dt>
                                    <dd>1 of 1 Authorized wallets / addresses</dd>
                                </dl>
                                <dl className="proposal-creation">
                                    <dt>Proposal creation</dt>
                                    <dd>Multisig members</dd>
                                </dl>
                            </dl>
                        </div>
                        <button className="btn-edit" onClick={() => { setShowModalWalletConnection(true) }}>
                            <span><i className="fa-solid fa-box"></i></span>
                            <span>Edit settings</span>
                        </button>
                        <div className="settings__note">
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