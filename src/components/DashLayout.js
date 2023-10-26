import { Outlet } from 'react-router-dom'
import DashHeader from './DashHeader'
import DashFooter from './DashFooter'

const DashLayout = () => {
    return (
        <>
            <section className="light-theme">
                <DashHeader />
                <div className="dash-container">
                    <Outlet />
                </div>
                <DashFooter />
            </section>
        </>
    )
}
export default DashLayout