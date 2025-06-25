import BagSummary from '../components/BagSummary';
import BagItem from '../components/BagItem';
import { useSelector } from 'react-redux';

function Bag() {
  const bag = useSelector((store) => store.bag);

  return (
    <main>
      <div className="bag-page-container">
        <div className="bag-items-section">
          {bag.length > 0 ? (
            bag.map((item) => <BagItem key={item.id} item={item} />)
          ) : (
            <p>Your bag is empty.</p>
          )}
        </div>
        <div className="bag-summary-section">
          <BagSummary />
        </div>
      </div>
    </main>
  );
}

export default Bag;
