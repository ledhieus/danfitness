import { get } from "../../utils/request"

export const getMuscleList = async (path) => {
  const result = await get(`muscleList${path}`)
  return result
}