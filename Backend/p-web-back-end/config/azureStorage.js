import 'dotenv/config'

export default {
  connectionString: process.env.AZURE_STORAGE_CONNECTION_STRING,
  containerName: process.env.CONTAINER_NAME || 'uploads'
}