import { get } from "../../utils/request"

export const getProductList = async (path) => {
  const result = await get(`/product${path}`)
  return result
}