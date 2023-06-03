import { useAccount, useBalance } from 'wagmi'

export default function AccountBalance() {
    const { address } = useAccount()
    const { data } = useBalance({
        address,
        watch: true,
    },)

    return (
        <>
            {
                address && data?.formatted &&
                <div className=' dark:text-white text-black'>
                    {Number(data?.formatted).toFixed(Number(data?.formatted) > 1 ? 2 : 5)} ETH
                </div>
            }
        </>
    )
}
