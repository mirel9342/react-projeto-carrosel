import { useState, useEffect, useRef} from 'react'
import './App.css';
import { motion } from 'framer-motion'
import image1 from '../src/images/1.jpg'
import image2 from '../src/images/2.jpg'
import image3 from '../src/images/3.jpg'
import image4 from '../src/images/4.jpg'

const images = [ image1, image2, image3,image4]


function App() {
  const carousel = useRef();
  const [width, setWidth] = useState(0)

  useEffect(() => {  
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidt)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidt  )

  }, [])


  return (
    <div className="App">


      <motion.div className='carouse1'whileTap={{cursor:"grabbing"}}>
        <motion.div 
        className='inner'
        drag="x"
        draggConstraints={{ right: 0, left: -width}}
        initial={{ x: 100}}
        animate={{ v: 0}}
        transition={{duration: 0.8 }}
        >


          {images.map(image => (  
          <motion.div className='item' key={image}>
            <img src={image} alt="Texto alt"/>
          </motion.div>  
          
            
          ))};

        </motion.div>
       

      </motion.div>
    </div>
  );
}

export default App;
