USE IELTS;
-- Account
INSERT INTO ACCOUNT VALUES("20127237", "Chester", "Chester", "Nguyễn Tấn Lực", "113", "20127237@gmail.com", "20127237.jpg", "student");
INSERT INTO ACCOUNT VALUES("20127063", "Lily", "Lily", "Phan Minh Phúc", "113", "20127063@gmail.com", "20127063.jpg", "teacher");
INSERT INTO ACCOUNT VALUES("20127507", "PeMeo", "PeMeo", "Bùi Trần Huân", "113", "20127507@gmail.com", "20127507.jpg", "student");
-- CALL DeleteAccount("20127063");
-- select * from ACCOUNT;

-- Course
INSERT INTO COURSE VALUES ("CS0001","Foundation English course", "Foundation", "The Beginner English course is an excellent and easy way to learn basic English grammar. There are 25 English videos in this series. After you watch all 25 videos, you will have a great understanding of English.", 
							"1500000", "English-Foundation-Course.png", "20127063", null);
INSERT INTO COURSE VALUES ("CS0002","Elementary English course", "Elementary", "The Elementary English course is an excellent and easy way to learn basic English grammar. There are 25 English videos in this series. After you watch all 25 videos, you will have a great understanding of English.", 
							"2000000", "elementary-english.jpg", "20127063", null);
INSERT INTO COURSE VALUES ("CS0003","Pre Intermediate English Course", "Pre Intermediate", "These free video lessons for studying English are designed for Advanced level learners. You will find lessons on English vocabulary and grammar.", 
                            "3000000", "pre-intermediate.jpg", "20127063", null);
INSERT INTO COURSE VALUES ("CS0004","Intermediate English Course", "Intermediate", "This intermediate English course has been created to give intermediate level English students complete and comprehensive lessons to help them to level to an advanced level of English.", 
                            "3500000", "Intermediate_english.jpg", "20127063", null);
INSERT INTO COURSE VALUES ("CS0005","Upper Intermediate Course", "Upper Intermediate", "These free video lessons for studying English are designed for Upper Intermediate level learners. You will find lessons on English vocabulary and grammar.", 
                            "4000000", "Upper-Intermediate.jpg", "20127063", null);
INSERT INTO COURSE VALUES ("CS0006","Advanced English Course", "Advanced", "These free video lessons for studying English are designed for Advanced level learners. You will find lessons on English vocabulary and grammar.", 
                            "4500000", "Advanced.jpg", "20127063", null);
INSERT INTO COURSE VALUES ("CS0007","Proficiency English Course", "Proficiency", "These free video lessons for studying English are designed for Proficiency  level learners. You will find lessons on English vocabulary and grammar.", 
                            "5000000", "EnglishCourses.jpg", "20127063", null);


-- CALL CourseList();
-- CALL UpdateCourse("111","LIS 9.0", "LISTENING-9.0", "EZ 9+", "90.00", "bth.jpg", "20127063");
-- CALL CourseList();


-- Lesson
INSERT INTO LESSON VALUES("LS0001", "CS0001", "Consonants and Vowels", "Consonants and Vowels in English", "English Consonants + Vowels.mp4", "", "00:15:00");
INSERT INTO LESSON VALUES("LS0002", "CS0001", "Noun", "A/An + Noun", "English Grammar- a - an + Noun.mp4", "", "00:15:00");
INSERT INTO LESSON VALUES("LS0003", "CS0001", "Noun (continuous)", "Singular and Plural Nouns", "English Grammar- Singular + Plural Nouns.mp4", "", "00:15:00");
INSERT INTO LESSON VALUES("LS0004", "CS0001", "Subjective Pronouns", "Subjective Pronouns in English", "English Grammar- Subjective Pronouns.mp4", "", "00:15:00");
INSERT INTO LESSON VALUES("LS0005", "CS0002", "Formal Vs Informal English", "Greetings and Responses", "Formal Vs Informal English- Greetings and Responses.mp4", "", "00:15:00");
INSERT INTO LESSON VALUES("LS0006", "CS0002", "Must - Have To - Have Got To", "What's The Difference?", "Must - Have To - Have Got To. What's The Difference-.mp4", "", "00:15:00");
INSERT INTO LESSON VALUES("LS0007", "CS0002", "Prepositions Of Place & Precise Prepositional Phrases", "Prepositions Of Place & Precise Prepositional Phrases", "Prepositions Of Place & Precise Prepositional Phrases - Learn To Speak English Like A Native.mp4", "", "00:15:00");
INSERT INTO LESSON VALUES("LS0008", "CS0002", "Question Tag", "Question Tag", "Question Tag English Grammar Lesson.mp4", "", "00:15:00");
INSERT INTO LESSON VALUES("LS0009", "CS0003", "English grammar", "Future perfect tense", "Future perfect tense.mp4", "", "00:15:00");
INSERT INTO LESSON VALUES("LS0010", "CS0003", "English grammar", "Comparative structures", "Comparative structures.mp4", "", "00:15:00");
INSERT INTO LESSON VALUES("LS0011", "CS0004", "Consonants and Vowels", "Consonants and Vowels in English", "English Consonants + Vowels.mp4", "", "00:15:00");
INSERT INTO LESSON VALUES("LS0012", "CS0004", "Noun", "A/An + Noun", "English Grammar- a - an + Noun.mp4", "", "00:15:00");
INSERT INTO LESSON VALUES("LS0013", "CS0004", "Noun (continuous)", "Singular and Plural Nouns", "English Grammar- Singular + Plural Nouns.mp4", "", "00:15:00");
INSERT INTO LESSON VALUES("LS0014", "CS0005", "Subjective Pronouns", "Subjective Pronouns in English", "English Grammar- Subjective Pronouns.mp4", "", "00:15:00");
INSERT INTO LESSON VALUES("LS0015", "CS0005", "Formal Vs Informal English", "Greetings and Responses", "Formal Vs Informal English- Greetings and Responses.mp4", "", "00:15:00");
INSERT INTO LESSON VALUES("LS0016", "CS0006", "Must - Have To - Have Got To", "What's The Difference?", "Must - Have To - Have Got To. What's The Difference-.mp4", "", "00:15:00");
INSERT INTO LESSON VALUES("LS0017", "CS0006", "Prepositions Of Place & Precise Prepositional Phrases", "Prepositions Of Place & Precise Prepositional Phrases", "Prepositions Of Place & Precise Prepositional Phrases - Learn To Speak English Like A Native.mp4", "", "00:15:00");
INSERT INTO LESSON VALUES("LS0018", "CS0007", "Question Tag", "Question Tag", "Question Tag English Grammar Lesson.mp4", "", "00:15:00");
INSERT INTO LESSON VALUES("LS0019", "CS0007", "English grammar", "Future perfect tense", "Future perfect tense.mp4", "", "00:15:00");
INSERT INTO LESSON VALUES("LS0020", "CS0007", "English grammar", "Comparative structures", "Comparative structures.mp4", "", "00:15:00");
-- INSERT INTO LESSON VALUES("LS0011", "CS0003", "English grammar", "Unreal past (if, if only, wish, it's time)", "UNREAL PAST (if, if only, wish, it's time).mp4", "", "00:15:00");
-- INSERT INTO LESSON VALUES("LS0012", "CS0003", "English grammar", "Position of adverbs", "Position of adverbs.mp4", "", "00:15:00");
-- DELETE FROM LESSON WHERE CID = "113"; 

-- Note
INSERT INTO NOTE VALUES("123", "LS0001", "20127237", "Learning by heart");
INSERT INTO NOTE VALUES("456", "LS0002", "20127063", "Complete exercises 1 to 5");
INSERT INTO NOTE VALUES("789", "LS0005", "20127507", "S + V(s/es)");

-- Cart
INSERT INTO CART VALUES("CS0001", "20127237", true, NOW(), null);
INSERT INTO CART VALUES("CS0002", "20127237", true, NOW(), null);
INSERT INTO CART VALUES("CS0003", "20127237", false, null, null);
INSERT INTO CART VALUES("CS0001", "20127507", true, NOW(), null);
INSERT INTO CART VALUES("CS0002", "20127507", false, null, null);
INSERT INTO CART VALUES("CS0003", "20127507", true, NOW(), null);

-- call AddToCart('111', '20127507');
-- call AddToCart('111', '20127237');
-- select * from cart where id = '20127237';
-- call DeleteFromCart('111', '20127237');

-- CALL Pay("111", "20127507");
-- select * from cart;
-- SET @days = 15;
-- SELECT DATE_ADD(NOW(), INTERVAL @days DAY);

-- CALL CourseList();
-- CALL Rate("111", "20127507", 5);
-- CALL CourseList();
-- CALL Rate("111", "20127237", 4);
-- CALL CourseList();
-- CALL Rate("113", "20127507", 5);
-- CALL CourseList();

-- Forum
INSERT INTO FORUM VALUES ("777","20127237", "PHRASED VERD", "2022-04-03", "Phrasal verbs are two or more words that together act as a completely new word, with a meaning separate from the original words.", 
						"phrasal-verbs.jpg", "Phrased verb", "Grammar");
INSERT INTO FORUM VALUES ("888","20127507", "RELATIVE CLAUSES", "2020-03-06", "A relative clause is one kind of dependent clause. It has a subject and verb, but can't stand alone as a sentence. It is sometimes called an “adjective clause” because it functions like an adjective—it gives more information about a noun.", 
						"relative-clause.jpg", "Relative clauses", "Grammar");
INSERT INTO FORUM VALUES ("000","20127237", "PERFECT TENSE", "2019-01-03", "Perfect verb tense is used to show an action that is complete and finished, or perfected. This tense is expressed by adding one of the auxiliary verbs — have, has, or had — to the past participle form of the main verb.", 
                        "present-perfect-tense.jpg", "Perfect tense", "Grammar");

-- Test
												
INSERT INTO TEST VALUES ("001","227", "LISTENING", "Quizzes", "00:15:00");
INSERT INTO TEST VALUES ("002","232", "PHRASED VERD", "Quizzes", "00:20:00");
INSERT INTO TEST VALUES ("003","227", "PERFECT TENSE", "Listening", "00:15:00");


-- Question
INSERT INTO QUESTION VALUES ("001","LS0001", "In 1967, One Hundred Years of Solitude was published in?| Spanish| Italian| French", "", "100-years-of-solitude.mp3", "Spanish");
INSERT INTO QUESTION VALUES ("002","LS0002", "The story can be described as?| science fiction| fantasy| magical realism", "", "100-years-of-solitude.mp3", "magical realism");
INSERT INTO QUESTION VALUES ("003","LS0003", "In 1982| the book was first translated| the book began to sell extremely well| Márquez won the Nobel Prize in Literature", "", "100-years-of-solitude.mp3", "Márquez won the Nobel Prize in Literature");
INSERT INTO QUESTION VALUES ("004","LS0004", "Kathy is a tall fashion model, and everyone says she TAKES AFTER| her short, fat father| her tall, handsome son| her tall, beautiful mother", "", "", "her tall, beautiful mother");
INSERT INTO QUESTION VALUES ("005","LS0001", "Christmas decorations are usually TAKEN DOWN| just before Christmas| soon after Christmas| all through Christmas", "", "", "soon after Christmas");
INSERT INTO QUESTION VALUES ("006","LS0002", "Before TAKING OFF your shoes, you'll have to| take off your socks| untie your shoelaces| put on your feet", "", "", "untie your shoelaces");

-- select * from question;

-- Solution
-- INSERT INTO SOLUTION VALUES ("001","001", "Spanish");
-- INSERT INTO SOLUTION VALUES ("002","002", "magical realism");
-- INSERT INTO SOLUTION VALUES ("003","003", "Márquez won the Nobel Prize in Literature");
-- INSERT INTO SOLUTION VALUES ("004","004", "her tall, beautiful mother");
-- INSERT INTO SOLUTION VALUES ("005","005", "soon after Christmas");
-- INSERT INTO SOLUTION VALUES ("006","006", "untie your shoelaces");

-- Assignment
INSERT INTO ASSIGNMENT VALUES("001", "001", "20127237", "2020-03-06", NULL);
INSERT INTO ASSIGNMENT VALUES("002", "002", "20127237", "2020-03-06", NULL);

-- Answer
INSERT INTO ANSWER VALUES ("001", "001", "001", "Spanish");
INSERT INTO ANSWER VALUES ("002", "002", "001", "magical realism");
INSERT INTO ANSWER VALUES ("003", "003", "001", "Márquez won the Nobel Prize in Literature");
INSERT INTO ANSWER VALUES ("004", "004", "002", "herAA tall, beautiful mother");
INSERT INTO ANSWER VALUES ("005", "005", "002", "soon after Christmas");
INSERT INTO ANSWER VALUES ("006", "006", "002", "AAuntie your shoelaces");

-- Comment
INSERT INTO COMMENT VALUES ("001", "888", "20127063", null, null, "We use: who and whom for people, which for things, that for people or things.", NOW());
INSERT INTO COMMENT VALUES ("002", null, "20127507", "CS0001", null, "Very satisfied", NOW());
INSERT INTO COMMENT VALUES ("003", null, "20127237", null, "002", "Try to listen carefully", NOW());

-- CALL AddCourseComment("2223", "999", "20127063", "Test mic");
-- CALL GetCourseComment("999");
-- CALL UpdateCourseComment("2223", "999", "20127063", "123 123");
-- CALL GetCourseComment("999");
-- CALL DeleteCourseComment("2223", "999", "20127063");
-- CALL GetCourseComment("999");


-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Chou.huog5459';
-- flush privileges;

