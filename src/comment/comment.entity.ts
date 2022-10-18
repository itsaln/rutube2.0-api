import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { UserEntity } from '@app/user/user.entity'
import { Base } from '@app/utils/base'
import { VideoEntity } from '@app/video/video.entity'

@Entity('Comment')
export class CommentEntity extends Base {
	@Column({type: 'text'})
	message: string

	@ManyToOne(() => UserEntity, user => user.videos)
	@JoinColumn({name: 'user_id'})
	user: UserEntity

	@ManyToOne(() => VideoEntity, video => video.comments)
	@JoinColumn({name: 'video_id'})
	video: VideoEntity
}
