import { get, post } from "../../utils/request"

export const getExerciseList = async (path) => {
  const result = await get(`exerciseList${path}`)
  return result
}
export const postExerciseList = async (object) => {
  const result = await post(`exerciseList`, object)
  return result
}