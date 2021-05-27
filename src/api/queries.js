const Pool = require('pg').Pool
const pool = new Pool({
    user: 'xcehgcboozmzak',
    host: 'ec2-34-232-191-133.compute-1.amazonaws.com',
    database: 'df3o8hs21f7ede',
    password: 'a30babbfeccd29575853794f5cc31a818eaba71f2782c9a1145b34f1e40b41ba',
    port: 5432,
    ssl: true
})

pool.on('connect', client=> {
    console.log("connection successful!")
})

const addUser = (req, res) => {
    pool.query("INSERT INTO public.users(email_address, fish_count_sensativity)" +
       "VALUES (nicholas@oliveira.me, 3)", (error, results) => {
           console.log(error)
           console.log("inside the nested query")
       })
}

module.exports = {
    addUser
}