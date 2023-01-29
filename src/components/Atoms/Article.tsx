import styled from "styled-components";

export const StyledArticle = styled('article')`
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: 80px;
		height: 100%;
		margin: 0 auto;
		min-height: 100vh;
		padding: 16px;
		width: 100%;
		transition: all 150ms ease;

		@media (min-width: 768px) {
			& {
				display: flex;
				justify-content: center;
				padding: 32px;
			}
		}

		@media (min-width: 1080px) {
			& {
				display: flex;
			justify-content: center;
			padding: 32px;
			width: 60%;
			}
		}
`