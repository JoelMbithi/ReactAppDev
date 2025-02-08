import React from 'react'
import "./MainContent.css"
 
const BackImg = ({heading,text}) => {
  return (
    <div className="MainContent"> 
      <div className='back-content'>
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default BackImg


/**
 * ANOTHER WAY OF PASSING PROPS
 * 
 
class BackImg extends Component {
  render() {
    return (
      <div className="backimg"> 
        <div className='back-content'>
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    )

  }

}

export default BackImg
 */