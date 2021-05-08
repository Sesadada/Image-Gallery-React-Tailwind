import {useState} from 'react'

const Image = ({image}) => {
    const [fontColor, setFontColor] = useState(image.avg_color)
    const styles = {
        color: `${fontColor}`
    }
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-2xl">
        <img src={image.src.tiny} alt="" className="w-full" />
          <div className="px-6 py-4">
            <div className="font-bold text-purple-500 text-xl mb-2">
               Photo by {image.photographer}
            </div>

        <div className='flex pb-3'>
         <p> <strong> Average Color: </strong></p>
          <p className='font-extrabold  pl-2' style={styles}> {fontColor} </p>
          </div>
          <div className='rounded-full h-24 w-24' style={{backgroundColor: `${fontColor}`, margin: 'auto'}}></div>

    </div>

        </div>
    )
}

export default Image
//"https://source.unsplash.com/random"