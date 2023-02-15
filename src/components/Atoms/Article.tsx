import styled from "styled-components"

export const StyledArticle = styled('article')`
		display: flex;
		flex-direction: column;
		height: 100%;
		margin: 0 auto;
		min-height: 100vh;
		padding: 16px;
		width: 100%;
		transition: all 150ms ease;

		@media only screen and (min-width: 768px) {
			& {
				display: flex;
				padding: 32px;
			}
		}

		@media only screen and (min-width: 1024px) {
			& {
				width: 80%;
			}
		}

		@media only screen and (min-width: 1920px) {
			& {
				width: 60%;
			}
		}

		@media only screen and (min-width: 2560px) {
			& {
				width: 50%;
			}
 		}
`