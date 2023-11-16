import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import { logger } from './logger'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export function getNameCards(): string[] | null {
  const dirCards = path.join(__dirname, '..', 'uploads', 'cards')
  const cards: string[] = []
  fs.readdirSync(dirCards).forEach((file) => {
    logger.info(file)
    cards.push(file.slice(0, file.length - 5))
  })
  return cards
}
