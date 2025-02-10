import { get } from "../../utils/request"

export const getExerciseList = async (path) => {
  const result = await get(`/exerciseList${path}`)
  return result
}