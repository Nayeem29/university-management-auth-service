import config from '../../../config'
import { generateNewId } from './user.utils'
import { IUser } from './users.interface'
import { User } from './users.model'

const createNewUser = async (user: IUser): Promise<IUser | null> => {
  const id = await generateNewId()
  user.id = id as string
  if (!user.password) {
    user.password = config.user_default_pass as string
  }

  const newUser = await User.create(user)
  if (!newUser) throw new Error('Failed to create a new user')
  return newUser
}

export default {
  createNewUser,
}
