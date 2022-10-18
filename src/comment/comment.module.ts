import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CommentService } from '@app/comment/comment.service'
import { CommentController } from '@app/comment/comment.controller'
import { CommentEntity } from '@app/comment/comment.entity'

@Module({
	controllers: [CommentController],
	providers: [CommentService],
	imports: [TypeOrmModule.forFeature([CommentEntity])]
})
export class CommentModule {}
