/* eslint-disable camelcase */
const properties = require('./json/properties.json');
const users = require('./json/users.json');

const { Pool } = require('pg');
const config = {
  user:'dev',
  password:'123',
  host:'localhost',
  database:'lightbnb',
  port: 5432
};
const pool = new Pool(config);
pool.connect(()=>{
  console.log('Connected successfuly to the database');
});

// pool.on('error', (err, client) => {
//   console.error('Unexpected error on idle client', err);
//   process.exit(-1);
// });

// pool.query(`SELECT title FROM properties LIMIT 10;`).then(response => {
//   console.log(response);
// });
/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = async function(email) {
  return pool
    .query(`SELECT * FROM users WHERE email = $1`, [email])
    .then((result) => {
      console.log(result.rows);
      return result.rows[0];
    })
    .catch((err) => {
      console.error(err.message);
    });
};
//   let user;
//   for (const userId in users) {
//     user = users[userId];
//     if (user.email.toLowerCase() === email.toLowerCase()) {
//       break;
//     } else {
//       user = null;
//     }
//   }
//   return Promise.resolve(user);
// };
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = async function(id) {
  return pool
    .query(`SELECT * FROM users WHERE users.id = $1`, [id])
    .then((result) => {
      console.log(result);
      return result.rows.id;
    })
    .catch((err) => {
      console.error(err.message);
    });
};
exports.getUserWithId = getUserWithId;


/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser = async function(user) {
  const {
    name,
    email,
    password
  } = user;
  return pool
    .query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *`, [name, email, password])
    .then((result) => {
      console.log(result);
      return {
        id: result.rows.id,
        name,
        email
      };
    })
    .catch((err) => {
      console.error(err.message);
    });
  // const userId = Object.keys(users).length + 1;
  // user.id = userId;
  // users[userId] = user;
  // return Promise.resolve(user);
};
exports.addUser = addUser;

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function(guest_id, limit = 10) {
  return pool
    .query(`SELECT * FROM reservations where guest_id = $1 LIMIT $2`, [guest_id, limit])
    .then((result) => {
      console.log(result);
      return result.rows;
    })
    .catch((err) => {
      console.error(err.message);
    });
  // return getAllProperties(null, limit);
};
exports.getAllReservations = getAllReservations;

/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */
const getAllProperties = async(options, limit = 10) => {
  // 1
  const queryParams = [];
  // 2
  let queryString = `
  SELECT properties.*, avg(property_reviews.rating) as average_rating
  FROM properties
  JOIN property_reviews ON properties.id = property_id
  `;

  let where = [];

  console.log(options);

  // 3
  if (options.city && options.city.length > 0) {
    queryParams.push(`%${options.city}%`);
    where.push(`city LIKE $${queryParams.length}`);
  }

  if (options.owner_id && options.owner_id.length > 0) {
    queryParams.push(`${options.owner_id}`);
    where.push(`owner_id = $${queryParams.length}`);
  }

  if (options.minimum_price_per_night && options.minimum_price_per_night.length > 0) {
    queryParams.push(`${parseInt(options.minimum_price_per_night) * 100 }`);
    where.push(`cost_per_night >= $${queryParams.length}`);
  }

  if (options.maximum_price_per_night && options.maximum_price_per_night.length > 0) {
    queryParams.push(`${parseInt(options.maximum_price_per_night) * 100 }`);
    where.push(`cost_per_night <= $${queryParams.length}`);
  }

  if (options.minimum_rating && options.minimum_rating.length > 0) {
    queryParams.push(`${options.minimum_rating}`);
    where.push(`average_rating >= $${queryParams.length}`);
  }

  if (where.length > 0) {
    where = `WHERE ${where.join(' AND ')}`;
  }
  // 4
  queryParams.push(limit);
  queryString += `
  ${where}
  GROUP BY properties.id
  ORDER BY cost_per_night
  LIMIT $${queryParams.length};
  `;

  // 5
  console.log(queryString, queryParams);

  // 6
  return pool.query(queryString, queryParams).then((res) => res.rows);
};
exports.getAllProperties = getAllProperties;


/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function(property) {
  const {
    owner_id,
    title,
    description,
    thumbnail_photo_url,
    cover_photo_url,
    cost_per_night,
    street,
    city,
    province,
    post_code,
    country,
    parking_spaces,
    number_of_bathrooms,
    number_of_bedrooms
  } = property;
  return pool
    .query(`INSERT INTO properties (owner_id,
      title,
      description,
      thumbnail_photo_url,
      cover_photo_url,
      cost_per_night,
      street,
      city,
      province,
      post_code,
      country,
      parking_spaces,
      number_of_bathrooms,
      number_of_bedrooms
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *`, [
      owner_id,
      title,
      description,
      thumbnail_photo_url,
      cover_photo_url,
      cost_per_night,
      street,
      city,
      province,
      post_code,
      country,
      parking_spaces,
      number_of_bathrooms,
      number_of_bedrooms
    ])
    .then((result) => {
      console.log(result);
      return result.rows;
    })
    .catch((err) => {
      console.error(err.message);
    });
};
exports.addProperty = addProperty;
