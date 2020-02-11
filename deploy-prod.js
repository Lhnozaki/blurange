const knex = require("./server/database/knex");

const DELAY = 3000;

function testConnection() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Polling for DB Connection...");
      knex.migrate
        .latest()
        .then(resolve)
        .catch(() => {
          resolve(testConnection());
        });
    }, DELAY);
  });
}

// migrate db
testConnection()
  .then(() => {
    console.log("Migration and Seeds Finished");
  })
  // run server
  .then(() => {
    require("./server/server");
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
