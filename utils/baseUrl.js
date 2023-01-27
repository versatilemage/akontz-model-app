const baseUrl = process.env.NODE_ENV === "production" 
? 'https://main.d1zla24hv8trdr.amplifyapp.com' 
: 'http://localhost:3000';

export default baseUrl;