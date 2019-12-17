import React, { Component } from 'react'

export default class Item extends Component {
    
    render() {
        let {item,index} = this.props;
        return (
            <div className={"title"+index}>
                <h3>{item.name}</h3>
                {
                    item.foods && item.foods.map((i,ind)=>{
                        return (
                            <dl key={ind}>
                                <dt>
                                    <img src={i.image} alt=""/>
                                </dt>
                                <dd>
                                    <p>{i.name}</p>
                                    <p>描述：{i.description}</p>
                                    <p>价格：{i.price}</p>
                                </dd>
                            </dl>
                        )
                    })
                }
        </div>
        )
    }
}
