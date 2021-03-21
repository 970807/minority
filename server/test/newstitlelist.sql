drop table if exists newsTitleList;
CREATE TABLE `newstitlelist` (`id` int NOT NULL AUTO_INCREMENT,`title` varchar(255) COLLATE utf8_bin DEFAULT NULL,`type` int NOT NULL,PRIMARY KEY (`id`)) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
insert into newstitlelist values('1', '推荐', '0');
insert into newstitlelist values('2', '最热', '1');
insert into newstitlelist values('3', '应用推荐', '2');
insert into newstitlelist values('4', '生活方式', '3');
insert into newstitlelist values('5', '效率技巧', '4');
insert into newstitlelist values('6', '播客', '5');
insert into newstitlelist values('7', '视频', '6');
