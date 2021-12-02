/** @format */

import { useState, useEffect } from "react";

import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";

const API_KEY = process.env.REACT_APP_API_KEY;

const USER1 = {
	id: "user1",
	name: "user1",
	image: "https://picsum.photos/id/195/200/300",
};

const USER2 = {
	id: "user2",
	name: "user2",
	image: "https://picsum.photos/id/195/200/300",
};

const USER3 = {
	id: "user3",
	name: "user3",
	image: "https://picsum.photos/id/195/200/300",
};

const users = [USER1, USER2, USER3];

const getRandomUser = () => {
	const randomIndex = Math.floor(Math.random() * users.length);
	return users[randomIndex];
};

function App() {
	const [chatClient, setChatClient] = useState(null);

	useEffect(() => {
		function initChat() {
			const client = StreamChat.getInstance(API_KEY);

			const user = getRandomUser();

			client.connectUser(user, client.devToken(user.id));

			setChatClient(chatClient);
		}

		initChat();
	}, []);

	if (!chatClient) return <></>;

	return (
		<div>
			<Chat client={chatClient} theme={"messaging light"}></Chat>
		</div>
	);
}

export default App;
