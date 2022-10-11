import cloudinary from 'cloudinary'

const { CLOUD_NAME, API_KEY, API_SECRET } = process.env;

export const cloudConnection = cloudinary.v2;

cloudConnection.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET
})