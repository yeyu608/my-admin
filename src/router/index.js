import Home from '../Views/Home/home'
import Login from '../Views/Login/index'
import OnePage from '../Views/onePage/index'
import Files from '../Views/Files/index'
import UploadingImg from '../Views/UploadingImg/index'
import Brokenline from '../Views/Charts/Brokenline/index'
import Keyboardchart from '../Views/Charts/Keyboardchart/index'
import Mixedchart from '../Views/Charts/Mixedchart/index'


// 创建路由表
let routes = [
    {
        path: '/',
        meta: { token: true },
        element: <Login></Login>
    },
    {
        path: '/home',
        element: <Home></Home>,
        children: [
            { path: 'onepage', element: <OnePage></OnePage> },
            { path: 'files', element: <Files></Files> },
            { path: 'uploadingimg', element: <UploadingImg></UploadingImg>},
            { path: 'brokenline', element: <Brokenline></Brokenline>},
            { path: 'keyboardchart', element: <Keyboardchart></Keyboardchart>},
            { path: 'mixedcart', element: <Mixedchart></Mixedchart>}
        ]
    }
]

export default routes