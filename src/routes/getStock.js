import { Router } from 'express'
import { GetStockController } from '../controllers/getStockController.js'

const router = Router()

router.get('/api/stock/:codfilial/:codprod', GetStockController())