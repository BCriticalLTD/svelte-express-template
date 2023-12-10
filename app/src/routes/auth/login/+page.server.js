/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		console.log(data)
		const email = data.get('email');
		const password = data.get('password');
		console.log('hi', email, password)
		// const user = await db.getUser(email);
		// cookies.set('sessionid', await db.createSession(user));

		return { success: true };
	},
};