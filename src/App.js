import {useState,useEffect} from 'react';

import {StreamChat} from 'stream-chat';

const API_KEY=process.env.REACT_APP_API_KEY

function App() {
    const [chatClient, setChatClient] = useState(null);

    useEffect(() => {
        function initChat() {
            const client = StreamChat.getInstance(API_KEY);
        }

        initChat()
    }, [])

  return (
    <div>
    </div>
  );
}

export default App;
