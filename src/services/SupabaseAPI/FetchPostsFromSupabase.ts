import { IPost } from 'types'

export const fetchPostsFromSupabase = async (): Promise<IPost[]> => {
  const url = 'https://uacbbrykglstgwrecfde.supabase.co/rest/v1/posts?select=*'

	const headers = new Headers()
	headers.append('Content-Type', 'application/json;charset=utf-8')
	headers.append('apikey', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhY2JicnlrZ2xzdGd3cmVjZmRlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NDE3MDU4NywiZXhwIjoxOTg5NzQ2NTg3fQ.kJeFN0A_dc2oA8L_wt3Qt9dyZyVtVo-ZyhnD6JKVOlE')
	headers.append('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhY2JicnlrZ2xzdGd3cmVjZmRlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NDE3MDU4NywiZXhwIjoxOTg5NzQ2NTg3fQ.kJeFN0A_dc2oA8L_wt3Qt9dyZyVtVo-ZyhnD6JKVOlE')

  const params = {
    method: 'GET',
    headers: headers
  }

  const response = await fetch(url, params)

  const data: IPost[] = await response.json()

  return data
}
