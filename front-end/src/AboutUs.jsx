import { useEffect, useState } from 'react'

import axios from 'axios'

import './AboutUs.css'

const AboutUs = props => {

  const [title, setTitle] = useState('')

  const [name, setName] = useState('')

  const [paragraphs, setParagraphs] = useState([])

  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {

    const fetchAboutUs = async () => {

      const response = await axios.get(

        `${import.meta.env.VITE_SERVER_HOSTNAME}/about-us`,

      )

      setTitle(response.data.title)

      setName(response.data.name)

      setParagraphs(response.data.paragraphs)

      setImageUrl(response.data.imageUrl)
    }

    fetchAboutUs()

  }, [])

  return (
    <div className="AboutUs-container">
      <h1>{title}</h1>

      <h2>{name}</h2>

      {paragraphs.map((paragraph, index) => (

        <p key={index}>{paragraph}</p>
      ))}

      <img 
        className="AboutUs-image"
      
      src={imageUrl} alt={name} />
    </div>
  )
}

export default AboutUs