import IProps from "../../../interface/IProps"

const Content: React.FunctionComponent<IProps> = ({ children }) =>
    <div className="grid grid-rows-[100px_auto]  h-screen">
        {
            children
        }
    </div>

export default Content