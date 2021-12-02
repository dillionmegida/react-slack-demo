/** @format */

import { useState, useEffect } from "react";

import { StreamChat } from "stream-chat";
import {
	Chat,
	Channel,
	Window,
	ChannelHeader,
	MessageInput,
	MessageList,
    ChannelList,
} from "stream-chat-react";
import 'stream-chat-react/dist/css/index.css';

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
	const [channel, setChannel] = useState(null);

	useEffect(() => {
		async function initChat() {
			const client = StreamChat.getInstance(API_KEY);

			const user = getRandomUser();

			client.connectUser(user, client.devToken(user.id));

			const channel = client.channel("team", "general", {
				name: "General",
				image: "https://picsum.photos/id/195/200/300",
			});

			await channel.create();
			channel.addMembers([user.id]);
			setChannel(channel);

			setChatClient(client);
		}

		initChat();

		return () => {
			if (chatClient) chatClient.disconnectUser();
		};
	}, []);

	if (!chatClient || !channel) return <></>;

	return (
		<div>
			<Chat client={chatClient} theme={"messaging light"}>
                <ChannelList />
				<Channel>
					<Window>
						<ChannelHeader />
						<MessageList />
						<MessageInput />
					</Window>
				</Channel>
			</Chat>
		</div>
	);
}

export default App;
