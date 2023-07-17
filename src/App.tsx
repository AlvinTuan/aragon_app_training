import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
import DaosDetails from './components/daos/DaosDetails'
import Dashboard from './components/daos/dashboard/Dashboard'
import Governance from './components/daos/governance/Governance'
import Finance from './components/daos/finance/Finance'
import Community from './components/daos/community/Community'
import Settings from './components/daos/f-settings/Settings'
import GlobalStyles from './components/GlobalStyles/GlobalStyles'

function App() {

    return (
        <>
            <GlobalStyles>
                <Routes>
                    <Route path='/' element={<HomePage />}></Route>
                    <Route path='/daos/ethereum/:daoAuthor/' element={<DaosDetails />}>
                        <Route path='dashboard' element={<Dashboard />}></Route>
                        <Route path='governance' element={<Governance />}></Route>
                        <Route path='finance' element={<Finance />}></Route>
                        <Route path='community' element={<Community />}></Route>
                        <Route path='settings' element={<Settings />}></Route>
                    </Route>
                </Routes>
            </GlobalStyles>

        </>
    )
}

export default App
