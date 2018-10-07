export class User {
	constructor(
		public name: string,
		public email: string,
		public password: string,
		public picture: string,
		public lastname?: string,
		public role?: string,
		public _id?: string,
		public isGoogleUser?: string
	) {}
}
