SELECT 
  reservations.id AS id, 
  properties.title AS title,
  properties.cost_per_night AS cost_per_night, 
  reservations.start_date AS start_date, 
  AVG(property_reviews.rating) AS average_rating
FROM reservations
JOIN properties ON properties.id = reservations.property_id
JOIN property_reviews ON property_reviews.reservation_id = reservations.id
WHERE reservations.guest_id = 1
GROUP BY properties.id, reservations.id
ORDER BY start_date
LIMIT 10;