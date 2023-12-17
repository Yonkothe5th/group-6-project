import React from 'react';

function Shop() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    // Simulating fetching data from an API
    fetch('https://liquer-world-sdf.onrender.com/Stock')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('An error occurred while fetching data.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="shop-container">
      {loading && <p className="loading-message">Loading...</p>}
      {error && 
function Shop(){
    return (
      
        <div>
            <p>Display Goods</p>
        </div>
    )
}

export default Shop;