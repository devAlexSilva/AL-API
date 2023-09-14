import { Login } from "./login.js"

export const GetStockController = async (req, res) => {
  const { codFilial, codProd } = req.params

  await Login()
  res.json({ a: codFilial, b: codProd })
}