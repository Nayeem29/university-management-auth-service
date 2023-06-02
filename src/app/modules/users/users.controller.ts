import { Request, Response } from 'express'
import usersService from './users.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await usersService.createNewUser(user)
    res.status(200).json({
      data: result,
      success: true,
      message: 'user created is successful',
    })
  } catch (err) {
    console.log(err)
    res.status(400).json({
      success: false,
      message: 'user is not created, unsuccessful',
    })
  }
}

export default {
  createUser,
}
