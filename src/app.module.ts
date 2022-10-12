import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { getTypeOrmConfig } from '@app/config/typeorm.config'
import { AppController } from '@app/app.controller'
import { AppService } from '@app/app.service'
import { UserModule } from '@app/user/user.module'

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getTypeOrmConfig
		}),
		UserModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
