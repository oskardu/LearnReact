import React from 'react'  //React 要大写
import './Card.css'

//创建卡片组件,指定取值参数
const Card =props => (
    <div className="Card"> 
      <img src={props.img} />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    


    </div>
)

 


















// 导出为默认卡片
export default Card