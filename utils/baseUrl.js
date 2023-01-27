const baseUrl = process.env.NODE_ENV === "production" 
? 'http://localhost:3000' 
: 'https://main.d1zla24hv8trdr.amplifyapp.com';

export default baseUrl;