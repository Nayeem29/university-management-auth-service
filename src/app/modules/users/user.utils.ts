import { User } from './users.model'

export const getLastUserId = async () => {
  // const example = await User.find().sort({ createdAt: -1 }).lean()
  // console.log(example)
  const lastUserId = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()
  // const lastUserId = await User.findOne(
  //   {},
  //   {
  //     id: 1,
  //     _id: 0,
  //   }
  // )
  //   .sort({
  //     createdAT: -1,
  //   })
  //   .lean()
  // console.log(lastUserId)
  return lastUserId?.id
  // return example[0]?.id
}
export const generateNewId = async () => {
  const currentId = (await getLastUserId()) || (0).toString()
  // const currentId = (await getLastUserId()) || (0).toString()
  // console.log(currentId)
  const newId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  console.log(newId)
  return newId
}
