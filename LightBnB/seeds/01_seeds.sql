INSERT INTO users (id, name, email, password)
VALUES 
  (1,'Eva Stanley','sebastianguerra@ymail.com','$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
  (2,'Louisa Meyer','jacksonrose@hotmail.com','$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
  (3,'Dominic Parks','victoriablackwell@outlook.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
  (4,'Sue Luna','jasonvincent@gmx.com','$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
  (5,'Rosalie Garza', 'jacksondavid@gmx.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');



   INSERT INTO properties (id, owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active)
   VALUES (1, 1, 'Speed lamp', 'description', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg', 950, 6,4,8, 'Canada', '536 Namsub Highway', 'Sotboske', 'Quebec', 28142, 'TRUE' );

   INSERT INTO properties (id, owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active)
   VALUES(2, 2, 'Blank corner', 'description', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg', 852.34, 4,5,7, 'Canada', '651 Nami Road', 'Bohbatev', 'Alberta', 83680, 'TRUE' );

   INSERT INTO properties (id, owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active)
   VALUES(3, 3, 'Habit mix', 'description', 'https://images.pexels.com/photos/2080018/pexels-photo-2080018.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2080018/pexels-photo-2080018.jpeg', 452.34, 2,4,6, 'Canada', '1650 Hejto Center', 'Genwezuj', 'Newfoundland And Labrador', 44583, 'TRUE' );

   INSERT INTO properties (id, owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active)
   VALUES(4, 4, 'Headed know', 'description', 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg', 822.34, 4,5,8, 'Canada', '513 Powov Grove', 'Jaebvap', 'Ontario' , 38051, 'TRUE' );

   INSERT INTO properties (id, owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active)
   VALUES(5, 5, 'Port out', 'description', 'https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg', 388.34, 2,2,3, 'Canada', '1392 Gaza Junction', 'Upetafpuv', 'Nova Scotia', 81059, 'TRUE' );



INSERT INTO reservations 
  (id, start_date, end_date, property_id, guest_id)
VALUES 
  (1, '2018-09-11', '2018-09-26', 1, 1),
  (2, '2019-01-04', '2019-02-01', 2, 2),
  (3, '2021-10-01', '2021-10-14', 3, 3),
  (4, '2014-10-21', '2014-10-21', 4, 4),
  (5, '2016-07-17', '2016-08-01', 5, 5);

INSERT INTO property_reviews
  (id, guest_id, property_id, reservation_id, rating, message)
VALUES
  (1, 1, 1, 1, 4, 'message'),
  (2, 2, 2, 2, 4, 'message'),
  (3, 3, 3, 3, 5, 'message'),
  (4, 4, 4, 4, 4, 'message'),
  (5, 5, 3, 5, 5, 'message');




  
  
  
