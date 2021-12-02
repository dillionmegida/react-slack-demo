/** @format */

import styled from "styled-components";
import { ChannelList } from "stream-chat-react";
import ChannelListContainer from "./ChannelListContainer";

const Container = styled.div`
	height: 100vh;
	background-color: #333;
	padding: 20px 10px;
	h2 {
		color: white;
		margin: 0 0 10px;
		font-size: 16px;
	}

	.str-chat {
		height: max-content;
		&.str-chat-channel-list {
			float: none;
		}
	}

	.channel-list {
		width: 100%;
		&__message {
			color: white;
		}
	}
`;

export default function CustomChannelList() {
	return (
		<Container>
			<h2>Channels</h2>
			<ChannelList
				List={(listProps) => <ChannelListContainer {...listProps} />}
			/>
		</Container>
	);
}
