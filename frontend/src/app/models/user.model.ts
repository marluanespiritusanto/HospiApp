export class User {
	constructor(
		public name: string,
		public email: string,
		public password: string,
		public lastname?: string,
		public role?: string,
		public id?: string,
		public isGoogleUser?: string
	) {}
}
