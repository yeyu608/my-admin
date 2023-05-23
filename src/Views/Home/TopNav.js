import { MenuUnfoldOutlined, MenuFoldOutlined, SearchOutlined, ExpandOutlined, CompressOutlined, CaretDownOutlined } from '@ant-design/icons';
import { Input, Menu, Dropdown } from 'antd';
import { getOverflowOptions } from 'antd/lib/_util/placements';
import React from 'react';
import BreadItem from './BreadItem'
import {useNavigate} from 'react-router-dom'



export default function TopNav(props) {
    // 初始化数据
    let [showMenu, setShoeMenu] = React.useState(false)
    function selectShow(value) {
        setShoeMenu(value);
        props.onClick(value); // 触发父组件的方法
    }
    return (
        <div id="top_nav">
            <div className="topNav_left">
                {
                    !showMenu ? <MenuFoldOutlined onClick={() => { selectShow(true) }} /> : <MenuUnfoldOutlined onClick={() => { selectShow(false) }} />
                }
                {/* 面包屑 */}
                <BreadItem></BreadItem>
            </div>
            <div className="topNav_right">
                {/* 搜索 */}
                <SerchItem></SerchItem>
            </div>
        </div>
    )
}



function SerchItem() {
    let [isShow, setIsShow] = React.useState(false)
    let [isFullscreen, setIsFullscreen] = React.useState(true)
    function show() {
        setIsShow(!isShow)
    }

    function fullscreen() {
        let docElm = document.documentElement;
        if (docElm.requestFullscreen) {
            docElm.requestFullscreen(); //实现全屏
        }
        setIsFullscreen(!isFullscreen)
    }
    function exitFullscreen() {
        let de = document;
        if (de.exitFullscreen) {
            de.exitFullscreen();
        } else if (de.mozCancelFullScreen) {
            de.mozCancelFullScreen();
        } else if (de.webkitCancelFullScreen) {
            de.webkitCancelFullScreen();
        }
        setIsFullscreen(!isFullscreen)
    }
    return (
        <div className="serchItem">
            <SearchOutlined onClick={() => show()} />
            {/* 条件渲染 */}
            {isShow ? <Input placeholder="serch" ref={input => { if (input != null) input.focus() }} /> : ''}
            {isFullscreen ? <ExpandOutlined onClick={() => fullscreen()} /> : <CompressOutlined onClick={() => exitFullscreen()} />}
            <DropDown></DropDown>

        </div>
    )
}

function DropDown() {
    let Navigate = useNavigate();
    function go(num){
        
        switch(num) {
            case 1:
            break;
            case 2:
                Navigate('/home/onepage');
                console.log('666')
                sessionStorage.setItem('navSelect','onepage')
                sessionStorage.setItem('keypath',JSON.stringify(['onepage']))
            break;
            case 5:
                //退出登录 => 清除所有缓存
                sessionStorage.clear()
                window.location.reload();
                break;
            default:
        }
    }
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <span onClick={() => go(1)}>个人中心</span>
            </Menu.Item>
            <Menu.Item key="1">
                <span onClick={() => go(2)}>首页</span>
            </Menu.Item>
            <Menu.Item key="2">
                <span onClick={() => go(3)}>项目地址</span>
            </Menu.Item>
            <Menu.Item key="3">
                <span onClick={() => go(4)}>Docs</span>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="4">
                <span onClick={() => go(5)}>退出登录</span>
            </Menu.Item>
        </Menu>
    );
    return (
        <div className="drop_down">
            <Dropdown overlay={menu} trigger={['click']} placement="bottom" arrow>
                <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" />
                    <CaretDownOutlined />
                </span>
            </Dropdown>
        </div >
    )
}