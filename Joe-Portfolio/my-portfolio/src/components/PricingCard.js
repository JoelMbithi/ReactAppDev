import React from 'react'
import './PricingCard.css'
import { Link } from 'react-router-dom'
const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
          <div className="card">
            <h3>- Basic -</h3>
            <span className="bar"></span>   
            <p className="btc">$ 100</p>
            <p>- 3 days -</p>
            <p>- 3 Pages -</p>
            <p>- Features -</p>
            <p>- Responsive Design -</p>

           <Link to="/contact" className="btn">
           PURCHASE NOW
           </Link>
           </div>

           <div className="card">
            <h3>- Standard -</h3>
            <span className="bar"></span>   
            <p className="btc">$ 200</p>
            <p>- 7 days -</p>
            <p>- 5 Pages -</p>
            <p>- Features -</p>
            <p>- Responsive Design -</p>
            <Link to="/contact" className="btn">
            PURCHASE NOW
            </Link>
           </div>

            <div className="card">
            <h3>- Premium -</h3>
             <span className="bar"></span>   
             <p className="btc">$ 300</p>
             <p>- 14 days -</p>
             <p>- 10 Pages -</p>
             <p>- Features -</p>
                <p>- Responsive Design -</p>
             <Link to="/contact" className="btn">
             PURCHASE NOW
             </Link>
             </div>
        </div>
    

    </div>
  )
}

export default PricingCard
