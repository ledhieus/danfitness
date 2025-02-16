import { get } from "../../utils/request"

export const getSingleWorkout = async (path) => {
  const result = await get(`singleWorkout${path}`)
  return result
}