\c users_dev;

-- INSERT INTO users (profile_picture, username, bio, looking_for_group, date_created)
-- VALUES
-- ('https://randomuser.me/api/portraits/women/38.jpg', 'organicgorilla182', 'My name is Tina Tripković and Im from Serbia', true, '2005-11-03'),
-- ('https://randomuser.me/api/portraits/women/3.jpg', 'rockstar88', 'Guitarist and singer, looking for a band', true, '2003-12-30'),
-- ('https://randomuser.me/api/portraits/men/48.jpg', 'danceMachine', 'My name is Luciano Durand and Im from Switzerland', false, '2019-01-18'),
-- ('https://randomuser.me/api/portraits/men/1.jpg', 'orangeswan986', 'Attending every concert possible!', true, '2003-12-30'),
-- ('https://randomuser.me/api/portraits/women/8.jpg', 'druerGi', 'Drummer searching for jam buddies', true, '2003-12-30');

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
