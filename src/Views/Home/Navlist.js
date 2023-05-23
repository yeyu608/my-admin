import { Menu } from 'antd';
import {
    AppstoreFilled,
    ContainerOutlined,
    MailOutlined,
    SignalFilled,
    DashboardOutlined,
    FileTextOutlined,
} from '@ant-design/icons';

import { useNavigate } from "react-router-dom"
import React from 'react';

export default function Navlist(props) {
    const { SubMenu } = Menu;

    let Navigate = useNavigate() // 获取到跳转的方法
    let [activeNav,setActiveNav] = React.useState([`${sessionStorage.getItem('navSelect')?sessionStorage.getItem('navSelect'):'onepage'}`])
    // 点击导航
    function selectIndex(e) {
        // 获取到信息=> 跳转到当前点击的组件
        Navigate(`/home/${e.key}`)
        // 存放当前用户点击的导航信息
        setActiveNav(e.key)
        sessionStorage.setItem('navSelect',e.key)

        // keypath
        sessionStorage.setItem('keypath',JSON.stringify(e.keyPath))
    }
    return (
        <div id="navlist">
            <Menu
                defaultSelectedKeys={activeNav}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={props.showNav}
                onSelect={(e) => selectIndex(e)}
            >
                {/* 这个key就是页面的路径 */}
                <Menu.Item key="onepage" data-name="首页" icon={<DashboardOutlined />}>
                    首页
                </Menu.Item>
                <Menu.Item key="files" icon={<FileTextOutlined />}>
                    文档
                </Menu.Item>
                <Menu.Item key="3" icon={<ContainerOutlined />}>
                    icon
                </Menu.Item>
                <SubMenu key="组件" icon={<AppstoreFilled />} title="组件">
                    <Menu.Item key="uploadingimg">图片上传</Menu.Item>
                    <Menu.Item key="6">指令权限</Menu.Item>
                </SubMenu>
                <Menu.Item key="4" icon={<ContainerOutlined />}>
                    图标
                </Menu.Item>
                <SubMenu key="图表" icon={<SignalFilled />} title="图表">
                    <Menu.Item key="keyboardchart">键盘图表</Menu.Item>
                    <Menu.Item key="brokenline">折线图</Menu.Item>
                    <Menu.Item key="mixedcart">混合图表图</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<MailOutlined />} title="错误页面">
                    <Menu.Item key="7">404页面</Menu.Item>
                </SubMenu>
            </Menu>
        </div>
    )

}

/**
 *  defaultSelectedKeys => 初始选中的菜单项 key 数组 值是数组 => key
 *  defaultOpenKeys => 初始展开的SubMenu 菜单项 key 数组 => key
 *  inlineCollapsed => 用来判断菜单是展开还是收缩
 * 
 *  onSelect => 表示你选中哪一项
 */


/**react组件传递数据
 *  父组件给子组件 => 通过属性 props
 *  子组件给父组件传递数据 => 本质 => 触发父组件提供的方法
 *  需要父组件 向这个子组件传递一个方法
 *  需要在子组件中触发这个(方法调用 传递参数)
 * 
 * 
 * 
 */