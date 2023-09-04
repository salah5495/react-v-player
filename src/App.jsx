import { useState } from "react";

import VideoPlayer from "./components/VideoPlayer";

function App() {
  const [count, setCount] = useState(0);

  return <VideoPlayer />;
}

export default App;
