import {useDispatch} from 'react-redux'
import { addToBag } from '../store/bagSlice';
function Home({ item }) {
  const dispatch=useDispatch()
  return (
    <div className="card">
      <img src={item.image} alt={item.item_name} />
      <div>{item.company}</div>
      <div>{item.item_name}</div>
      <div>₹{item.current_price}</div>
      <div>Returns in {item.return_period} days</div>
      <button className="add-to-cart" onClick={()=>dispatch(addToBag(item))}>Add To Cart</button>
    </div>
  );
}

export default Home;
