
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Example from './Example';
import UseState from './components/UseState/UseState';
import Remove from './components/UseState/Remove';
import UseEffect from './components/UseState/UseEffect';
import FetchData from './components/UseState/FetchData';

function App() {

  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 19.99,
      description: "This is the first product.",
    },
    {
      id: 2,
      name: "Product 2",
      price: 29.99,
      description: "This is the second product.",
    },
    {
      id: 3,
      name: "Product 3",
      price: 39.99,
      description: "This is the third product.",
    },
    {
      id: 4,
      name: "Product 4",
      price: 49.99,
      description: "This is the fourth product.",
    },
  ];

  return (
    <>
      <h1 className='text-center font-medium text-5xl my-8'>Welcome to the Core Concepts of React!!</h1>

      {/* Card */}
      <div className='grid grid-cols-3 gap-6'>
        {
          products.map(product=> <Card product={product.name} key={product.id}></Card>)
        }
      </div>
      <Example>
        <p>Hello! I am Children!</p>
      </Example>

      <UseState></UseState>
      <Remove></Remove>
      <UseEffect></UseEffect>
      <FetchData></FetchData>
    </>
  )
}

export default App
