import { useCurrentYear } from '../hooks/useCurrentYear';

const DashFooter = () => {
    const year = useCurrentYear();
    
    const content = (
        <footer className="dash-footer">
            <div>
            </div>
            <p>© nullpoint {year}</p>
        </footer >
    )
    return content
}
export default DashFooter