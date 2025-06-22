import React from 'react'
import { useSelector } from 'react-redux'
function BagSummary({}) {
  const bagItem=useSelector(store=>store.bag)
  const totalmrp=bagItem.reduce((sum,item)=>sum+item.original_price,0)
  const discount=totalmrp/10

    return (
   <div className="bag-summary">
     <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{totalmrp}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{discount}(10%)</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹99</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{totalmrp+discount+99}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>

   </div>
   
  
  )
}

export default BagSummary