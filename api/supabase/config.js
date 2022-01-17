require('dotenv').config();
module.exports = {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_API_KEY,
}
