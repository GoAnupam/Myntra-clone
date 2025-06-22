import Home from './Home';
import { DEFAULT_ITEMS } from '../data/item';

function Items() {
  return (
    <div className="items-wrapper">
      {DEFAULT_ITEMS.map((item) => (
        <Home key={item.id} item={item} />
      ))}
    </div>
  );
}
export default Items;
