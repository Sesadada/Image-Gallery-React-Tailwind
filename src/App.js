import {useState, useEffect} from 'react'


function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState('flowers')

  useEffect(()=> {
    fetch(`https://api.pexels.com/v1/search?query=${term}&per_page=10`,
    {headers: {
      Authorization: `${process.env.REACT_APP_PEXELS}`
    }}).then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }, [term])

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-2xl">
    <img src="https://source.unsplash.com/random" alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
           Photo by John Doe
        </div>
          <ul>
            <li>
              <strong>Views: </strong>
              4000
            </li>
    <li>
      <strong>Likes: </strong>
      300
    </li>
    <li>
      <strong>Downloads: </strong>
      480
    </li>
  </ul>
</div>
<div className="px-6 py-4">
  <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
    #tag 1
  </span>
  <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
    #tag 2
  </span>
  <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
    #tag 3
  </span>
</div>
    </div>
  );
}

export default App;
