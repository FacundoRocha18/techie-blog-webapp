import styled from 'styled-components'
import { ThemeProps } from 'shared'

export const Author = styled('div')`
  align-items: center;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3, auto);
  width: fit-content;
`

export const AuthorAvatar = styled('img')`
  border-radius: 100%;
  grid-column: span 1 / span 1;
  height: 40px;
  width: 40px;

  @media only screen and (min-width: 768px) {
    & {
      height: 60px;
      width: 60px;
    }
  }
`

/**
 * TODO: Create new username feature on database, API and frontend. I.E.: an user named Facundo Rocha, the username could look like "@facurocha" or "@facurocha18". It can be created by the user (checking that is available) or the API will create a default one based on the user's full name.
 */

export const AuthorName = styled('p')`
  color: #b8b8b8;
  grid-column: span 1 / span 1;
`

export const AuthorTag = styled('span')`
  background-color: var(${({ theme }: ThemeProps) => theme.accent});
  border-radius: 4px;
  grid-column: span 1 / span 1;
  font-size: 16px;
  padding: 2px 6px;
`
