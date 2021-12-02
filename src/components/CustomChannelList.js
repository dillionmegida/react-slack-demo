/** @format */

import styled from "styled-components";
import { ChannelList } from "stream-chat-react";
import ChannelListContainer from "./ChannelListContainer";

const Container = styled.div`
	height: 100vh;
	background-color: #333;
	padding: 20px 10px;

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		h2 {
			color: white;
			margin: 0 0 10px;
			font-size: 16px;
		}

		button {
			color: white;
			font-size: 20px;
			background: none;
			border: none;
			cursor: pointer;
		}
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

export default function CustomChannelList({ onClickAdd }) {
	return (
		<Container>
			<div className="header">
				<h2>Channels</h2>
				<button onClick={onClickAdd}>+</button>
			</div>
			<ChannelList
				List={(listProps) => <ChannelListContainer {...listProps} />}
			/>
		</Container>
	);
}
