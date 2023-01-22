import styled from 'styled-components'

export interface ICContainer {
	columns: string
	gap: string
	rows: string
}

export const CContainer = styled.div<ICContainer>`
display: grid;
gap: ${props => props.gap}px;
grid-template-columns: repeat(${props => props.columns}, minmax(0, 1fr));
grid-template-rows: repeat(${props => props.rows}, minmax(0, 1fr));
height: fit-content;
`