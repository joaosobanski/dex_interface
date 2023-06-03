import IProps from "../../../../interface/IProps"

const ContentBody: React.FunctionComponent<IProps> = ({ children }) =>
    <div className="flex flex-col items-center overflow-y-auto">
        {children}
    </div>

export default ContentBody