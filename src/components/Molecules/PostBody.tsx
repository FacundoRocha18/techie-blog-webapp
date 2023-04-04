import PropTypes from 'prop-types'
import { StyledImage } from 'components'
import { IPost } from 'shared'
import styled from 'styled-components'

const StyledBodyContainer = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media only screen and (min-width: 768px) {
    & {
      width: 90%;
    }
  }
`
const StyledBodyParagraph = styled('p')`
  @media only screen and (min-width: 768px) {
    width: 90%;
  }
`

export const PostBody = ({ post }: { post: IPost }) => {
  const paragraphs = post.content.split('\n\n')

  return (
    <StyledBodyContainer>
      {paragraphs.map((paragraph: string, index: number) => (
        <StyledBodyParagraph key={index}>{paragraph}</StyledBodyParagraph>
      ))}
      {/* <StyledImage
				src={
					'https://uacbbrykglstgwrecfde.supabase.co/storage/v1/object/sign/images/ryzen%207000.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcnl6ZW4gNzAwMC5qcGciLCJpYXQiOjE2Nzc2OTY0OTksImV4cCI6MTcwOTIzMjQ5OX0.Ol2O2kmyFW7wKukZOBgYOdftooQBFrOmhXrwIU7gyx8&t=2023-03-01T18%3A48%3A19.484Z'
				}
				alt={post.title + ', ' + post.theme}
				height='100%'
				width='100%'
			/> */}
    </StyledBodyContainer>
  )
}

PostBody.propTypes = {
  post: PropTypes.object.isRequired,
}
