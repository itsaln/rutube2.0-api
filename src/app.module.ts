import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { getTypeOrmConfig } from '@app/config/typeorm.config'
import { AppController } from '@app/app.controller'
import { AppService } from '@app/app.service'
import { UserModule } from '@app/user/user.module'
import { VideoModule } from '@app/video/video.module'
import { CommentModule } from '@app/comment/comment.module'
import { AuthModule } from '@app/auth/auth.module'

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getTypeOrmConfig
		}),
		AuthModule,
		UserModule,
		VideoModule,
		CommentModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
