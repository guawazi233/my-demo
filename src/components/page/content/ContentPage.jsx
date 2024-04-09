import React, { Suspense, lazy } from "react";
import { Layout, } from "antd";
import { CacheSwitch, CacheRoute } from "react-router-cache-route";
import { useLocation } from "react-router-dom";
import '../../../../src/App.css';

const { Content,} = Layout;

const HomePage = lazy(() => import('../home/HomePage'));
const RouterPage = lazy(() => import('././router/RouterPage'));
const UploadBigPage = lazy(() => import('././upload/UploadBigPage'));
const EventTackPage = lazy(() => import('././event-track/EventTackPage'));
export default function ContentPage() {
    return (
        <Layout className="layout">
            <Content
                className="content"
            >
                {/* 右侧内容区 */}
                <Suspense fallback={<div>Loading...</div>}>
                    <CacheSwitch>
                        <CacheRoute path="/" component={HomePage} exact />
                        <CacheRoute path="/router" component={RouterPage} />
                        <CacheRoute path="/uploadBigFile" component={UploadBigPage} />
                        <CacheRoute path="/eventTrack" component={EventTackPage} />
                    </CacheSwitch>
                </Suspense>
            </Content>

        </Layout>
    )
}
