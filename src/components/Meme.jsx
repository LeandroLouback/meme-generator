import memesData from "../assets/memesData"
import { useState } from "react"

function Meme() {
  const [meme, setMeme] = useState({
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  function handleChange(event) {
      const {name, value} = event.target
      setMeme(prevMeme => {
          return {
              ...prevMeme,
              [name]: value
          }
      })
  }

  const [allMemeImages, setAllMemeImages] = useState(memesData)

  function getMemeImage() {
      const memesArray = allMemeImages.data.memes
      const randomNumber = Math.floor(Math.random() * memesArray.length)
      const url = memesArray[randomNumber].url
      setMeme(prevMeme => ({
          ...prevMeme,
          randomImage: url
      }))
  }

  return (
      <main>
          <div className="form">
              <input
                  type="text"
                  placeholder="Top text"
                  className="form--input"
                  name="topText"
                  onChange={handleChange}
                  value={meme.topText}
              />
              <input
                  type="text"
                  placeholder="Bottom text"
                  className="form--input"
                  name="bottomText"
                  onChange={handleChange}
                  value={meme.bottomText}
              />
              <button
                  className="form--button"
                  onClick={getMemeImage}
              >
                  Get a new meme image
              </button>
          </div>
          <div className="meme">
              <img src={meme.randomImage} className="meme--image" />
              <h2 className="meme--text top">{meme.topText}</h2>
              <h2 className="meme--text bottom">{meme.bottomText}</h2>
          </div>
      </main>
  )
}

export default Meme

