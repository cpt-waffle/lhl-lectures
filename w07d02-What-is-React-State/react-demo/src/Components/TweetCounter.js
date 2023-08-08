import { useState } from "react"

const TweetCounter = () => {
  const [tweetNumber, setTweetNumber] = useState(140);

  const onTweetChange = (evt) => {
    console.log(evt.target.value.length)
    setTweetNumber(140 - evt.target.value.length);
  }



  return (
    <form>
      <input type="text" name="tweet" onChange={onTweetChange}/>
      <h2>{tweetNumber}</h2>
    </form>
  )
}

export default TweetCounter;