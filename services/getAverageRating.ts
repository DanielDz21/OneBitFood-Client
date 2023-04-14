import { average } from './average'

export function getAverageRating(ratings: number[]) {
  return ratings?.length === 0 ? '--' : average(ratings)
  }
