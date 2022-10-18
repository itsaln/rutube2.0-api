import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { JwtModule } from '@nestjs/jwt'
import { JwtStrategy } from '@app/auth/strategies/jwt.strategy'
import { getJwtConfig } from '@app/config/jwt.config'
import { AuthController } from '@app/auth/auth.controller'
import { AuthService } from '@app/auth/auth.service'
import { UserEntity } from '@app/user/user.entity'

@Module({
	controllers: [AuthController],
	providers: [AuthService, JwtStrategy],
	imports: [
		ConfigModule,
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getJwtConfig
		}),
		TypeOrmModule.forFeature([UserEntity])
	]
})
export class AuthModule {}
