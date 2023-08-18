const axios = require('axios');
const pgp = require("pg-promise")();
const db = require("../db/dbConfig.js");
const apiUrl = process.env.API_KEY;

axios.get(apiUrl)
.then(response => {
  const apiData = response.data.results;
  
  // Prepare and execute INSERT queries
  const insertQueries = apiData.map(user => {
    return db.none(`INSERT INTO users (profile_picture, username, bio, looking_for_group, date_created)
      VALUES ($1, $2, $3, $4, $5);`,
      [
        user.picture.thumbnail,
        `My name is ${user.name.first} ${user.name.last} and Im from ${user.location.country}`,
        user.login.username,
        user.dob.age > 30,
        user.registered.date
      ]
    );
  });

  // Execute all INSERT queries in a single transaction
  return db.tx(t => t.batch(insertQueries));
})
.then(data => {
  console.log('Data inserted successfully:', data);
})
.catch(error => {
  console.error('Error:', error);
})
.finally(() => {
  // Disconnect from the database
  pgp.end();
});
