import { IPost } from 'types'

export const fetchPostsFromSupabase = async () => {
  const url = 'https://uacbbrykglstgwrecfde.supabase.co/rest/v1/posts?select=*'

  const params = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
			'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhY2JicnlrZ2xzdGd3cmVjZmRlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NDE3MDU4NywiZXhwIjoxOTg5NzQ2NTg3fQ.kJeFN0A_dc2oA8L_wt3Qt9dyZyVtVo-ZyhnD6JKVOlE',
			'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhY2JicnlrZ2xzdGd3cmVjZmRlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NDE3MDU4NywiZXhwIjoxOTg5NzQ2NTg3fQ.kJeFN0A_dc2oA8L_wt3Qt9dyZyVtVo-ZyhnD6JKVOlE'
    },
  }

  const response = await fetch(url, params)

  const data = await response.json()

  return data
}
