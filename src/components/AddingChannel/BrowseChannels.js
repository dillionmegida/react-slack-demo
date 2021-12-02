/** @format */

import styled from "styled-components";
import { useEffect, useState } from "react";
import { useChatContext } from "stream-chat-react";
import ChannelItem from "./ChannelItem";

const Container = styled.div`
	display: flex;

	ul {
		width: 100%;
		padding: 0;
	}
`;

export default function BrowseChannels() {
	const { client } = useChatContext();
	const [channels, setChannels] = useState([]);
	const [loadingChannels, setLoadingChannels] = useState(true);

	useEffect(() => {
		const fetchChannels = async () => {
			const response = await client.queryChannels();

			const filteredChannels = response.filter((c) => c.type === "team");
			setChannels(filteredChannels);
			setLoadingChannels(false);
		};

		fetchChannels();
	}, []);

	return (
		<Container>
			{loadingChannels ? (
				<div className="loading-text">Loading channels...</div>
			) : (
				<ul>
					{channels.map((c) => (
						<ChannelItem key={c.cid} onJoin={null} channel={c} />
					))}
				</ul>
			)}
		</Container>
	);
}
