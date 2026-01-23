require('dotenv').config();

module.exports = {
    connectionString: process.env.AZURE_STORAGE_CONNECTION_STRING,
    containerName: process.env.CONTAINER_NAME || 'uploads'
};
