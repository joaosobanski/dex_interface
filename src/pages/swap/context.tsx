import React, { useState } from 'react';
import IProps from '../../interface/IProps';
import IToken from '../../interface/IToken';

interface ISwapContext {
    token0?: IToken;
    token1?: IToken;
}

const SwapContext = React.createContext<ISwapContext>(
    {} as ISwapContext,
)

export const SwapProvider: React.FunctionComponent<IProps> = ({ children }) => {
    const [token0, setToken0] = useState<IToken>();
    const [token1, setToken1] = useState<IToken>();


    return (
        <SwapContext.Provider
            value={{
                token0,
                token1,
            }}
        >
            {children}
        </SwapContext.Provider>
    );
}

export const useSwap = (): ISwapContext => {
    const context = React.useContext(SwapContext);

    if (!context) {
        throw new Error('undefined useSwap.');
    }

    return context;
}