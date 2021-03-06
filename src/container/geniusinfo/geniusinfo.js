import React from 'react'
import { NavBar, InputItem,TextareaItem,Button  } from 'antd-mobile'
import AvatarSelector from '../../component/avatar-selector/avatar-selector'
import {connect} from 'react-redux'
import {update} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'
@connect(
    state=>state.user,
    {update}
)
class GeniusInfo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title:'',
            desc:''
            
        }
    }


    onChange(key, val) {
        this.setState({
            [key]: val
        })
    }

    render() {
        const redirectTo = this.props.redirectTo
        const path = window.location.pathname
    
        return <div>
           {redirectTo&&redirectTo!==path? <Redirect to={this.props.redirectTo}></Redirect>:null}
            <NavBar mode="dark"  >牛人完善信息页</NavBar>
            <AvatarSelector
            selectAvatar={ (v)=>{
              this.setState({
                  avatar:v
              })
             }}
            ></AvatarSelector>
            <InputItem onChange={(v) => this.onChange('title', v)}>
                求职岗位
            </InputItem>
            <TextareaItem  
            onChange={(v) => this.onChange('desc', v)}
            rows={3}
            autoHeight
            title='个人简介'   
            >
            </TextareaItem >
            <Button 
            onClick={()=>{
                this.props.update(this.state)
            }}
            type='primary'>提 交</Button>
            {this.props.msg ? <p className="erro-msg">{this.props.msg}</p> : null}
        </div>
    }
}

export default GeniusInfo






