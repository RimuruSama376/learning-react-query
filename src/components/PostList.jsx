import { useQuery } from '@tanstack/react-query'
import { fetchPosts } from '../api/api'

const PostList = () => {
  const {
    data: postData,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts
  })
  return (
    <div className='posts-container'>
      {isLoading && <p>Loading...</p>}
      {isError && <p>{error}</p>}
      {postData.map((d) => (
        <div key={d?.id} className='post'>
          <div className='post-title'>{d?.title}</div>
          <div className='tags-container'>
            {d.tags.map((tag) => (
              <span key={tag} className='post-tag'>{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostList