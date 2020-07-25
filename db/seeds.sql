USE smasual_db;


INSERT INTO Users (email, password, createdAt, updatedAt)
VALUES ('nicolas@nicolas.com', '$2a$10$21Cl0y/WphlNJqfozgUkFeNe7MrYBeZyALuf4iQWRVNHEJL9ETzfC', '2020-07-24 23:43:33', '2020-07-24 23:43:33'
), ('angelina@angelina.com', '$2a$10$1TgWHOJ4qOHXEBojhQ2VlecuOsjJn0NX6Th0k1fesTt3tW/MRV5OS', '2020-07-24 23:45:36', '2020-07-24 23:45:36'
), ('arnold@arnold.com', '$2a$10$1Rd0vLe7U3B02pG34ve24.KRS1W6c0rU6FRDkbOYfB0mrlK5vQW7.', '2020-07-24 23:51:25', '2020-07-24 23:51:25'
), ('jennifer@jennifer.com', '$2a$10$Mlkf7MH6v4TEP9p6xWTe2OJ2fVbRs../h7sN3T8YGUWgVAXN/76hu', '2020-07-24 23:53:39', '2020-07-24 23:53:39'
), ('joseph@joseph.com', '$2a$10$DD1uacsl4OVS9BvzkhFCM.yuUFzsmVhsklgYUgJiOBcPDZaQ.GBVm', '2020-07-24 23:54:41', '2020-07-24 23:54:41'
);

INSERT INTO Profiles (firstName, birthday, gender, genderOrientation, biography, zip, age, imageURL, createdAt, updatedAt, UserId)
VALUES ('Nicolas', '1964-01-07', 'Male', 'Bisexual', 'You know...I can eat a peach for hours...', '94530', '56', 'https://firebasestorage.googleapis.com/v0/b/smasual.appspot.com/o/images%2Fnicholas.jpeg?alt=media&token=134af34e-245a-45c2-a6a5-da5288ec8b52', '2020-07-24 23:45:19', '2020-07-24 23:45:19', '1'
), ('Angelina', '1975-06-04', 'Female', 'Straight', 'Baby, you couldn\'t find the button with both hands and a map', '94530', '45', 'https://firebasestorage.googleapis.com/v0/b/smasual.appspot.com/o/images%2Fangelina.jpeg?alt=media&token=0e93bf18-b881-4abb-b5aa-350a7c640e6e', '2020-07-24 23:51:00', '2020-07-24 23:51:00', '2'
), ('Arnold', '1947-07-30', 'Male', 'Straight', 'It\'s not a tumor', '94530', '72', 'https://firebasestorage.googleapis.com/v0/b/smasual.appspot.com/o/images%2Farnold.png?alt=media&token=86f1db4e-c196-4b90-8704-d93787c76a34', '2020-07-24 23:53:24', '2020-07-24 23:53:24', '3'
), ('Jennifer', '1990-08-15', 'Female', 'Straight', 'Where\'s the pizza??', '94530', '29', 'https://firebasestorage.googleapis.com/v0/b/smasual.appspot.com/o/images%2Fjennifer.jpeg?alt=media&token=2cff9fe8-a92b-41b2-9432-276602b05698', '2020-07-24 23:54:29', '2020-07-24 23:54:29', '4'
), ('Joseph', '1981-02-17', 'Male', 'Straight', 'It\'s less about what you are doing, and more about who you are doing it with', '94530', '39', 'https://firebasestorage.googleapis.com/v0/b/smasual.appspot.com/o/images%2Fjoseph.png?alt=media&token=61adf513-a6f4-4fbc-ace0-fcec8d65916c', '2020-07-24 23:56:13', '2020-07-24 23:56:13', '5'
);