import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { WagmiConfig } from 'wagmi'
import './style.css'
import { App } from './wagmi/App'
import { config } from './wagmi'
import HomeTest from './HomeTest'

import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Flowbite } from 'flowbite-react';
import { BrowserRouter } from 'react-router-dom'
import { StorageProvider } from './contexts/storage'

const customTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      //primary: 'bg-red-500  dark:bg-cyan-100',
    },
  },
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <StorageProvider>
        <Flowbite theme={{ theme: customTheme, dark: true }}>
          <WagmiConfig config={config}>
            <HomeTest />
          </WagmiConfig>
        </Flowbite>
      </StorageProvider>
    </BrowserRouter>
  </React.StrictMode >,
)
