export default {
  /**
   * `true` se estiver em produção
   */
  PRODUCTION: process.env.NODE_ENV === 'production',
  /**
   * url dos recursos de criação de dataset (intervalos de música)
   */
  API_URL: 'http://localhost:8080'
  
}