import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { VideoController } from '@app/video/video.controller'
import { VideoService } from '@app/video/video.service'
import { VideoEntity } from '@app/video/video.entity'

@Module({
	controllers: [VideoController],
	providers: [VideoService],
	imports: [TypeOrmModule.forFeature([VideoEntity])]
})
export class VideoModule {}
