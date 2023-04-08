USE IELTS;
-- insert into account values(REPLACE(left(UUID(), 22), '-', ''), 'mipu', 'mipu', 'pmp', '113', '@gmail.com', '', 'student');
-- select * from account;
-- Select user from mysql.user;
-- Select current_user();

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
-- SELECT USERNAME, PASSWORD FROM ACCOUNT;
-- SELECT * FROM ACCOUNT;

/*============================================================================================================================*/
/*                                                           COURSE                                                           */
/*============================================================================================================================*/
/*==============================================================*/
/* Proc: All course                                             */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `AllCourse`$$
CREATE PROCEDURE AllCourse()
BEGIN
	SELECT * FROM COURSE;
END $$
DELIMITER ;

-- CALL AllCourse();

/*==============================================================*/
/* Proc: Get course                                             */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `GetCourse`$$
CREATE PROCEDURE GetCourse(
	UID binary(22)
)
BEGIN
	SELECT * FROM COURSE 
    WHERE CID IN (SELECT CID FROM CART WHERE ID = UID AND STATUS = 'PAID');
END $$
DELIMITER ;

-- CALL GetCourse('8a1285eaceae11edb47');

/*==============================================================*/
/* Proc: Get cart                                               */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `GetCart`$$
CREATE PROCEDURE GetCart(
	UID binary(22)
)
BEGIN
	SELECT * FROM COURSE 
    WHERE CID IN (SELECT CID FROM CART WHERE ID = UID AND STATUS = 'UNPAID');
END $$
DELIMITER ;

-- CALL GetCart('8a1285eaceae11edb47');

/*==============================================================*/
/* Proc: Get class                                              */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `GetClass`$$
CREATE PROCEDURE GetClass(
	UID binary(22)
)
BEGIN
	SELECT * FROM COURSE 
    WHERE CID IN (SELECT CID FROM OWNER WHERE ID = UID);
END $$
DELIMITER ;

-- CALL GetClass('8a1285eaceae11edb47');

/*==============================================================*/
/* Func: uuid_v4                                             */
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
-- DELIMITER $$
-- DROP PROCEDURE IF EXISTS `AddCourse`$$
-- CREATE PROCEDURE AddCourse(
--     IN NAME TEXT,
--     IN CATEGORY VARCHAR(20),
--     IN DESCRIPTION TEXT,
--     IN PRICE FLOAT,
--     IN IMG varchar(100)
-- )
-- BEGIN
--     DECLARE ID BINARY(12);
--     -- DECLARE image_data LONGBLOB;
--     SET ID = REPLACE(left(uuid_v4(), 12), '-', '');
--     -- SET image_data = LOAD_FILE(IMG);
--     insert into COURSE (CID, NAME, CATEGORY, DESCRIPTION, PRICE, IMG) VALUES (ID, NAME, CATEGORY, DESCRIPTION, PRICE, IMG);
-- END $$
-- DELIMITER ;

-- CALL AddCourse('LIS 9.0', 'LISTENING-9.0', 'EZ 9+', '50.00', 'D:/TKPM/TH/EducationWebApp/database/bth.jpg');
-- set CID = REPLACE(left(uuid_v4(), 12), '-', '');
-- set image_data = LOAD_FILE('D:/TKPM/TH/EducationWebApp/database/bth.jpg');
-- insert into COURSE (`CID`, `NAME`, `CATEGORY`, `DESCRIPTION`, `PRICE`, `IMG`) VALUES (REPLACE(left(uuid_v4(), 12), '-', ''), 'LIS 9.0', 'LISTENING-9.0', 'EZ 9+', '50.00', image_data);
-- -- SELECT @CID := REPLACE(left(uuid_v4(), 12), '-', '');
-- select LOAD_FILE('D:/TKPM/TH/EducationWebApp/database/bth.jpg');
-- SELECT * FROM COURSE;

/*==============================================================*/
/* Proc: Update course                                             */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `UpdateCourse`$$
CREATE PROCEDURE UpdateCourse()
BEGIN
	SELECT * FROM COURSE;
END $$
DELIMITER ;

-- CALL UpdateCourse();

/*==============================================================*/
/* Proc: Delete course                                             */
/*==============================================================*/
DELIMITER $$
DROP PROCEDURE IF EXISTS `DeleteCourse`$$
CREATE PROCEDURE DeleteCourse()
BEGIN
	SELECT * FROM COURSE;
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
	CID binary(22)
)
BEGIN
	SELECT * FROM LESSON L 
    WHERE L.CID = CID;
END $$
DELIMITER ;

-- CALL GetLesson('8a1285eaceae11edb47');

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
GRANT EXECUTE ON PROCEDURE AllCourse TO visitor;
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