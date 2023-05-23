import React from 'react';
import './home.scss'
import Navlist from './Navlist'
import TopNav from './TopNav'
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Provider } from '../../router/Lxcontext'

// useLocation获取当前的路由信息
export default function Home() {
    let location = useLocation(); //获取到当前路由信息
    let Navigate = useNavigate();
    let [showNav, setShowNav] = React.useState(false)
    // 初始加载home组件执行
    React.useEffect(() => {
        // 路由重定向
        if (location.pathname == '/home') {
            Navigate('/home/onepage', { replace: true });//实现了路由重定向
        }
    }, [])
    // 子组件通知父组件
    function notify(value) {
        setShowNav(value)
        console.log(value)
    }
    return (
        <div id='home'>
            <div className='home-left'>
                {/* 导航组件 */}
                {/* 动态显示 展开和收缩 */}
                <Navlist showNav={showNav}></Navlist>
            </div>
            <Provider value='天天学习'>
                <div className='home-right'>
                    <TopNav onClick={(value) => notify(value)} ></TopNav>
                    <Outlet></Outlet>
                </div>
            </Provider>
        </div>
    )
}
