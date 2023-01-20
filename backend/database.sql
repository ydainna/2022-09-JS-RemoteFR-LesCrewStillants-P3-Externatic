DROP TABLE IF EXISTS user_offer;
DROP TABLE IF EXISTS offer;
DROP TABLE IF EXISTS company;
DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS address;
DROP TABLE IF EXISTS information;
DROP TABLE IF EXISTS role;

CREATE TABLE role (
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, 
role VARCHAR(80) NOT NULL);

CREATE TABLE information (
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
cv VARCHAR(100) NULL,
actual_situation VARCHAR(80),
isRemote BOOLEAN NOT NULL DEFAULT FALSE,
isActiveSearch BOOLEAN NOT NULL DEFAULT FALSE,
job TEXT NULL,
technology TEXT NULL,
type_of_contract VARCHAR(80) NULL,
start_date DATE NULL,
localisation_job VARCHAR(250) NULL);

CREATE TABLE address (
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, 
number_address INT NULL, type_of_street VARCHAR(20) NULL, 
street_name VARCHAR(150) NULL, 
zipcode INT NULL,
city VARCHAR(50) NULL, 
country VARCHAR(50) NULL, 
complementary_info VARCHAR(250) NULL);

CREATE TABLE user (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
avatar VARCHAR(250) NULL,
email VARCHAR(80) NOT NULL,
password VARCHAR(250) NOT NULL,
civility VARCHAR(20) NULL,
firstname VARCHAR(100) NULL,
lastname VARCHAR(150) NULL,
phone_number VARCHAR(20) NULL,
created_at DATE NULL, 
role_id INT NULL DEFAULT 2,
CONSTRAINT fk_user_role
FOREIGN KEY (role_id)
REFERENCES role(id),
information_id INT,
CONSTRAINT fk_user_information
FOREIGN KEY (information_id)
REFERENCES information(id),
address_id INT,
CONSTRAINT fk_user_address
FOREIGN KEY (address_id)
REFERENCES address(id));

CREATE TABLE company (
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, 
name VARCHAR(80) NOT NULL,
sector VARCHAR(80) NOT NULL, 
siret VARCHAR(25) NOT NULL, 
logo VARCHAR(250) NOT NULL, 
description TEXT NOT NULL, 
banner VARCHAR(250) NOT NULL, 
link VARCHAR(250) NOT NULL, 
contact_name VARCHAR(80) NOT NULL, 
user_id INT NOT NULL,
CONSTRAINT fk_user_company FOREIGN KEY (user_id) REFERENCES user(id), 
address_id INT NOT NULL,
CONSTRAINT fk_address_company FOREIGN KEY (address_id) REFERENCES address(id));

CREATE TABLE offer (
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
title VARCHAR(80) NOT NULL,
job_description TEXT NULL,
mission TEXT NULL,
seeked_profile TEXT NULL,
complementary_info TEXT NULL,
user_id INT NOT NULL,
CONSTRAINT fk_offer_user FOREIGN KEY (user_id) REFERENCES user(id),
company_id INT NOT NULL,
CONSTRAINT fk_offer_company FOREIGN KEY (company_id) REFERENCES company(id));

CREATE TABLE user_offer (
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
isFavorite BOOLEAN NOT NULL DEFAULT FALSE,
isApplied BOOLEAN NOT NULL DEFAULT FALSE,
user_id INT NOT NULL,
CONSTRAINT fk_user_user_offer FOREIGN KEY (user_id) REFERENCES user(id), 
offer_id INT NOT NULL,
CONSTRAINT fk_offer_user_offer FOREIGN KEY (offer_id) REFERENCES offer(id));

INSERT into role (role)
VALUES ("admin"),
("candidat"),
("consultant");

INSERT into information (cv, actual_situation, isRemote, isActiveSearch, job, technology, type_of_contract, start_date, localisation_job)
VALUES ("","en recherche d'emploi", 0, 0, "web developer", "HTML, CSS, Javascript, React, Angular, Java", "CDI", "2022-02-09", "Paris"),
("", "en recrutement", 0, 0, "Developer fullstack", "HTML, CSS, Javascript, Java, Python", "CDD", "2022-02-03", "Paris"),
("", "en poste", 1, 1, "Data Analyst", "HTML, CSS, Javascript, Java, Python", "CDI", "2022-02-09", "Lille"),
("", "", 1, 0, "Consultante", "", "", "2022-02-09", ""),
("", "", 1, 0, "Consultante", "", "", "2022-02-09", ""),
("", "", 1, 0, "Consultante", "", "", "2022-02-09", "");

INSERT into address (number_address, street_name, zipcode, city, country)
VALUES ("123", "rue victor hugo", "75011", "Paris","France"),
("12", "avenue Lamartine", "75003", "Paris","France"),
("9", "rue de la fricatelle", "59000", "Lille","France"),
("25", "rue de la fricatelle", "59000", "Lille","France"),
("5", "rue Mendes France", "59001", "Lille","France"),
("1", "Apple Avenue", "01000", "Paris","France"),
("28", "rue Armand Carrel", "93100", "Montreuil","France");

INSERT into user (avatar, email, password, civility, firstname, lastname, phone_number, created_at, role_id, information_id, address_id)
VALUES ("https://img.freepik.com/photos-gratuite/beau-jeune-homme-t-shirt-blanc-poitrine-bras-croises-souriant-heureux_176420-21607.jpg?w=2000","hello@reallygreatsite.com", "azerty", "M.", "John", "Doe", "0612345678", "2023-01-17", 2, 1, 1),
("https://prod.liveshare.vsengsaas.visualstudio.com/join?52EC688E5DFEC3EACF371DE9AA010089957F", "siri@applemail.com", "admin", "Mme.", "Siri", "Appletech", "0198765432", "2023-01-17", 1, 2, 2),
("https://prod.liveshare.vsengsaas.visualstudio.com/join?52EC688E5DFEC3EACF371DE9AA010089957F", "nicolas@carensac.fr", "qwerty", "M.", "Nicolas", "Carensac", "0269765432", "2023-01-19", 2, 3, 3),
("https://media.licdn.com/dms/image/C5603AQHWw3KW8KUmHQ/profile-displayphoto-shrink_800_800/0/1589282191440?e=1679529600&v=beta&t=Ri2A9XGSktFOv1HIIyFn6tW91VF8YErtAesFmfUmGf4", "perrine.dupisson@externatic.fr", "consultante", "Mme.", "Perrine", "Dupisson", "0269765432", "2023-02-01", 3, 4, 4),
("", "jeanmarc.pahayrault@externatic.fr", "consultant", "M.", "Jean-Marc", "PaHayrault", "0225644932", "2023-01-16", 3, 5, 5),
("https://play-lh.googleusercontent.com/SkNOjuAwZsCpzCUqYLOpyw4ksoy2Q8AqXsbaNAf5HO5YWAuYfwVCxMURfymwSWNZHYQ", "rayman@ubisoft.com", "lapincretin", "M.", "Rayman", "Ubisoft", "0612587896", "2023-01-18", 3, 6, 7);

INSERT into company (name, sector, siret, logo, description, banner, link, contact_name, user_id, address_id)
VALUES ("Apple", "technologie", "12345678900012", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png", "Une magnifique entreprise","https://www.sudradio.fr/wp-content/uploads/2017/02/610529-ez-apple.jpg", "https://www.apple.com/fr/", "Siri", 2, 6 ),
("Wild Code School", "organisme de formation", "79492606300023", "https://www.wildcodeschool.com/static/imgs/logo.png", "La Wild Code School propose des formations intensives aux métiers tech - Développement web, Data analyse, Cybersécurité, Product management - sur campus, à distance ou en entreprise.", "https://pr1.nicelocal.fr/9TBEIi6XCLJdmCYSCxaMhg/640x360,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2akU4C3-pXS2_BxHMKL2p8rnvj_GigA50mjUqCc5ENexYb5MdSD6EcwutG4YfjqzdQ", "https://www.wildcodeschool.com/fr-FR", "Nicolas", 3, 7 ),
("Ubisoft", "développement et édition de jeux vidéos", "50143053200033", "https://www.1min30.com/wp-content/uploads/2018/04/logo-Ubisoft.jpg", "Ubisoft est une entreprise française de développement, d'édition et de distribution de jeux vidéo","https://www.numerama.com/wp-content/uploads/2020/07/ubisoft.jpeg", "https://www.ubisoft.com/fr-fr/", "Rayman", 6, 7 );

INSERT into offer (title, job_description, mission, seeked_profile, complementary_info, user_id, company_id)
VALUES ("Developer FullStack", "Un job super dans une entreprise trop bien", "Participer au développement de l'entreprise sur la partie tech", "Si vous avez un bac+5 dans le domaine de la tech, venez chez nous !", "Tickets restaurant", 4, 1),
("Developer FrontEnd", "Un job super dans une entreprise trop bien", "Participer au développement de l'entreprise sur la partie tech", "Si vous avez un bac+5 dans le domaine de la tech, venez chez nous !", "Tickets restaurant", 4, 1),
("Data Analyst", "Un job super dans une entreprise trop bien", "Participer au développement de l'entreprise sur la partie tech", "Si vous avez un bac+45 dans le domaine de la tech, venez chez nous !", "Tickets restaurant", 4, 1),
("Data Analyst", "Un job super dans une entreprise trop bien", "Participer au développement de l'entreprise sur la partie tech", "Si vous avez une expérience dans le domaine de la tech, venez chez nous !", "Tickets restaurant, Formations adaptés, babyfoot", 5, 2),
("Data Engineer", "Un job super dans une entreprise trop bien", "Participer au développement de l'entreprise sur la partie tech", "Si vous avez une expérience dans le domaine de la tech, venez chez nous !", "Tickets restaurant, Formations adaptés, babyfoot", 5, 2),
("Teaching Assistant - Web Developper", "Un job super dans une entreprise trop bien", "Participer au développement de l'entreprise sur la partie tech", "Vous avez déjà réalisé une de nos formations pour débutant ou un équivalent? Vous avez dans l'idée de vouloir évoluer tout en apprenant aux autres? Alors pourquoi ne pas devenir Teaching Assistant?", "Tickets restaurant, Formations adaptés, babyfoot", 5, 2),
("Teaching Assistant - UX/UI Designer", "Un job super dans une entreprise trop bien", "Participer au développement de l'entreprise sur la partie tech", "Vous avez déjà réalisé une de nos formations pour débutant ou un équivalent? Vous avez dans l'idée de vouloir évoluer tout en apprenant aux autres? Alors pourquoi ne pas devenir Teaching Assistant?", "Tickets restaurant, Formations adaptés, babyfoot", 5, 2),
("Teaching Assistant - Data Analyst", "Un job super dans une entreprise trop bien", "Participer au développement de l'entreprise sur la partie tech", "Vous avez déjà réalisé une de nos formations pour débutant ou un équivalent? Vous avez dans l'idée de vouloir évoluer tout en apprenant aux autres? Alors pourquoi ne pas devenir Teaching Assistant?", "Tickets restaurant, Formations adaptés, babyfoot", 5, 2);

INSERT into user_offer (isFavorite, isApplied, user_id, offer_id)
VALUES 
(false, true, 1, 1),
(true, false, 1, 2),
(false, true, 3, 3),
(false, true, 3, 4),
(true, false, 3, 5),
(true, false, 3, 8),
(false, true, 1, 6),
(true, false, 1, 7);