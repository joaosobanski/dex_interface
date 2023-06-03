import IProps from "../../interface/IProps"

const Layout: React.FunctionComponent<IProps> = ({ children }) =>
    <div className="grid grid-cols-1 md:grid-cols-[240px_auto] h-screen bg-sky-300 dark:bg-sky-900">
        {
            children
        }
    </div>

export default Layout