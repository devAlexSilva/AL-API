import { Router } from 'express'
import { GetStockController } from '../controllers/getStockController.js'

export const router = Router()

router.get('/api/v1/stock/:codFilial/:codProd', GetStockController)