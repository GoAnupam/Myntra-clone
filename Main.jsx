import Home from '../components/Home';
import { useSelector } from 'react-redux';

function Main() {
  const items = useSelector((store) => store.items || []);
  const products = useSelector((state) => state.products);
if (products.status === 'loading') return <p>Loading...</p>;
if (products.status === 'failed') return <p>Error loading products</p>;

  return (
    <main>
      <div className="items-container">
        {items.length > 0 ? (
          items.map((item) => <Home key={item.id} item={item} />)
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </main>
  );
}

export default Main;
