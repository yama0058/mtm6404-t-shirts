const tshirtsData = [
  {
    title: 'Blue T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: 'green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: 'light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: 'purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: 'red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: 'teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
]

function TShirt(props) {
  const tshirt = props.tshirt;

  function handleQuantityChange(e) {
    const newQuantity = parseInt(e.target.value);
    props.onQuantityChange(tshirt.title, newQuantity);
  }

  function handleBuyClick() {
    props.onBuy(tshirt.title);
  }

  return (
    <div className="tshirt">
      <h3>{tshirt.title}</h3>
    <img src={'images/' + tshirt.image} alt={tshirt.title} width="100" />
      <p>Price: ${tshirt.price.toFixed(2)}</p>
      {tshirt.stock === 0 ? (
        <p><strong>Out of Stock</strong></p>
      ) : (
        <div>
          <p>Stock: {tshirt.stock}</p>
          <label>
            Quantity:
            <select value={tshirt.quantity} onChange={handleQuantityChange}>
              {Array.from({ length: tshirt.stock }, (_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
          </label>
          <button onClick={handleBuyClick}>Buy</button>
        </div>
      )}
    </div>
  );
}

function App() {
  const [tshirts, setTshirts] = React.useState(tshirtsData);

  function handleBuy(title) {
    setTshirts(prev =>
      prev.map(t =>
        t.title === title
          ? { ...t, stock: t.stock - t.quantity }
          : t
      )
    );
  }

  function handleQuantityChange(title, quantity) {
    setTshirts(prev =>
      prev.map(t =>
        t.title === title
          ? { ...t, quantity: quantity }
          : t
      )
    );
  }

return (
  <div>
    <h1>T-Shirt Store</h1>
    <div className="store">
      {tshirts.map(tshirt => (
        <TShirt
          key={tshirt.title}
          tshirt={tshirt}
          onBuy={handleBuy}
          onQuantityChange={handleQuantityChange}
        />
      ))}
    </div>
  </div>
);

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
