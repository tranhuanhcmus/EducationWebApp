USE IELTS;
-- insert into account values(REPLACE(left(UUID(), 22), '-', ''), 'mipu', 'mipu', 'pmp', '113', '@gmail.com', '', 'student');
-- select * from account;
-- Select user from mysql.user;
-- Select current_user();

/*============================================================================================================================*/
/*                                                           ACCOUNT                                                          */
/*============================================================================================================================*/
/*==============================================================*/
/* Proc: Login                                                  */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `Login`$$
CREATE PROCEDURE Login(name varchar(20), pass varchar(20))
BEGIN
	-- DECLARE result varchar(20);
	IF NOT EXISTS (SELECT USERNAME FROM ACCOUNT WHERE USERNAME = name) THEN
		SELECT 'Username not exists' AS RESULT;
	ELSEIF NOT EXISTS (SELECT USERNAME, PASSWORD FROM ACCOUNT WHERE USERNAME = name AND PASSWORD = pass) THEN
		SELECT 'Wrong password' AS RESULT;
	ELSE 
		SELECT ID, ROLE FROM ACCOUNT WHERE USERNAME = name AND PASSWORD = pass;
        -- RETURN result;
    END IF;
END $$
DELIMITER ;

-- CALL Login('mipu', 'mi');
-- insert into account values(REPLACE(left(UUID(), 22), '-', ''), 'mipu', 'mi', 'pmp', '113', '@gmail.com', '', 'student');
-- SELECT * FROM ACCOUNT;

/*==============================================================*/
/* Proc: Add account                                            */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `AddAccount`$$
CREATE PROCEDURE AddAccount(
	ID varchar(22),
	USERNAME varchar(30),
	PASSWORD varchar(30),
	NAME text,
	PHONE varchar(15),
	MAIL varchar(30),
	AVA varchar(100),
	ROLE varchar(12)
)
BEGIN
	START TRANSACTION;
		INSERT INTO ACCOUNT VALUES (ID, USERNAME, PASSWORD, NAME, PHONE, MAIL, AVA, ROLE);
		SELECT 'Account inserts successfully' AS RESULT;
    COMMIT;
END $$
DELIMITER ;

-- CALL AddAccount("20127403", "mipu", "mipu", "pmp", "113", "@gmail.com", "bth.jpg", "student");

/*==============================================================*/
/* Proc: Update account                                         */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `UpdateAccount`$$
CREATE PROCEDURE UpdateAccount(
	UserID varchar(22),
	NUSERNAME varchar(30),
	NPASSWORD varchar(30),
	NNAME text,
	NPHONE varchar(15),
	NMAIL varchar(30),
	NAVA varchar(100),
	NROLE varchar(12)
)	
BEGIN
	START TRANSACTION;
		UPDATE ACCOUNT     
		SET USERNAME = NUSERNAME,   
			PASSWORD = NPASSWORD,
			NAME = NNAME,
			PHONE = NPHONE, 
			MAIL = NMAIL, 
			AVA = NAVA,
			ROLE = NROLE
		WHERE ID = UserID; 
		SELECT 'Account updates successfully' AS RESULT;
    COMMIT;
END $$
DELIMITER ;

-- CALL UpdateAccount();

/*==============================================================*/
/* Proc: Delete account                                         */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `DeleteAccount`$$
CREATE PROCEDURE DeleteAccount(
	UserID varchar(22)
)
BEGIN
	START TRANSACTION;
		DELETE FROM CART WHERE ID = UserID;
        DELETE FROM COMMENT WHERE ID = UserID; 
        DELETE FROM FORUM WHERE ID = UserID;  
        DELETE FROM ANSWER WHERE ASSID IN (SELECT ASSID FROM ASSIGNMENT WHERE ID = UserID);
		DELETE FROM ASSIGNMENT WHERE ID = UserID;
		DELETE FROM ACCOUNT WHERE ID = UserID;  
		SELECT 'Account deletes successfully' AS RESULT;
    COMMIT;
END $$
DELIMITER ;

-- CALL DeleteAccount();

/*============================================================================================================================*/
/*                                                           COURSE                                                           */
/*============================================================================================================================*/
/*==============================================================*/
/* Proc: Get course                                             */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `GetCourse`$$
CREATE PROCEDURE GetCourse(
	UID varchar(22)
)
BEGIN
	START TRANSACTION;
		SELECT * FROM COURSE 
		WHERE CID IN (SELECT CID FROM CART WHERE ID = UID AND STATUS = true);
    COMMIT;
END $$
DELIMITER ;

-- CALL GetCourse('20127237');

/*==============================================================*/
/* Proc: Get cart                                               */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `GetCart`$$
CREATE PROCEDURE GetCart(
	UID varchar(22)
)
BEGIN
	START TRANSACTION;
		SELECT * FROM COURSE 
		WHERE CID IN (SELECT CID FROM CART WHERE ID = UID AND STATUS = false);
    COMMIT;
END $$
DELIMITER ;

-- CALL GetCart('8a1285eaceae11edb47');

/*==============================================================*/
/* Proc: Get class                                              */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `GetClass`$$
CREATE PROCEDURE GetClass(
	UID varchar(22)
)
BEGIN
	START TRANSACTION;
		SELECT * FROM COURSE 
		WHERE OWNERID =  UID;
    COMMIT;
END $$
DELIMITER ;

-- CALL GetClass('8a1285eaceae11edb47');

/*==============================================================*/
/* Proc: Get course list                                        */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `CourseList`$$
CREATE PROCEDURE CourseList()
BEGIN
	START TRANSACTION;
		SELECT C.CID, C.NAME AS COURESENAME, C.CATEGORY, C.DESCRIPTION, C.PRICE, C.IMG, C.RATING, A.NAME AS OWNERNAME
        FROM COURSE C JOIN ACCOUNT A ON C.OWNERID = A.ID; 
    COMMIT;
END $$
DELIMITER ;

CALL CourseList();

/*==============================================================*/
/* Proc: Get course by name                                              */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `GetCourseByName`$$
CREATE PROCEDURE GetCourseByName(
	CourseName TEXT
)
BEGIN
	START TRANSACTION;
		SELECT * FROM COURSE WHERE NAME LIKE CourseName; 
    COMMIT;
END $$
DELIMITER ;

-- CALL GetCourseByName();

/*==============================================================*/
/* Func: uuid_v4                                                */
/*==============================================================*/
-- DELIMITER $$  
-- DROP FUNCTION IF EXISTS uuid_v4;
-- CREATE FUNCTION uuid_v4()
--     RETURNS CHAR(36) NO SQL
-- BEGIN
--     -- Generate 8 2-byte strings that we will combine into a UUIDv4
--     SET @h1 = LPAD(HEX(FLOOR(RAND() * 0xffff)), 4, '0');
--     SET @h2 = LPAD(HEX(FLOOR(RAND() * 0xffff)), 4, '0');
--     SET @h3 = LPAD(HEX(FLOOR(RAND() * 0xffff)), 4, '0');
--     SET @h6 = LPAD(HEX(FLOOR(RAND() * 0xffff)), 4, '0');
--     SET @h7 = LPAD(HEX(FLOOR(RAND() * 0xffff)), 4, '0');
--     SET @h8 = LPAD(HEX(FLOOR(RAND() * 0xffff)), 4, '0');
--     -- 4th section will start with a 4 indicating the version
--     SET @h4 = CONCAT('4', LPAD(HEX(FLOOR(RAND() * 0x0fff)), 3, '0'));
--     -- 5th section first half-byte can only be 8, 9 A or B
--     SET @h5 = CONCAT(HEX(FLOOR(RAND() * 4 + 8)),
--                 LPAD(HEX(FLOOR(RAND() * 0x0fff)), 3, '0'));
--     -- Build the complete UUID
--     RETURN LOWER(CONCAT(
--         @h1, @h2, '-', @h3, '-', @h4, '-', @h5, '-', @h6, @h7, @h8
--     ));
-- END $$
-- DELIMITER ;

-- SELECT REPLACE(left(uuid_v4(), 12), '-', '');

/*==============================================================*/
/* Proc: Add course                                             */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `AddCourse`$$
CREATE PROCEDURE AddCourse(
    CID varchar(22),
    NAME TEXT,
    CATEGORY VARCHAR(20),
    DESCRIPTION TEXT,
    PRICE FLOAT,
    IMG varchar(100),
    OWNERID varchar(22)
)
BEGIN
	START TRANSACTION;
		INSERT INTO COURSE VALUES (CID, NAME, CATEGORY, DESCRIPTION, PRICE, IMG, OWNERID, null);
		SELECT 'Course inserts successfully' AS RESULT;
    COMMIT;
END $$
DELIMITER ;

-- CALL AddCourse('LIS 9.0', 'LISTENING-9.0', 'EZ 9+', '50.00', 'D:/TKPM/TH/EducationWebApp/database/bth.jpg');

/*==============================================================*/
/* Proc: Update course                                          */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `UpdateCourse`$$
CREATE PROCEDURE UpdateCourse(
	CourseID varchar(22),
    NNAME TEXT,
    NCATEGORY VARCHAR(20),
    NDESCRIPTION TEXT,
    NPRICE FLOAT,
    NIMG varchar(100),
    NOWNERID varchar(22)
)	
BEGIN
	START TRANSACTION;
		UPDATE COURSE     
		SET NAME = NNAME,   
			CATEGORY = NCATEGORY,
			DESCRIPTION = NDESCRIPTION,
			PRICE = NPRICE, 
			IMG = NIMG, 
			OWNERID = NOWNERID
		WHERE CID = CourseID; 
		SELECT 'Course updates successfully' AS RESULT;
    COMMIT;
END $$
DELIMITER ;

-- CALL UpdateCourse();

/*==============================================================*/
/* Proc: Delete course                                          */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `DeleteCourse`$$
CREATE PROCEDURE DeleteCourse(
	CourseID varchar(22)
)
BEGIN
	START TRANSACTION;
		DELETE FROM CART WHERE CID = CourseID; 
        DELETE FROM ANSWER WHERE QID IN (SELECT QID FROM QUESTION WHERE LID IN (SELECT LID FROM LESSON WHERE CID = CourseID));
        DELETE FROM QUESTION WHERE LID IN (SELECT LID FROM LESSON WHERE CID = CourseID);
        -- DELETE FROM ASSIGNMENT WHERE TID IN (SELECT TID FROM TEST WHERE LID IN (SELECT LID FROM LESSON WHERE CID = CourseID));
		-- DELETE FROM TEST WHERE LID IN (SELECT LID FROM LESSON WHERE CID = CourseID);
        DELETE FROM NOTE WHERE LID IN (SELECT LID FROM LESSON WHERE CID = CourseID);
		DELETE FROM LESSON WHERE CID = CourseID; 
		DELETE FROM COURSE WHERE CID = CourseID;  
		SELECT 'Course deletes successfully' AS RESULT;
    COMMIT;
END $$
DELIMITER ;

-- CALL DeleteCourse();


/*============================================================================================================================*/
/*                                                           LESSON                                                           */
/*============================================================================================================================*/
/*==============================================================*/
/* Proc: Get lesson                                             */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `GetLesson`$$
CREATE PROCEDURE GetLesson(
	CID varchar(22)
)
BEGIN
	START TRANSACTION;
		SELECT * FROM LESSON L 
		WHERE L.CID = CID;
    COMMIT;
END $$
DELIMITER ;

-- CALL GetLesson('8a1285eaceae11edb47');

/*==============================================================*/
/* Proc: Add lesson                                             */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `AddLesson`$$
CREATE PROCEDURE AddLesson(
	LID varchar(22),
	CID varchar(22),
	NAME text,
	CONTENT text,
	VIDEO varchar(100),
	ATTACHMENT varchar(100),
    DURATION time
)
BEGIN
	START TRANSACTION;
		INSERT INTO LESSON VALUES (LID, CID, NAME, CONTENT, VIDEO, ATTACHMENT, DURATION);
		SELECT 'Lesson inserts successfully' AS RESULT;
    COMMIT;
END $$
DELIMITER ;

-- CALL AddLesson('LIS 9.0', 'LISTENING-9.0', 'EZ 9+', '50.00', 'D:/TKPM/TH/EducationWebApp/database/bth.jpg');

/*==============================================================*/
/* Proc: Update lesson                                          */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `UpdateLesson`$$
CREATE PROCEDURE UpdateLesson(
	LID varchar(22),
	NCID varchar(22),
	NNAME text,
	NCONTENT text,
	NVIDEO varchar(100),
	NATTACHMENT varchar(100),
    NDURATION time
)	
BEGIN
	START TRANSACTION;
		UPDATE LESSON     
		SET NAME = NNAME,   
			CONTENT = NCONTENT,
			VIDEO = NVIDEO,
			ATTACHMENT = NATTACHMENT,
            DURATION = NDURATION
		WHERE LID = LessonID AND CID = NCID; 
		SELECT 'Lesson updates successfully' AS RESULT;
    COMMIT;
END $$
DELIMITER ;

-- CALL UpdateLesson();

/*==============================================================*/
/* Proc: Delete lesson                                          */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `DeleteLesson`$$
CREATE PROCEDURE DeleteLesson(
	LessonID varchar(22)
)
BEGIN
	START TRANSACTION;
		DELETE FROM NOTE WHERE LID = LessonID; 
        -- DELETE FROM SOLUTION WHERE QID IN (SELECT QID FROM QUESTION WHERE LID = LessonID);
        DELETE FROM ANSWER WHERE QID IN (SELECT QID FROM QUESTION WHERE LID = LessonID);
        -- DELETE FROM ASSIGNMENT WHERE TID IN (SELECT TID FROM TEST WHERE LID IN (SELECT LID FROM LESSON WHERE CID = CourseID));
		-- DELETE FROM TEST WHERE LID IN (SELECT LID FROM LESSON WHERE CID = CourseID);
        DELETE FROM QUESTION WHERE LID = LessonID;
		DELETE FROM LESSON WHERE LID = LessonID; 
		SELECT 'Lesson deletes successfully' AS RESULT;
    COMMIT;
END $$
DELIMITER ;

-- CALL DeleteLesson();

/*============================================================================================================================*/
/*                                                            CART                                                            */
/*============================================================================================================================*/
/*==============================================================*/
/* Proc: Add course to cart                                     */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `AddToCart`$$
CREATE PROCEDURE AddToCart(
	CourseID varchar(22),
    UID varchar(22)
)
BEGIN
	START TRANSACTION;
		IF EXISTS (SELECT ID, CID FROM CART WHERE ID = UID AND CID = CourseID) THEN
			SELECT 'This course has already existed' AS RESULT;
		ELSE
			INSERT INTO CART VALUES (CID, UID, false, null, null);
			SELECT 'Add successfully' AS RESULT;
		END IF;
    COMMIT;
END $$
DELIMITER ;

/*==============================================================*/
/* Proc: Delete course from cart                                */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `DeleteFromCart`$$
CREATE PROCEDURE DeleteFromCart(
	CourseID varchar(22),
    UID varchar(22)
)
BEGIN
	START TRANSACTION;
		DELETE FROM CART WHERE CID = CourseID AND ID = UID;
		SELECT 'Delete successfully' AS RESULT;
    COMMIT;
END $$
DELIMITER ;

/*==============================================================*/
/* Proc: Pay                                                    */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `Pay`$$
CREATE PROCEDURE Pay(
	CourseID varchar(22),
    UID varchar(22)
)
BEGIN
	START TRANSACTION;
		UPDATE CART 
        SET STATUS = true,
			PURCHASE_DAY = NOW()
        WHERE CID = CourseID AND ID = UID;
		SELECT 'Pay successfully' AS RESULT;
    COMMIT;
END $$
DELIMITER ;

/*==============================================================*/
/* Proc: Rate                                                    */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `Rate`$$
CREATE PROCEDURE Rate(
	CourseID varchar(22),
    UID varchar(22),
    POINT float
)
BEGIN
	DECLARE score FLOAT;
	START TRANSACTION;
		UPDATE CART 
        SET RATING = POINT
        WHERE CID = CourseID AND ID = UID;
        SELECT AVG(RATING) INTO score
        FROM CART
        WHERE CID = CourseID;
		UPDATE COURSE 
        SET RATING = score
        WHERE CID = CourseID;
		SELECT 'Rate successfully' AS RESULT;
    COMMIT;
END $$
DELIMITER ;

/*============================================================================================================================*/
/*                                                            TEST                                                            */
/*============================================================================================================================*/
/*==============================================================*/
/* Proc: Get test                                               */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `GetTest`$$
CREATE PROCEDURE GetTest(
	LID varchar(22)
)
BEGIN
	START TRANSACTION;
		SELECT * FROM TEST T
		WHERE T.LID = LID;
    COMMIT;
END $$
DELIMITER ;

-- CALL GetTest('8a1285eaceae11edb47');

/*==============================================================*/
/* Proc: Add test                                               */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `AddTest`$$
CREATE PROCEDURE AddTest(
	TID varchar(22),
	LID varchar(22),
	TITLE text,
	DESCRIPTION text,
	DURATION time
)
BEGIN
	START TRANSACTION;
		INSERT INTO TEST VALUES (TID, LID, TITLE, DESCRIPTION, DURATION);
		SELECT 'Test inserts successfully' AS RESULT;
    COMMIT;
END $$
DELIMITER ;

-- CALL AddTest('LIS 9.0', 'LISTENING-9.0', 'EZ 9+', '50.00', 'D:/TKPM/TH/EducationWebApp/database/bth.jpg');

/*==============================================================*/
/* Proc: Update test                                            */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `UpdateTest`$$
CREATE PROCEDURE UpdateTest(
	TestID varchar(22),
	LessonID varchar(22),
	NTITLE text,
	NDESCRIPTION text,
	NDURATION time
)	
BEGIN
	START TRANSACTION;
		UPDATE TEST     
		SET TITLE = NTITLE,   
			DESCRIPTION = NDESCRIPTION,
			DURATION = NDURATION
		WHERE TID = TestID AND LID = LessonID; 
		SELECT 'Test updates successfully' AS RESULT;
    COMMIT;
END $$
DELIMITER ;

-- CALL UpdateTest();

/*==============================================================*/
/* Proc: Delete test                                            */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `DeleteTest`$$
CREATE PROCEDURE DeleteTest(
	TestID varchar(22)
)
BEGIN
	START TRANSACTION;
		-- DELETE FROM SOLUTION WHERE QID IN (SELECT QID FROM QUESTION WHERE TID = TestID);
        DELETE FROM QUESTION WHERE TID = TestID;
        DELETE FROM ANSWER WHERE ASSID IN (SELECT ASSID FROM ASSIGNMENT WHERE TID = TestID);
		DELETE FROM ASSIGNMENT WHERE TID = TestID; 
		DELETE FROM TEST WHERE TID = TestID; 
		SELECT 'Test deletes successfully' AS RESULT;
    COMMIT;
END $$
DELIMITER ;

-- CALL DeleteTest();

/*============================================================================================================================*/
/*                                                           COMMENT                                                          */
/*============================================================================================================================*/
/*==============================================================*/
/* Proc: Get Forum Comment                                      */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `GetForumComment`$$
CREATE PROCEDURE GetForumComment(
	FID varchar(22)
)
BEGIN
	START TRANSACTION;
		SELECT C.CMTID, C.FID, C.ID, C.CONTENT, C.CMT_TIME, A.NAME
        FROM COMMENT C JOIN ACCOUNT A ON C.ID = A.ID 
		WHERE C.FID = FID;
    COMMIT;
END $$
DELIMITER ;

-- CALL GetForumComment('888');

/*==============================================================*/
/* Proc: Get Course Comment                                     */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `GetCourseComment`$$
CREATE PROCEDURE GetCourseComment(
	CID varchar(22)
)
BEGIN
	START TRANSACTION;
		SELECT C.CMTID, C.CID, C.ID, C.CONTENT, C.CMT_TIME, A.NAME
        FROM COMMENT C JOIN ACCOUNT A ON C.ID = A.ID 
		WHERE C.CID = CID;
    COMMIT;
END $$
DELIMITER ;

-- CALL GetCourseComment('');

/*==============================================================*/
/* Proc: Get Test Comment                                       */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `GetTestComment`$$
CREATE PROCEDURE GetTestComment(
	TID varchar(22)
)
BEGIN
	START TRANSACTION;
		SELECT C.CMTID, C.TID, C.ID, C.CONTENT, C.CMT_TIME, A.NAME
        FROM COMMENT C JOIN ACCOUNT A ON C.ID = A.ID 
		WHERE C.TID = TID;
    COMMIT;
END $$
DELIMITER ;

-- CALL GetTestComment('');

/*==============================================================*/
/* Proc: Add Forum Comment                                   */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `AddForumComment`$$
CREATE PROCEDURE AddForumComment(
	CMTID varchar(22),
	FID varchar(22),
	ID varchar(22),
	CONTENT text
)
BEGIN
	START TRANSACTION;
		INSERT INTO COMMENT VALUES (CMTID, FID, ID, null, null, CONTENT, NOW());
		SELECT 'Comment inserts successfully' AS RESULT;
    COMMIT;
END $$
DELIMITER ;

-- CALL AddForumComment('');

/*==============================================================*/
/* Proc: Add Course Comment                                  */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `AddCourseComment`$$
CREATE PROCEDURE AddCourseComment(
	CMTID varchar(22),
	CID varchar(22),
	ID varchar(22),
	CONTENT text
)
BEGIN
	START TRANSACTION;
		INSERT INTO COMMENT VALUES (CMTID, null, ID, CID, null, CONTENT, NOW());
		SELECT 'Comment inserts successfully' AS RESULT;
    COMMIT;
END $$
DELIMITER ;

-- CALL AddCourseComment('');

/*==============================================================*/
/* Proc: Add Test Comment                                    */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `AddTestComment`$$
CREATE PROCEDURE AddTestComment(
	CMTID varchar(22),
	TID varchar(22),
	ID varchar(22),
	CONTENT text
)
BEGIN
	START TRANSACTION;
		INSERT INTO COMMENT VALUES (CMTID, null, ID, null, TID, CONTENT, NOW());
		SELECT 'Comment inserts successfully' AS RESULT;
    COMMIT;
END $$
DELIMITER ;

-- CALL AddTestComment('');

/*==============================================================*/
/* Proc: Update Forum Comment                                   */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `UpdateForumComment`$$
CREATE PROCEDURE UpdateForumComment(
	NCMTID varchar(22),
	NFID varchar(22),
	NID varchar(22),
	NCONTENT text
)
BEGIN
	START TRANSACTION;
		UPDATE COMMENT 
        SET CONTENT = NCONTENT,
			CMT_TIME = NOW()
        WHERE CMTID = NCMTID AND FID = NFID AND ID = NID;
		SELECT 'Comment updates successfully' AS RESULT;
    COMMIT;
END $$
DELIMITER ;

-- CALL UpdateForumComment('');

/*==============================================================*/
/* Proc: Update Course Comment                                  */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `UpdateCourseComment`$$
CREATE PROCEDURE UpdateCourseComment(
	NCMTID varchar(22),
	NCID varchar(22),
	NID varchar(22),
	NCONTENT text
)
BEGIN
	START TRANSACTION;
		UPDATE COMMENT 
        SET CONTENT = NCONTENT,
			CMT_TIME = NOW()
        WHERE CMTID = NCMTID AND CID = NCID AND ID = NID;
		SELECT 'Comment updates successfully' AS RESULT;
    COMMIT;
END $$
DELIMITER ;

-- CALL UpdateCourseComment('');

/*==============================================================*/
/* Proc: Update Test Comment                                    */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `UpdateTestComment`$$
CREATE PROCEDURE UpdateTestComment(
	NCMTID varchar(22),
	NTID varchar(22),
	NID varchar(22),
	NCONTENT text
)
BEGIN
	START TRANSACTION;
		UPDATE COMMENT 
        SET CONTENT = NCONTENT,
			CMT_TIME = NOW()
        WHERE CMTID = NCMTID AND TID = NTID AND ID = NID;
		SELECT 'Comment updates successfully' AS RESULT;
    COMMIT;
END $$
DELIMITER ;

-- CALL UpdateTestComment('');

/*==============================================================*/
/* Proc: Delete Forum Comment                                   */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `DeleteForumComment`$$
CREATE PROCEDURE DeleteForumComment(
	NCMTID varchar(22),
	NFID varchar(22),
	NID varchar(22)
)
BEGIN
	START TRANSACTION;
		DELETE FROM COMMENT
        WHERE CMTID = NCMTID AND FID = NFID AND ID = NID;
		SELECT 'Comment deletes successfully' AS RESULT;
    COMMIT;
END $$
DELIMITER ;

-- CALL DeleteForumComment('');

/*==============================================================*/
/* Proc: Delete Course Comment                                  */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `DeleteCourseComment`$$
CREATE PROCEDURE DeleteCourseComment(
	NCMTID varchar(22),
	NCID varchar(22),
	NID varchar(22)
)
BEGIN
	START TRANSACTION;
		DELETE FROM COMMENT
        WHERE CMTID = NCMTID AND CID = NCID AND ID = NID;
		SELECT 'Comment deletes successfully' AS RESULT;
    COMMIT;
END $$
DELIMITER ;

-- CALL DeleteCourseComment('');

/*==============================================================*/
/* Proc: Delete Test Comment                                    */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `DeleteTestComment`$$
CREATE PROCEDURE DeleteTestComment(
	NCMTID varchar(22),
	NTID varchar(22),
	NID varchar(22)
)
BEGIN
	START TRANSACTION;
		DELETE FROM COMMENT
        WHERE CMTID = NCMTID AND TID = NTID AND ID = NID;
		SELECT 'Comment deletes successfully' AS RESULT;
    COMMIT;
END $$
DELIMITER ;

-- CALL DeleteTestComment('');

/*============================================================================================================================*/
/*                                                            NOTE                                                            */
/*============================================================================================================================*/
/*==============================================================*/
/* Proc: Get note                                               */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `GetNote`$$
CREATE PROCEDURE GetNote(
	LID varchar(22),
    ID varchar(22)
)
BEGIN
	START TRANSACTION;
		SELECT * FROM NOTE N 
		WHERE N.LID = LID AND N.ID= ID;
    COMMIT;
END $$
DELIMITER ;

-- CALL GetNote('');

/*==============================================================*/
/* Proc: Add note                                               */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `AddNote`$$
CREATE PROCEDURE AddNote(
	NID varchar(22),
	LID varchar(22),
	ID varchar(22),
	CONTENT text
)
BEGIN
	START TRANSACTION;
		INSERT INTO NOTE VALUES (NID, LID, ID, CONTENT);
		SELECT 'Note inserts successfully' AS RESULT;
    COMMIT;
END $$
DELIMITER ;

-- CALL AddNote('');

/*==============================================================*/
/* Proc: Update note                                            */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `UpdateNote`$$
CREATE PROCEDURE UpdateNote(
	NoteID varchar(22),
	LessonID varchar(22),
	UID varchar(22),
	NCONTENT text
)	
BEGIN
	START TRANSACTION;
		UPDATE NOTE     
		SET CONTENT = NCONTENT
		WHERE NID = NoteID AND LID = LessonID AND ID = UID; 
		SELECT 'Note updates successfully' AS RESULT;
    COMMIT;
END $$
DELIMITER ;

-- CALL UpdateNote();

/*==============================================================*/
/* Proc: Delete note                                            */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `DeleteNote`$$
CREATE PROCEDURE DeleteNote(
	NoteID varchar(22),
	LessonID varchar(22),
	UID varchar(22)
)
BEGIN
	START TRANSACTION;
		DELETE FROM NOTE 
        WHERE NID = NoteID AND LID = LessonID AND ID = UID; 
		SELECT 'Note deletes successfully' AS RESULT;
    COMMIT;
END $$
DELIMITER ;

-- CALL DeleteNote();

/*============================================================================================================================*/
/*                                                          QUESTION                                                          */
/*============================================================================================================================*/
/*==============================================================*/
/* Proc: Get question                                           */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `GetQuestion`$$
CREATE PROCEDURE GetQuestion(
	LID varchar(22)
)
BEGIN
	START TRANSACTION;
		SELECT * FROM QUESTION Q
		WHERE Q.LID = LID;
    COMMIT;
END $$
DELIMITER ;

-- CALL GetQuestion();

/*==============================================================*/
/* Proc: Add question                                           */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `AddQuestion`$$
CREATE PROCEDURE AddQuestion(
	QID varchar(22),
	LID varchar(22),
	CONTENT text,
	IMG varchar(100),
	AUDIO varchar(100),
	SOLUTION text
)
BEGIN
	START TRANSACTION;
		INSERT INTO NOTE VALUES (QID, LID, CONTENT, IMG, AUDIO, SOLUTION);
		SELECT 'Question inserts successfully' AS RESULT;
    COMMIT;
END $$
DELIMITER ;

-- CALL AddQuestion();

/*==============================================================*/
/* Proc: Update question                                        */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `UpdateQuestion`$$
CREATE PROCEDURE UpdateQuestion(
	QuestionID varchar(22),
	LessonID varchar(22),
	NCONTENT text,
	NIMG varchar(100),
	NAUDIO varchar(100),
	NSOLUTION text
)	
BEGIN
	START TRANSACTION;
		UPDATE QUESTION     
		SET CONTENT = NCONTENT,
			IMG = NIMG,
            AUDIO = NAUDIO,
            SOLUTION = NSOLUTION
		WHERE QID = QuestionID AND LID = LessonID; 
		SELECT 'Question updates successfully' AS RESULT;
    COMMIT;
END $$
DELIMITER ;

-- CALL UpdateQuestion();

/*==============================================================*/
/* Proc: Delete question                                        */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `DeleteQuestion`$$
CREATE PROCEDURE DeleteQuestion(
	QuestionID varchar(22)
)
BEGIN
	START TRANSACTION;
		DELETE FROM ANSWER WHERE QID = QuestionID;
		DELETE FROM QUESTION WHERE QID = QuestionID; 
		SELECT 'Question deletes successfully' AS RESULT;
    COMMIT;
END $$
DELIMITER ;

-- CALL DeleteQuestion();

/*============================================================================================================================*/
/*                                                            FORUM                                                           */
/*============================================================================================================================*/
/*==============================================================*/
/* Proc: Get forum list                                         */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `ForumList`$$
CREATE PROCEDURE ForumList(
)
BEGIN
	START TRANSACTION;
		SELECT * FROM FORUM;
    COMMIT;
END $$
DELIMITER ;

-- CALL ForumList();

/*==============================================================*/
/* Proc: Get specific forum                                     */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `SpecificForum`$$
CREATE PROCEDURE SpecificForum(
	STR varchar(22)
)
BEGIN
	START TRANSACTION;
		SELECT * FROM FORUM
		WHERE FID LIKE CONCAT('%', STR, '%') OR TITLE LIKE CONCAT('%', STR, '%');
    COMMIT;
END $$
DELIMITER ;

-- CALL SpecificForum("RELATIVE");

/*==============================================================*/
/* Proc: Add forum                                              */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `AddForum`$$
CREATE PROCEDURE AddForum(
	FID varchar(22),
	ID varchar(22),
	TITLE text,
	CONTENT text,
	IMG varchar(100)
)
BEGIN
	START TRANSACTION;
		INSERT INTO FORUM VALUES (FID, ID, TITLE, NOW(), CONTENT, IMG);
		SELECT 'Forum inserts successfully' AS RESULT;
    COMMIT;
END $$
DELIMITER ;

-- CALL AddForum();

/*==============================================================*/
/* Proc: Update forum                                           */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `UpdateForum`$$
CREATE PROCEDURE UpdateForum(
	ForumID varchar(22),
	UID varchar(22),
	NTITLE text,
	NCONTENT text,
	NIMG varchar(100)
)	
BEGIN
	START TRANSACTION;
		UPDATE FORUM     
		SET TITLE = NTITLE,
			DATE_ESTABLISHED = NOW(),
			CONTENT = NCONTENT, 
            IMG = NIMG
		WHERE FID = ForumID AND ID = UID; 
		SELECT 'Forum updates successfully' AS RESULT;
    COMMIT;
END $$
DELIMITER ;

-- CALL UpdateForum();

/*==============================================================*/
/* Proc: Delete forum                                           */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `DeleteForum`$$
CREATE PROCEDURE DeleteForum(
	ForumID varchar(22)
)
BEGIN
	START TRANSACTION;
		DELETE FROM COMMENT WHERE FID = ForumID; 
        DELETE FROM FORUM WHERE FID = ForumID; 
		SELECT 'Forum deletes successfully' AS RESULT;
    COMMIT;
END $$
DELIMITER ;

-- CALL DeleteForum();

/*-------------------------------------------------------------------------------------------------------------------------------------*/

/*==============================================================*/
/* Proc: Create users                                           */
/*==============================================================*/
DROP PROCEDURE IF EXISTS usp_CreateUser;
DELIMITER $$
CREATE PROCEDURE usp_CreateUser()
BEGIN
    DECLARE Usr varchar(30);
    DECLARE is_done INT DEFAULT FALSE;
    DECLARE cur CURSOR FOR
        SELECT USERNAME
        FROM ACCOUNT
        WHERE USERNAME NOT IN (SELECT user
                            FROM mysql.user);
	DECLARE CONTINUE HANDLER FOR NOT FOUND SET is_done = TRUE;
    -- SET SESSION sql_mode = 'NO_BACKSLASH_ESCAPES'; 

    OPEN cur;
    user_list: LOOP
        FETCH cur INTO Usr;
        IF is_done THEN
            LEAVE user_list;
        END IF;

        SET @sql := CONCAT('CREATE USER \'', Usr, '\'@\'localhost\' IDENTIFIED BY \'', Usr, '\';');
        PREPARE stmt FROM @sql;
        EXECUTE stmt;
        DEALLOCATE PREPARE stmt;

        SET @sql := CONCAT('GRANT ALL ON IELTS.* TO \'', Usr, '\'@\'localhost\';');
        PREPARE stmt FROM @sql;
        EXECUTE stmt;
        DEALLOCATE PREPARE stmt;
    END LOOP user_list;
    CLOSE cur;
END $$
DELIMITER ;

/*============================================================================================================================*/
/*                                                           ROLES                                                            */
/*============================================================================================================================*/
/*==============================================================*/
/* Role: Visitor                                                */
/*==============================================================*/
CREATE ROLE IF NOT EXISTS 'visitor';
GRANT SELECT ON IELTS.FORUM TO visitor;
GRANT SELECT ON IELTS.COURSE TO visitor;
GRANT SELECT ON IELTS.COMMENT TO visitor;
-- SHOW GRANTS FOR visitor;

/*==============================================================*/
/* Role: Admin                                                  */
/*==============================================================*/
CREATE ROLE IF NOT EXISTS 'admin';
GRANT ALL ON IELTS.* TO admin;
-- SHOW GRANTS FOR admin;
-- CREATE USER 'pmp' identified by 'pmp';
-- ALTER USER 'pmp' IDENTIFIED BY 'pmp';
-- GRANT 'admin' TO 'pmp';

-- DROP ROLE admin;

/*==============================================================*/
/* Role: Teacher                                                */
/*==============================================================*/
CREATE ROLE IF NOT EXISTS 'teacher'; 
-- GRANT SELECT ON IELTS.FORUM TO teacher;
-- GRANT SELECT ON IELTS.COURSE TO teacher;
-- GRANT SELECT ON IELTS.COMMENT TO teacher;
-- SHOW GRANTS FOR teacher;

/*==============================================================*/
/* Role: Student                                                */
/*==============================================================*/
CREATE ROLE IF NOT EXISTS 'student';
-- GRANT SELECT ON IELTS.FORUM TO student;
-- GRANT SELECT ON IELTS.COURSE TO student;
-- GRANT SELECT ON IELTS.COMMENT TO student;
-- SHOW GRANTS FOR student;

-- SELECT user AS role_name
-- FROM mysql.user;



-- SET @sql := CONCAT('CREATE USER \'', 'pmp', '\'@\'localhost\' IDENTIFIED BY \'', 'pmp', '\';');
-- PREPARE stmt FROM @sql;
-- EXECUTE stmt;
-- DEALLOCATE PREPARE stmt;
-- CALL usp_CreateUser();

-- select host, user from mysql.user;