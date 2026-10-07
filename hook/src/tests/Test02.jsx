import { useState } from "react"

const Test02 = () => {

    const [likes, setLikes] = useState(0);

    return (
    <div>
      <p>좋아요 {likes}</p>
      <button onClick={() => setLikes(likes + 1)}>👍 좋아요</button>
    </div>
  );
}

export default Test02