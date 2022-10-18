import { IsString, MinLength } from 'class-validator'

export class AuthDto {
	@IsString()
	email: string

	@MinLength(6, {
		message: 'Не менее 6 символов!'
	})
	@IsString()
	password: string
}
