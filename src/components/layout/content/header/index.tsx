import { Breadcrumb, DarkThemeToggle } from "flowbite-react"
import Switch from "../../../actions/chain/switch";
import Connect from "../../../actions/chain/connect";
import AccountBalance from "../../../actions/chain/balance/eth";
import { useEffect, useState } from "react";
import UpperCase from "../../../../utils/UpperCase";
import { useLocation } from 'react-router-dom'

const ContentHeader: React.FunctionComponent = () => {
    const [path, setPath] = useState<string[]>([]);

    const { pathname } = useLocation();
    useEffect(() => {
        let values = [] as string[];

        pathname.split('/').filter(e => e.length > 0).map(e => {
            values.push(e);
        });

        setPath(values);
    }, [pathname]);

    return (
        <div className="grid sm:grid-cols-2 sm:justify-between justify-center items-center gap-2 px-2 sm:px-5 border-b">
            <div className="hidden sm:inline-flex items-center px-5">
                <Breadcrumb
                    aria-label="Solid background breadcrumb example"
                    className="px-5 py-3"
                >
                    {
                        path.map((value: string, key: number) =>
                            <Breadcrumb.Item key={key}>
                                <span className="text-lg">
                                    {UpperCase.convertFirstCharacterToUppercase(value)}
                                </span>
                            </Breadcrumb.Item>
                        )
                    }
                </Breadcrumb>
            </div>
            <div className="flex flex-row justify-end items-center gap-2">
                <img src="https://flowbite.com/docs/images/logo.svg" className="inline-block sm:hidden" alt="Flowbite Logo" />
                <DarkThemeToggle />
                <div className="hidden md:block">
                    <AccountBalance />
                </div>
                <Switch />
                <Connect />
            </div>
        </div>
    )
}

export default ContentHeader;
