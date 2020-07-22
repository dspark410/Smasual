USE smasual_db;

INSERT INTO Users (email, password, createdAt, updatedAt)
VALUES ("test1@test.com", "test1", "2020-07-18 20:27:22", "2020-07-18 20:27:22"), ("test2@test.com", "test2", "2020-07-18 20:27:22", "2020-07-18 20:27:22"), ("test3@test.com", "test3", "2020-07-18 20:27:22", "2020-07-18 20:27:22");


INSERT INTO Profiles (firstName, birthday, gender, genderOrientation, biography, createdAt, updatedAt, UserId)
VALUES ("Tanya", 1991-02-20, "Female", "Straight", "Hello! I like you.", "2020-07-18 20:27:22", "2020-07-18 20:27:22", 1), ("Lee", 1987-03-27, "Male", "Straight", "Hey baby", "2020-07-18 20:27:22", "2020-07-18 20:27:22", 2), ("Ari", 1990-12-19, "Female", "Straight", "I like unicorns", "2020-07-18 20:27:22", "2020-07-18 20:27:22", 3);