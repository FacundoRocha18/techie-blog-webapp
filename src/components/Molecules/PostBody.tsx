import PropTypes from 'prop-types'
import { StyledImage } from 'components'
import { IPost } from 'types'
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
  return (
    <StyledBodyContainer>
      <StyledBodyParagraph>{post.content}</StyledBodyParagraph>
      <StyledBodyParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget condimentum quam.
        Nulla viverra consequat eros, eget semper ligula iaculis vel. Pellentesque lobortis nulla
        sed ligula efficitur aliquam. Phasellus sed tellus tincidunt, commodo risus iaculis,
        dignissim lorem. Praesent fermentum lorem in elit maximus convallis. Vivamus ac interdum
        dui. Vivamus et tincidunt eros, vitae sollicitudin est. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Nunc a elit justo. Sed vel lectus
        est. Etiam aliquet, nisl in tempus varius, magna sem fringilla nulla, eu laoreet elit urna
        et nulla. Sed tellus purus, malesuada a neque ut, porttitor semper nunc. In efficitur, elit
        interdum malesuada pharetra, lectus sem vulputate nisi, non euismod mauris orci sit amet
        turpis. Ut iaculis lectus ut lorem fringilla, ut vestibulum elit pulvinar. Nulla convallis
        vitae lectus vel vulputate. Fusce sit amet tortor ac ipsum scelerisque fringilla sit amet
        eget felis. Aenean id leo lobortis, consequat nisi eu, congue dolor. Nunc volutpat sapien et
        nunc varius bibendum. Praesent hendrerit fermentum ligula, varius pretium urna pellentesque
        vitae. Nullam et nunc lobortis, consequat libero nec, eleifend urna.
      </StyledBodyParagraph>
      <StyledImage
        src={
          'https://uacbbrykglstgwrecfde.supabase.co/storage/v1/object/sign/images/ryzen%207000.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcnl6ZW4gNzAwMC5qcGciLCJpYXQiOjE2Nzc2OTY0OTksImV4cCI6MTcwOTIzMjQ5OX0.Ol2O2kmyFW7wKukZOBgYOdftooQBFrOmhXrwIU7gyx8&t=2023-03-01T18%3A48%3A19.484Z'
        }
        alt={post.title + ', ' + post.theme}
        height='100%'
        width='100%'
      />
      <StyledBodyParagraph>{post.content}</StyledBodyParagraph>
    </StyledBodyContainer>
  )
}

PostBody.propTypes = {
  post: PropTypes.object.isRequired,
}
