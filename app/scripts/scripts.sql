DELETE FROM Jobs;
DELETE FROM JobStatuses;
DELETE FROM `Lines`;





ALTER TABLE JobStatuses AUTO_INCREMENT = 1;
ALTER TABLE `Lines` AUTO_INCREMENT = 1;
ALTER TABLE Jobs AUTO_INCREMENT = 1;


INSERT INTO JobStatuses(jobStatusName, createdAt, updatedAt)
VALUES
('Prealerted', NOW(), NOW()),
('Awaiting Book In', NOW(), NOW()),
('Awaiting Screen', NOW(), NOW()),
('Awaiting Repair', NOW(), NOW()),
('Awaiting Build', NOW(), NOW()),
('Awaiting Debug', NOW(), NOW()),
('Awaiting QA', NOW(), NOW()),
('Awaiting OOB', NOW(), NOW()),
('Awaiting Dispatch', NOW(), NOW()),
('Dispatched', NOW(), NOW());



INSERT INTO `Lines`(lineName, createdAt, updatedAt)
VALUES
('Motorola Warranty', NOW(), NOW()),
('Motorola OOW', NOW(), NOW()),
('Nokia Warranty', NOW(), NOW()),
('Nokia OOW', NOW(), NOW()),
('EE Warranty', NOW(), NOW()),
('EE OOW', NOW(), NOW());




INSERT INTO Jobs(createdAt, updatedAt, LineId, JobStatusId)
VALUES
(NOW(), NOW(), 1, 1),
(NOW(), NOW(), 2, 1),
(NOW(), NOW(), 3, 1);


