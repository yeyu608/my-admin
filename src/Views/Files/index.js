import {useContext} from 'react'
import Slicon from '../../router/Lxcontext'
import { Consumer } from '../../router/Lxcontext'
export default function Files(props){
    const cc = useContext(Slicon)
    console.log()
    return (
        <div id="files">
            文档
          <Consumer>
            {value=><h1>{value}</h1>}
          </Consumer>  
        </div>
    )
}