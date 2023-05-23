import React from 'react'

import { useRoutes,useLocation,useNavigate } from 'react-router-dom';
import routes from "./router/index";
function App() {
  let RouteObj = useRoutes(routes)
  let location = useLocation()
  let Navigate = useNavigate()
  React.useEffect(()=>{
    routerPower()
  },[])

  function routerPower(){
    if(location.pathname == '/'){
      // 外部的页面
    }else{
      //内部页面 =》 需要权限验证
      if(sessionStorage.getItem('token')){
        
      }else{
        // 没有登录
        Navigate('/')
      }
    }
  }
  return (
    <div className="App">
      {RouteObj}
    </div>
  );
}

export default App;
