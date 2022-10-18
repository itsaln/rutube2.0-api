import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from '@app/user/user.entity'
import { SubscriptionEntity } from '@app/user/subscription.entity'

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(UserEntity)
		private readonly userRepository: Repository<UserEntity>,
		private readonly subscriptionRepository: Repository<SubscriptionEntity>,
	) {}

	// by id

	// update
}
