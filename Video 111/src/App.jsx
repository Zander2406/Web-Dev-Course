import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'


function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch_posts();
  }, [])

  const fetch_posts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    setData(await response.json());
  }

  return (
    <>
      <div className="cards flex gap-3 flex-col">
        {data.map(post => {
          return <Card key={post.id} post={post} />
        })}
      </div>
    </>
  )
}

export default App
