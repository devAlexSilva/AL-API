export const GetStockController = (req, res) => {
  const { codFilial, codProd } = req.params

  res.json({a: codFilial, b: codProd})
}