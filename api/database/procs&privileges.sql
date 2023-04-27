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
		SELECT * FROM COURSE; 
    COMMIT;
END $$
DELIMITER ;

-- CALL CourseList();

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
		INSERT INTO COURSE VALUES (CID, NAME, CATEGORY, DESCRIPTION, PRICE, IMG, OWNERID);
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
		SET CID = NCID,
			NAME = NNAME,   
			CONTENT = NCONTENT,
			VIDEO = NVIDEO,
			ATTACHMENT = NATTACHMENT,
            DURATION = NDURATION
		WHERE LID = LessonID; 
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
        DELETE FROM SOLUTION WHERE QID IN (SELECT QID FROM QUESTION WHERE LID = LessonID);
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
			INSERT INTO CART VALUES (CID, UID, false, null);
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
		SELECT 'Update successfully' AS RESULT;
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
	CID varchar(22)
)
BEGIN
	START TRANSACTION;
		SELECT * FROM LESSON L 
		WHERE L.CID = CID;
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
/* Proc: Delete test                                          */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `DeleteTest`$$
CREATE PROCEDURE DeleteTest(
	TestID varchar(22)
)
BEGIN
	START TRANSACTION;
		DELETE FROM SOLUTION WHERE QID IN (SELECT QID FROM QUESTION WHERE TID = TestID);
        DELETE FROM QUESTION WHERE TID = TestID;
        DELETE FROM ANSWER WHERE ASSID IN (SELECT ASSID FROM ASSIGNMENT WHERE TID = TestID);
		DELETE FROM ASSIGNMENT WHERE TID = TestID; 
		DELETE FROM TEST WHERE TID = TestID; 
		SELECT 'Test deletes successfully' AS RESULT;
    COMMIT;
END $$
DELIMITER ;

-- CALL DeleteTest();

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