import { get } from "../../utils/request"


export const getWorkout = async (path) => {
  const result = await get(`/workout${path}`)
  return result
}