import React from 'react';
import { Breadcrumb } from 'antd';
import { useLocation } from 'react-router-dom';

export default function BreadItem() {

    // 获取到当前路由信息
    let location = useLocation()

    // 初始化一个数据 显示面包屑的第二项

    let [breadOne, setBreadOne] = React.useState()
    let [breadTwo, setBreadTwo] = React.useState()
    // 定义一个路由数据表
    let routerList = [
        { path: 'onepage', name: '首页' },
        { path: 'files', name: '文档' },
        { path: 'uploadingimg', name: '上传图片' },
        { path: 'brokenline', name: '折线图' },
        { path: 'keyboardchart', name: '键盘图表' },
        { path: 'mixedcart', name: '混合图表' },
    ]
    // 监听路由地址的改变
    React.useEffect(() => {
        changeBread()
    }, [location])

    // 获取到最新的值
    function changeBread() {
        // 1、处理用户点击的是没有分层 => key.path
        let arr = JSON.parse(sessionStorage.getItem('keypath'))
        if (!arr) return false; //判断是否有值
        if (arr.length == 1) { //有值 用户点击侧边栏导航 没有分层
            // 根据当前的路由 => 去路由表中找到当前的组件名称
            if (arr[0] == 'onepage') {
                setBreadOne()
                setBreadTwo()
            } else {
                let ValueObj = routerList.find((item, index) => {
                    return location.pathname == `/home/${item.path}`
                })
                if(!ValueObj) return false;
                console.log(ValueObj)
                setBreadOne(ValueObj.name)
                setBreadTwo() //显示分层
            }
        } else {
            let ValueObj = routerList.find((item, index) => {
                return location.pathname == `/home/${item.path}`
            })
            setBreadOne(arr[1])
            setBreadTwo(ValueObj.name)//显示分层
        }

    }
    return (
        <div id="BreadItem">
            <Breadcrumb>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                <Breadcrumb.Item>
                    {breadOne}
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    {breadTwo}
                </Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}

/**
 *  <Breadcrumb.Item></Breadcrumb.Item>
 * 1、用户进入后台管理系统 => 默认是首页
 * 2、用户点击侧边栏导航，需要显示你点击的谁 => 1 没有分层  2 有分层
 *  (1)通过 keypath 进行判断 => 如果这个数组长度 为1表示没有分层 为2 有分层
 * 
 * 3：需要在头部组件知道用户你点击了那个 => useLocation
 * 4: useEffect使用 => 监听路由地址的改变
 * 
 */
