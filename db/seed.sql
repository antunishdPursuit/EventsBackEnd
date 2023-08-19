\c users_dev;

-- INSERT INTO users (profile_picture, username, bio, looking_for_group, date_created)
-- VALUES
-- ('profile1.jpg', 'user123', 'Music lover and concert enthusiast', true, '2023-08-17'),
-- ('profile2.jpg', 'rockstar88', 'Guitarist and singer, looking for a band', true, '2023-08-16'),
-- ('profile3.jpg', 'danceMachine', 'Dancer and choreographer', false, '2023-08-15'),
-- ('profile4.jpg', 'musicFanatic', 'Attending every concert possible!', true, '2023-08-14'),
-- ('profile5.jpg', 'drummerGuy', 'Drummer searching for jam buddies', true, '2023-08-13');

INSERT INTO events (artist, venue, city, artist_picture, price, user_id)
VALUES
    ('Ariana Grande', 'Arena Concert Hall', 'Los Angeles', 'ariana.jpg', 85.00, 4),
    ('Justin Bieber', 'City Stadium', 'Toronto', 'justinbieber.jpg', 95.50, 3),
    ('Katy Perry', 'Sunshine Arena', 'Sydney', 'katyperry.jpg', 70.25, 5),
    ('Drake', 'Rap Arena', 'Houston', 'drake.jpg', 110.00, 2),
    ('Imagine Dragons', 'Music Fest Grounds', 'Las Vegas', 'imaginedragons.jpg', 65.75, 1),
    ('Coldplay', 'Stadium Arena', 'Los Angeles', 'coldplay.jpg', 75.99, 1),
    ('Ed Sheeran', 'City Music Hall', 'New York', 'edsheeran.jpg', 100.50, 2),
    ('Beyoncé', 'Royal Arena', 'London', 'beyonce.jpg', 120.75, 1),
    ('Taylor Swift', 'Pop Stadium', 'Chicago', 'taylorswift.jpg', 89.25, 3),
    ('The Weeknd', 'Nightclub Venue', 'Miami', 'theweeknd.jpg', 60.00, 2);
