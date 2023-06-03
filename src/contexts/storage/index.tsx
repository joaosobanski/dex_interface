import React, { useEffect, useState } from 'react';
import IProps from '../../interface/IProps';
import StorageEnum from '../../enums/storage';
import { Address } from 'viem';

interface IStorageContext {
    tokenMemory?: Address[];
    addTokenMemory(address: Address): void;
}

const StorageContext = React.createContext<IStorageContext>(
    {} as IStorageContext,
)

export const StorageProvider: React.FunctionComponent<IProps> = ({ children }) => {
    const [tokenMemory, setTokenMemory] = useState<Address[]>()

    async function readStorage() {
        const tokenSwap = JSON.parse(localStorage.getItem(StorageEnum.TOKENSWAP) as string);
        setTokenMemory(tokenSwap as Address[])
    }

    async function addTokenMemory(address: Address) {
        const data = JSON.parse(localStorage.getItem(StorageEnum.TOKENSWAP) as string) as Address[];
        data.push(address);
        localStorage.setItem(StorageEnum.TOKENSWAP, JSON.stringify(data));
        readStorage();
    }

    useEffect(() => { readStorage() }, [])

    return (
        <StorageContext.Provider
            value={{
                tokenMemory,
                addTokenMemory
            }}
        >
            {children}
        </StorageContext.Provider>
    );
}

export const useStorage = (): IStorageContext => {
    const context = React.useContext(StorageContext);

    if (!context) {
        throw new Error('undefined useStorage.');
    }

    return context;
}