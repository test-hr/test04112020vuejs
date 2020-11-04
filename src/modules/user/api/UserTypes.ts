import { User } from '@/modules/user/User';

export type UserResponse = User;

export interface UserRequest extends Partial<User> {
}
