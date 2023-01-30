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
number_address INT NULL, 
street_name VARCHAR(150) NULL, 
zipcode INT NULL,
city VARCHAR(50) NULL, 
country VARCHAR(50) NULL, 
complementary_info VARCHAR(250) NULL);

CREATE TABLE user (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
avatar VARCHAR(250) NULL DEFAULT 'avatarTemoin.png',
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
is_validated BOOLEAN NOT NULL DEFAULT FALSE,
user_id INT NOT NULL,
CONSTRAINT fk_user_company FOREIGN KEY (user_id) REFERENCES user(id), 
address_id INT NOT NULL,
CONSTRAINT fk_address_company FOREIGN KEY (address_id) REFERENCES address(id));

CREATE TABLE offer (
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
title VARCHAR(80) NOT NULL,
job_description TEXT NULL,
type_of_contract TEXT NOT NULL,
compensation VARCHAR(80),
schedule VARCHAR(80),
localisation TEXT NOT NULL,
mission TEXT NULL,
seeked_profile TEXT NULL,
isRemote BOOLEAN NOT NULL DEFAULT FALSE,
complementary_info TEXT NULL,
user_id INT NULL,
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
CONSTRAINT fk_offer_user_offer FOREIGN KEY (offer_id) REFERENCES offer(id),
consultant_id INT NOT NULL,
CONSTRAINT fk_consultant FOREIGN KEY (consultant_id) REFERENCES user(id));

INSERT into role (role)
VALUES ("admin"),
("candidat"),
("consultant");

INSERT into information (cv, actual_situation, isRemote, isActiveSearch, job, technology, type_of_contract, start_date, localisation_job)
VALUES ("","En recherche d'emploi", false, false, "Web developer", "HTML, CSS, Javascript, React, Angular, Java", "CDI", "2022-02-09", "Paris"),
("", "En recrutement", false, false, "Developer fullstack", "HTML, CSS, Javascript, Java, Python", "CDD", "2022-02-03", "Paris"),
("", "En poste", true, true, "Data Analyst", "HTML, CSS, Javascript, Java, Python", "CDI", "2022-02-09", "Lille"),
("", "", true, false, "Consultante", "", "", "2022-02-09", ""),
("", "", true, false, "Consultante", "", "", "2022-02-09", ""),
("", "", true, false, "Consultante", "", "", "2022-02-09", "");

INSERT into address (number_address, street_name, zipcode, city, country, complementary_info)
VALUES ("123", "rue victor hugo", "75011", "Paris", "France", ""),
("12", "avenue Lamartine", "75003", "Paris", "France", ""),
("9", "rue de la fricatelle", "59000", "Lille", "France", ""),
("25", "rue de la fricatelle", "59000", "Lille", "France", ""),
("5", "rue Mendes France", "59001", "Lille", "France", ""),
("1", "Apple Avenue", "01000", "Paris", "France", ""),
("28", "rue Armand Carrel", "93100", "Montreuil", "France", "");

INSERT into user (avatar, email, password, civility, firstname, lastname, phone_number, created_at, role_id, information_id, address_id)
VALUES ("","hello@reallygreatsite.com", '$argon2id$v=19$m=65536,t=5,p=1$/YQjilP56CLc1d7xhLe+Jw$tWIdMtp2S6NYtJYMPX7nNC1kI1mbmZE2aZu6RcBkgNU', "M.", "John", "Doe", "0612345678", "2023-01-17", 2, 2, 1),
("", "siri@applemail.com", '$argon2id$v=19$m=65536,t=5,p=1$gqjn8M7yUUvhGRcrYYD6Wg$+Q8DZ3owWlIXaFraJQm46ECiHxUbvG8/cZMN4Ag4zLk', "Mme.", "Siri", "Appletech", "0198765432", "2023-01-17", 1, 2, 2),
("", "nicolas@carensac.fr", '$argon2id$v=19$m=65536,t=5,p=1$p5j0JsqBx2R9eK0CYhvcaQ$yDkfymrrM7DqpsZKeBmmbul3SBt8sSybpGgi7K/8+oY', "M.", "Nicolas", "Carensac", "0269765432", "2023-01-19", 2, 3, 3),
("", "perrine.dupisson@externatic.fr", '$argon2id$v=19$m=65536,t=5,p=1$96CiA5ePJIWvlSFyWDzFcQ$3zw9knJPFErn2vM4Eh75DpBMpISjRAYLLVXVEMeV7vg', "Mme.", "Perrine", "Dupisson", "0269765432", "2023-02-01", 3, 4, 4),
("", "jeanmarc.pahayrault@externatic.fr", '$argon2id$v=19$m=65536,t=5,p=1$FYhLS+de/YzhOSbeoCRjqg$E6ne7rMASAqIXrJfo6s3zUGGwlLkHteHDCiwlQKA+PI', "M.", "Jean-Marc", "PaHayrault", "0225644932", "2023-01-16", 3, 5, 5),
("", "rayman@ubisoft.com", '$argon2id$v=19$m=65536,t=5,p=1$nTMtPSya8xr+zF7ikpw7Yw$KdYmdNfRKrrUVFwR5X21SRUKEuimjp6qNsLdN/GYtt4', "M.", "Rayman", "Ubisoft", "0612587896", "2023-01-18", 3, 6, 7);

INSERT into company (name, sector, siret, logo, description, banner, link, contact_name, user_id, address_id, is_validated)
VALUES ("Apple", "Technologie", "12345678900012", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png", "Apple est une entreprise de technologie leader dans la production d'appareils électroniques tels que l'iPhone, l'iPad et le Mac. Elle a également une suite logicielle complète comprenant iOS, macOS, watchOS et tvOS.","https://www.sudradio.fr/wp-content/uploads/2017/02/610529-ez-apple.jpg", "https://www.apple.com/fr/", "Siri", 4, 6, 1 ),
("Wild Code School", "Organisme de formation", "79492606300023", "https://www.wildcodeschool.com/static/imgs/logo.png", "La Wild Code School est une école de formation dédiée à l'apprentissage de la programmation informatique. Avec un enseignement pratique axé sur les projets et des enseignants expérimentés, la Wild Code School aide les étudiants à acquérir les compétences nécessaires pour devenir des développeurs web professionnels.", "https://pr1.nicelocal.fr/9TBEIi6XCLJdmCYSCxaMhg/640x360,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2akU4C3-pXS2_BxHMKL2p8rnvj_GigA50mjUqCc5ENexYb5MdSD6EcwutG4YfjqzdQ", "https://www.wildcodeschool.com/fr-FR", "Nicolas", 5, 7, 1 ),
("Ubisoft", "Développement et édition de jeux vidéos", "50143053200033", "https://www.1min30.com/wp-content/uploads/2018/04/logo-Ubisoft.jpg", "Ubisoft est une entreprise de développement et d'édition de jeux vidéo renommée pour ses franchises de jeux telles que Assassin's Creed, Far Cry et Tom Clancy's. Fondée en France en 1986, Ubisoft a maintenant des studios de développement à travers le monde.","https://www.numerama.com/wp-content/uploads/2020/07/ubisoft.jpeg", "https://www.ubisoft.com/fr-fr/", "Rayman", 6, 7, 1 );

INSERT into offer (title, job_description, type_of_contract, compensation, schedule, localisation, mission, seeked_profile, isRemote, complementary_info, user_id, company_id)
VALUES ("Developer FullStack", "Nous recherchons un développeur FullStack expérimenté pour rejoindre notre équipe de développeurs. Vous viendrez en support de nos équipes pour les projets en cours et participerez au développement de nouvelles applications", "CDI", "50K", "Horaires classiques", "Paris", "Accompagné(e) par votre scrum sur la base des User Stories définies par le PO et auxquelles vous pouvez contribuer, vos missions principales consistent à : concevoir des fonctionnalités en collaboration avec l'Architecte et le Product Owner en respectant les normes et méthodes de conception en vigueur. Développer, tester et mettre à disposition une solution logicielle (fonctionnalité et/ou correctif), dans le respect des évolutions souhaitées, des normes, des coûts, de la qualité et des délais. Participer activement à la Communauté des développeurs Ios. Ce qui compte avant tout, c'est votre appétence pour le domaine du développement mobile et plus spécifiquement concernant la technologie iOS / Swift / UI Kit / RX Swift.", "Vous participez à la conception générale et technique en lien avec l'équipe. Vous assurez la cohérence technique globale. Vous êtes garant de la qualité du code que vous produisez. Vous collaborez étroitement avec les autres développeurs, le Product Owner et les autres parties prenantes du projet. Vous assurez les tests et les déploiements. Vous maîtrisez Swift, Objective-C, Xcode (au moins 3 ans d'expérience). Vous maîtrisez les paterns MVVM et RXSwift. Vous avez déjà travaillé avec SwiftUI ou en connaissez bien les principes. Vous êtes à l'aise avec la méthodologie Scrum. Vous maîtrisez les protocoles applicatifs HTTP, MQTT/TLS, API Rest. Vous avez pu démontrer une expérience sur des applications à forte charge.", 0, "Tickets restaurant", 4, 1),
("Developer FrontEnd", "Nous recherchons un développeur FrontEnd passionné pour rejoindre notre équipe de développement. Le candidat doit avoir une expérience en développement web avec une connaissance approfondie des technologies PHP, Javascript, NodeJS.", "CDD", "50K", "Horaires classiques", "Toulouse", "Accompagné(e) par votre scrum sur la base des User Stories définies par le PO et auxquelles vous pouvez contribuer, vos missions principales consistent à : concevoir des fonctionnalités en collaboration avec l'Architecte et le Product Owner en respectant les normes et méthodes de conception en vigueur. Développer, tester et mettre à disposition une solution logicielle (fonctionnalité et/ou correctif), dans le respect des évolutions souhaitées, des normes, des coûts, de la qualité et des délais. Participer activement à la Communauté des développeurs Ios. Ce qui compte avant tout, c'est votre appétence pour le domaine du développement mobile et plus spécifiquement concernant la technologie iOS / Swift / UI Kit / RX Swift.", "Vous participez à la conception générale et technique en lien avec l'équipe. Vous assurez la cohérence technique globale. Vous êtes garant de la qualité du code que vous produisez. Vous collaborez étroitement avec les autres développeurs, le Product Owner et les autres parties prenantes du projet. Vous assurez les tests et les déploiements. Vous maîtrisez Swift, Objective-C, Xcode (au moins 3 ans d'expérience). Vous maîtrisez les paterns MVVM et RXSwift. Vous avez déjà travaillé avec SwiftUI ou en connaissez bien les principes. Vous êtes à l'aise avec la méthodologie Scrum. Vous maîtrisez les protocoles applicatifs HTTP, MQTT/TLS, API Rest. Vous avez pu démontrer une expérience sur des applications à forte charge.", 1, "Tickets restaurant", 4, 1),("Data Analyst", "Ubisoft est à la recherche d'un data analyst pour prendre en charge l'analyse des données et la gestion des jeux en direct de nos jeux mobiles gratuits. Le candidat idéal aura une expérience dans les jeux gratuits et a travaillé dans un poste similaire.", "CDD", "50K", "Horaires classiques", "Marseille", "Participer au développement des applications web mobile Ubisoft en méthode Agile. Développer de nouvelles idées et analyses qui éclairent les décisions et aident à continuer de ravir les personnes qui jouent à nos jeux. Coordonner et analyser l'efficacité des événements de jeu et de certaines fonctionnalités spécifiques.", "Excellentes compétences SQL : vaste expérience dans l'interrogation de grands ensembles de données complexes. Une connaissance avancée d'Excel et de la suite MS Office est essentielle. Bonne expérience en R/Python. Une bonne connaissance en bases de données/BI. Une bonne connaissance du logiciel Tableau. Bonne capacité d'analyse et de reporting.", 0, "Tickets restaurant", 6, 3),
("Data Analyst", "Ubisoft est à la recherche d'un data analyst pour prendre en charge l'analyse des données et la gestion des jeux en direct de nos jeux mobiles gratuits. Le candidat idéal aura une expérience dans les jeux gratuits et a travaillé dans un poste similaire.", "CDI", "31K", "Horaires classiques", "Lille", "Participer au développement des applications web mobile Ubisoft en méthode Agile. Développer de nouvelles idées et analyses qui éclairent les décisions et aident à continuer de ravir les personnes qui jouent à nos jeux. Coordonner et analyser l'efficacité des événements de jeu et de certaines fonctionnalités spécifiques.", "Excellentes compétences SQL : vaste expérience dans l'interrogation de grands ensembles de données complexes. Une connaissance avancée d'Excel et de la suite MS Office est essentielle. Bonne expérience en R/Python. Une bonne connaissance en bases de données/BI. Une bonne connaissance du logiciel Tableau. Bonne capacité d'analyse et de reporting.", 1, "Tickets restaurant, Formations adaptées, babyfoot", 6, 3),
("Data Engineer", "En tant que Data Engineer, vous rejoindrez une équipe performante composée de personnes internationales. Recevant quotidiennement diverses demandes de données au sein des équipes, vous travaillerez en étroite collaboration avec nos équipes de production pour les aider à comprendre les données et à prendre des décisions basées sur les données.", "CDI", "45 à 50K selon expérience", "Horaires classiques", "Paris", "Rattaché au Data Lead, vos missions seront principalement les suivantes : Travailler en étroite collaboration avec les équipes de production (producteurs, game designers, testeurs, développeurs) et comprendre leurs besoins data, en fonction des étapes de la production. Coordonner avec les équipes internes pour travailler sur des problèmes commerciaux réels et fournir des recommandations. Développer des tableaux de bord et des rapports automatisés avec Tableau pour améliorer l'autonomie des données et l'efficacité globale des équipes. Maintenir, mettre à jour et créer des suivis d'événements dans nos jeux pour comprendre les comportements des utilisateurs. Lancer des tests AB pour tester de nouvelles fonctionnalités et formats afin de générer la meilleure expérience utilisateur dans le jeu.", "Excellentes compétences SQL : vaste expérience dans l'interrogation de grands ensembles de données complexes. Une connaissance avancée d'Excel et de la suite MS Office est essentielle. Bonne expérience en R/Python. Une bonne connaissance en bases de données/BI. Une bonne connaissance du logiciel Tableau. Bonne capacité d'analyse et de reporting.", 1, "Tickets restaurant, Formations adaptées, babyfoot", 6, 3),
("Teaching Assistant - Web Developper", "En tant que teaching assistant, vous assisterez les enseignants de la Wild Code School. Votre mission est de participer et d'animer les cours, d'accompagner les élèves dans leur apprentissage et leurs projets, tout en évoluant personnellement. Les candidats doivent avoir déjà suivi une formation pour débutants dans le domaine concerné ou un équivalent.", "CDD", "1600€/mois", "Horaires classiques", "Toulouse", "Au sein de l’équipe teaching, le teaching assistant est chargé de : Concevoir et animer des ateliers, cours, dojos, et démo dans le cadre de la formation. Proposer et superviser les projets élèves de mise en application. Concevoir et enrichir les contenus pédagogiques de la Wild Code School (quêtes, vidéos, etc.). Être « role model » pour les élèves sur tous les aspects de savoir-faire et savoir-être de professionnel de l'informatique. Assurer le suivi individuel des élèves en collaboration avec l'équipe Student Experience. Participer à l’insertion professionnelle des élèves en lien avec l'équipe Career Support
Animer des ateliers grands public de découverte des métiers de l'infrastructure et de la cybersécurité.", "Vous avez déjà réalisé une de nos formations pour débutant ou un équivalent ? Vous avez dans l'idée de vouloir évoluer tout en apprenant aux autres ? Alors pourquoi ne pas devenir Teaching Assistant ?", 1, "Tickets restaurant, Formations adaptées, babyfoot", 5, 2),
("Teaching Assistant - UX/UI Designer", "En tant que teaching assistant, vous assisterez les enseignants de la Wild Code School. Votre mission est de participer et d'animer les cours, d'accompagner les élèves dans leur apprentissage et leurs projets, tout en évoluant personnellement. Les candidats doivent avoir déjà suivi une formation pour débutants dans le domaine concerné ou un équivalent.", "CDI", "1600€/mois", "Horaires classiques", "Marseille", "Au sein de l’équipe teaching, le teaching assistant est chargé de : Concevoir et animer des ateliers, cours, dojos, et démo dans le cadre de la formation. Proposer et superviser les projets élèves de mise en application. Concevoir et enrichir les contenus pédagogiques de la Wild Code School (quêtes, vidéos, etc.). Être « role model » pour les élèves sur tous les aspects de savoir-faire et savoir-être de professionnel de l'informatique. Assurer le suivi individuel des élèves en collaboration avec l'équipe Student Experience. Participer à l’insertion professionnelle des élèves en lien avec l'équipe Career Support
Animer des ateliers grands public de découverte des métiers de l'infrastructure et de la cybersécurité.", "Vous avez déjà réalisé une de nos formations pour débutant ou un équivalent? Vous avez dans l'idée de vouloir évoluer tout en apprenant aux autres? Alors pourquoi ne pas devenir Teaching Assistant?", 0, "Tickets restaurant, Formations adaptées, babyfoot", 5, 2),
("Teaching Assistant - Data Analyst", "En tant que teaching assistant, vous assisterez les enseignants de la Wild Code School. Votre mission est de participer et d'animer les cours, d'accompagner les élèves dans leur apprentissage et leurs projets, tout en évoluant personnellement. Les candidats doivent avoir déjà suivi une formation pour débutants dans le domaine concerné ou un équivalent.", "CDD", "1600€/mois", "Horaires classiques", "Paris", "Au sein de l’équipe teaching, le teaching assistant est chargé de : Concevoir et animer des ateliers, cours, dojos, et démo dans le cadre de la formation. Proposer et superviser les projets élèves de mise en application. Concevoir et enrichir les contenus pédagogiques de la Wild Code School (quêtes, vidéos, etc.). Être « role model » pour les élèves sur tous les aspects de savoir-faire et savoir-être de professionnel de l'informatique. Assurer le suivi individuel des élèves en collaboration avec l'équipe Student Experience. Participer à l’insertion professionnelle des élèves en lien avec l'équipe Career Support
Animer des ateliers grands public de découverte des métiers de l'infrastructure et de la cybersécurité.", "Vous avez déjà réalisé une de nos formations pour débutant ou un équivalent ? Vous avez dans l'idée de vouloir évoluer tout en apprenant aux autres ? Alors pourquoi ne pas devenir Teaching Assistant ?", 0, "Tickets restaurant, Formations adaptées, babyfoot", 5, 2);

INSERT into user_offer (isFavorite, isApplied, user_id, offer_id, consultant_id)
VALUES 
(false, true, 1, 1, 4),
(true, false, 1, 2, 4),
(false, true, 3, 3, 6),
(false, true, 3, 4, 6),
(true, false, 3, 5, 6),
(true, false, 3, 8, 5),
(false, true, 1, 6, 5),
(true, false, 1, 7, 5);