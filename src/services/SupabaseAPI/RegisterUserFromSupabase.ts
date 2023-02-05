
export const RegisterUserSupabaseAPI = async (name: string, email: string, password: string) => {

	const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhY2JicnlrZ2xzdGd3cmVjZmRlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NDE3MDU4NywiZXhwIjoxOTg5NzQ2NTg3fQ.kJeFN0A_dc2oA8L_wt3Qt9dyZyVtVo-ZyhnD6JKVOlE'

	const headers = new Headers();
	headers.append('apikey', apiKey)
	headers.append('Authorization', 'Bearer ' + apiKey)
	headers.append('Content-Type', 'application/json')
	headers.append('Prefer', 'return=minimal')


	const user = JSON.stringify({
		'name': name,
		'email': email,
		'password': password,
		'address': '',
		'phone': ''
	});

	const requestOptions = {
		method: 'POST',
		headers: headers,
		body: user,
	};

	const response = await fetch('https://uacbbrykglstgwrecfde.supabase.co/rest/v1/users', requestOptions)
	console.log(await response)
}
