import { Column, Entity, OneToMany } from 'typeorm'
import { Base } from '@app/utils/base'
import { VideoEntity } from '@app/video/video.entity'
import { SubscriptionEntity } from '@app/user/subscription.entity'

@Entity('User')
export class UserEntity extends Base {
	@Column({ default: '' })
	name: string

	@Column({ unique: true })
	email: string

	@Column({ select: false })
	password: string

	@Column({ default: false, name: 'is_verified' })
	isVerified: boolean

	@Column({ default: 0, name: 'subscribers_count' })
	subscribersCount?: number

	@Column({ default: '', type: 'text' })
	description: string

	@Column({ default: '', name: 'avatar_path' })
	avatarPath: string

	@OneToMany(() => VideoEntity, video => video.user)
	videos: VideoEntity[]

	@OneToMany(() => SubscriptionEntity, subscription => subscription.fromUser)
	subscriptions: SubscriptionEntity[]

	@OneToMany(() => SubscriptionEntity, subscription => subscription.toChannel)
	subscribers: SubscriptionEntity[]
}
