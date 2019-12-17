import React, { Component } from 'react'
import GoLogin from '../../../utils/isLogin'

class My extends Component {
    render() {
        return (
            <div>
                My页面
            </div>
        )
    }
}

export default GoLogin(My)
