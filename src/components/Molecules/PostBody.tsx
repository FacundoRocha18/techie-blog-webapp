import PropTypes from 'prop-types'
import { Image } from 'components'
import { IPost } from 'types'

export const PostBody = ({ post }: { post: IPost }) => {
  return (
    <div className='flex flex-col gap-20 items-center'>
      <Image
        url='https://www.amd.com/system/files/styles/600px/private/2022-11/1761310-amd-ryzen-9-7000-series-PIB-angle-1260x709.png?itok=_NVpbZqF'
        alt='AMD Ryzen 7000 series'
        height='h-auto'
        width='w-3/4'
        additionalStyles=''
      />
      <p className='mb-[20px] desktop:w-60%'>{post.content}</p>
    </div>
  )
}

PostBody.propTypes = {
  post: PropTypes.object.isRequired,
}
