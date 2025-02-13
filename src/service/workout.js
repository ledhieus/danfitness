import { get, post } from "../../utils/request"


export const getWorkout = async (path) => {
  const result = await get(`workout${path}`)
  return result
}

export const postWorkout = async (options) => {
  const result = await post(`workout`, options)
  return result
}