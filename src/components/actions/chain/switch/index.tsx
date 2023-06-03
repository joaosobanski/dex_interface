import { Dropdown } from "flowbite-react";
import { useAccount, useNetwork, useSwitchNetwork } from 'wagmi'

const Switch: React.FunctionComponent = () => {
    const { chain } = useNetwork()
    const { isConnected } = useAccount()
    const { chains, error, isLoading, pendingChainId, switchNetwork } =
        useSwitchNetwork()

    return (
        <>
            {isConnected &&
                <Dropdown
                    // inline
                    label={chain?.name}
                >
                    {switchNetwork && (
                        <>
                            {chains.map((x) =>
                                x.id === chain?.id ? null : (
                                    <Dropdown.Item key={x.id} onClick={() => switchNetwork(x.id)}>
                                        {x.name}
                                        {isLoading && x.id === pendingChainId && ' (switching)'}
                                    </Dropdown.Item>
                                ),
                            )}
                        </>
                    )}
                    <div>{error?.message}</div>
                </Dropdown>
            }
        </>
    )
}

export default Switch