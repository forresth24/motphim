import axios from 'axios'

const URL = process.env.VERCEL_PROJECT_PRODUCTION_URL

export const api = axios.create({
  baseURL: `${URL}/api` || 'http://localhost:3001/api',
})
