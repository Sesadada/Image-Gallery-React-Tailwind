import {useState, useEffect} from 'react'
import Image from './components/Image'


function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState('flowers')
  const [temp, setTemp] = useState('')

  const updateTerm = (e) => {
  setTemp(
    e.target.value
  )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTerm(temp)
  }
  const cancelPlaceholder = (e) => {
    e.target.value? e.target.placeholder = "": e.target.placeholder = term
  }

  useEffect(()=> {
    fetch(`https://api.pexels.com/v1/search?query=${term}&per_page=9`,
    {headers: {
      Authorization: `${process.env.REACT_APP_PEXELS}`
    }}).then(res => res.json())
    .then(data => {
      setImages(data.photos)
      setIsLoading(false)
    })
    .catch(err => console.log(err))
  }, [term])


  return (
<div>
<h1 className='p-5 text-6xl text-pink-400 text-center font-black md:font-thin'>Image Gallery</h1>
<form onSubmit={handleSubmit} className="text-center pb-6">
  <input onClick={cancelPlaceholder} onChange={updateTerm} value={temp}type="text" placeholder={term} className='shadow-lg rounded-md border py-1 px-3 mr-3 text-grey-darkest focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-transparent'/>
  <input type="submit" value="Submit" className='shadow-lg hover:shadow hover:text-white bg-pink-200 rounded-md py-1 px-6'></input>
</form>
{isLoading? <h1 className='text-6xl text-center mx-auto mt-32'>Loading...</h1>: <div className="container mx-auto">
  <div className="grid grid-cols-3 gap-4">
    {images.map(image => <Image key={image.id} image={image}/>)}
  </div>
</div>}
  
</div>
  );
}

export default App;
