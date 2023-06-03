import SideBar from './components/layout/sidebar';
import Layout from './components/layout';
import React from 'react';
import Content from './components/layout/content';
import ContentHeader from './components/layout/content/header';
import ContentBody from './components/layout/content/body';
import { NetworkSwitcher } from './wagmi/components/NetworkSwitcher';
import { App } from './wagmi/App';
import Switch from './components/actions/chain/switch';
import ContentFooter from './components/layout/content/footer';
import ContentMenu from './components/layout/content/menu';
import AppRoutes from './routes';


const HomeTest: React.FunctionComponent = () => {
    return (
        <Layout>
            <SideBar />
            <Content>
                <ContentHeader />
                <ContentBody>
                    <ContentMenu />
                    <AppRoutes  />
                </ContentBody>
            </Content>
        </Layout>
    )
}

export default HomeTest