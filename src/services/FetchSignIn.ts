
export const SignIn = (email: string, password: string) => {

	const headers = new Headers();
	headers.append("Content-Type", "application/json");

	const user = JSON.stringify({
		"name": "Facundo Rocha",
		"email": email,
		"password": password,
		"address": "Sargo M31 S3",
		"phone": "096989063"
	});

	const requestOptions = {
		method: 'POST',
		headers: headers,
		body: user,
	};

	fetch("http://localhost:8000/api/users", requestOptions)
		.then(response => response.text())
		.then(result => console.log(result))
		.catch(error => console.log('error', error));
}
