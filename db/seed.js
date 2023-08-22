const axios = require('axios');
const pgp = require("pg-promise")();
const db = require("../db/dbConfig.js");
const apiUrl = process.env.API_KEY;

// Used to insert Data into the users database by gathering info from an API
axios.get(apiUrl)
.then(response => {
  const apiData = response.data.results;

  // Prepare and execute INSERT queries
  const insertQueries = apiData.map(user => {
    const { picture, name, location, login, dob, registered } = user
    return db.none(`INSERT INTO users (profile_picture, username, bio, looking_for_group, date_created)
      VALUES ($1, $2, $3, $4, $5);`,
      [
        picture.large,
        login.username,
        `My name is ${name.first} ${name.last} and Im from ${location.country}`,
        dob.age > 30,
        registered.date
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
