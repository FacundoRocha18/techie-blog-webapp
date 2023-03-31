import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  AuthorAvatar,
  Author,
  AuthorName,
  StyledTitle,
} from 'components'
import { IPost, ThemeProps } from 'shared'
import { useThemeContext } from 'contexts/Theme/ThemeContext'

const StyledCardBody = styled('div')`
  display: grid;
  gap: 16px 0px;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(2, auto);
  grid-column: span 2 / span 2;
  height: fit-content;
  padding: 12px;

  @media only screen and (min-width: 768px) {
    & {
      grid-template-rows: repeat(3, auto);
    }
  }

  @media only screen and (min-width: 1024px) {
    & {
      padding: 0px;
    }
  }

  @media only screen and (min-width: 1920px) {
    & {
      padding: 0px 16px;
    }
  }
`

const StyledContentParagraph = styled('div')`
  color: #b8b8b8;
  display: none;
  grid-column: span 2 / span 2;
  grid-row: span 1 / span 1;
  grid-row-start: 2;
  position: relative;

  @media only screen and (min-width: 768px) {
    & {
      display: inline;
    }
  }

  @media only screen and (min-width: 1024px) {
    & p {
      overflow: hidden;
      max-height: 12rem;
      text-align: justify;
      text-overflow: ellipsis;
    }

    ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to left,
        var(${({ theme }: ThemeProps) => theme.background}),
        transparent
      );
    }
  }
`

const AuthorContainer = styled('div')`
  grid-column-start: 1;
  grid-row-start: 1;

  @media only screen and (min-width: 768px) {
    & {
      grid-row-start: 1;
    }
  }
`

export const CardBody = ({ data }: { data: IPost }) => {
  const { theme } = useThemeContext()

  return (
    <StyledCardBody>
      <AuthorContainer>
        <Author>
          <AuthorAvatar src={data.author_avatar} />
          <div>
            <Link to={`post/${data.post_uuid}`}>
              <StyledTitle aria-rowspan={1} aria-colspan={1} title={data.title}>
                {data.title}
              </StyledTitle>
            </Link>
            <AuthorName><a href="#">@{data.author_name}</a></AuthorName>
          </div>
        </Author>
      </AuthorContainer>
      <StyledContentParagraph theme={theme}>
        <p>{data.content}</p>
      </StyledContentParagraph>
    </StyledCardBody>
  )
}

CardBody.propTypes = {}
