import React from "react";
import styled from "styled-components/native";

const StyledView = styled.View`background-color: papayawhip;`;

const StyledText = styled.Text`color: palevioletred;`;

export default function App () {
	return (
		<StyledView>
			<StyledText>Hello World!</StyledText>
		</StyledView>
	);
}
