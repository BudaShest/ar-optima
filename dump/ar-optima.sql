-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Янв 26 2022 г., 21:32
-- Версия сервера: 10.3.22-MariaDB
-- Версия PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `ar-optima`
--

-- --------------------------------------------------------

--
-- Структура таблицы `banned`
--

CREATE TABLE `banned` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `reason` text COLLATE utf8mb4_unicode_ci NULL,
  `ip` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `author_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `text` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime DEFAULT '2022-01-22 10:09:04'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `comment`
--

INSERT INTO `comment` (`id`, `author_id`, `product_id`, `text`, `created_at`) VALUES
(2, 2, 20, 'Самое время пойти в поход.', '2022-01-22 10:09:04'),
(3, 2, 22, 'Нужно быть аккуратнее с этим.....', '2022-01-22 10:09:04'),
(4, 1, 19, 'Просто обожаю олдскульные приставочки)))', '2022-01-22 10:09:04'),
(5, 2, 19, 'Да, мне тоже нравится.', '2022-01-22 10:09:04'),
(6, 2, 18, 'Самая красивая лисичка в мире.', '2022-01-22 10:09:04');

-- --------------------------------------------------------

--
-- Структура таблицы `demo`
--

CREATE TABLE `demo` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `model` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `scene` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `texture` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `demo`
--

INSERT INTO `demo` (`id`, `product_id`, `model`, `scene`, `texture`, `path`) VALUES
(2, 14, 'scene.gltf', 'scene.bin', '02_-_Default_baseColor.png', 'chicken'),
(3, 15, 'scene.gltf', 'scene.bin', 'Material.001_baseColor.png', 'nintendo'),
(4, 16, 'scene.gltf', 'scene.bin', 'default_baseColor.png', 'shiba'),
(7, 21, 'scene.gltf', 'scene.bin', 'Material_baseColor.png', 'firekiller'),
(9, 22, 'scene.gltf', 'scene.bin', 'Material_baseColor.png', 'greenade'),
(10, 23, 'scene.gltf', 'scene.bin', 'Shiba-inu_baseColor.png', 'doggy');

-- --------------------------------------------------------

--
-- Структура таблицы `employee`
--

CREATE TABLE `employee` (
  `id` int(11) NOT NULL,
  `firstname` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `surname` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `age` int(2) DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT 'def-employer.png',
  `position_id` int(11) NOT NULL DEFAULT 1,
  `technology_stack` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `employee`
--

INSERT INTO `employee` (`id`, `firstname`, `surname`, `age`, `description`, `avatar`, `position_id`, `technology_stack`) VALUES
(1, 'Александр', 'Титов', 22, '<p>Автор идеи и генеральный директор компании AR-OPTIMA. Неплохой человек, наверное....</p>', '1642847302736-admin.jpg', 1, '<hr />\r\n<pre>* HTML<br /><span style=\"font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\">* </span>CSS<br /><span style=\"font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\">* </span>JS<br /><span style=\"font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\">* </span>PHP<br /><span style=\"font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\">* </span>Python<br /><span style=\"font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\">* </span>C#<br /><span style=\"font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\">* </span>React<br /><span style=\"font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\">* </span>Redux<br /><span style=\"font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\">* </span>Laravel<br /><span style=\"font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\">* </span>VueYii<br /><span style=\"font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\">* </span>AJAX<br /><span style=\"font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\">* </span>Docker<br /><span style=\"font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\">* </span>Git<br /><span style=\"font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\">* </span>MySql<br /><span style=\"font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\">* </span>PgSql<br /><span style=\"font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\">* </span>Flask<br /><span style=\"font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\">* </span>Codeception<br /><span style=\"font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\">* </span>PHP Unit<br /><span style=\"font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\">* </span>Docker</pre>\r\n<hr />\r\n<p>&nbsp;</p>'),
(2, 'Артём', 'Якушкин', 27, '<p>Быть хорошим художником - не просто. Годы обучения, творческие терзания и постоянный поиск себя - это лишь верхушка айсберга. Не все способны пройти этот путь до конца не потреяв самого себя...<br /><strong>Но это точно не про Артёма!</strong></p>\r\n<p>Помимо того, что Артём является высококлассным художником, он остаётся открытым к общению, добрым и позитивным человеком.<br />Он поможет вам в создании собственного уникального дизайна вашего продукта, будь то веб-сайт, или даже 3d-модель.</p>', '1642926636243-art.jpg', 6, '<hr />\r\n<pre>* Blender<br /><br /><span style=\"font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\">* </span>3d-max<br /><br /><span style=\"font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\">* </span>Figma<br /><br /><span style=\"font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\">* </span>Photoshop<br /><br /><span style=\"font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\">* </span>Corel<br /><br /><span style=\"font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\">* </span>GIMP</pre>\r\n<hr />\r\n<p>&nbsp;</p>'),
(3, 'Анна', 'Макарова', 24, '<p><strong>Анна - специалист по работе с клиентами.</strong></p>\r\n<p>И это не пустые слова. Во-первых, Анна, действительно специалист, во-вторых, она действительно работает с клиентами и делает это на самом высоком уровне.</p>\r\n<p>Каким бы сложным не был Ваш проект, вместе с Анной Вы можете быть уверены, что он будет доведён до своего завершения в самые оптимальные сроки.</p>', '1642928203140-e4d8f8d8fc3c1808.jpg', 7, '<hr />\r\n<pre>* Организаторские способности.<br />\r\n* Внимательное и щепетильный отношение к деталям и срокам.<br />\r\n* Способность генерировать идеи и находить нестандартные решения.<br />\r\n* Умение работать с возражениями и вести переговоры.</pre>\r\n<hr />\r\n<pre>&nbsp;</pre>'),
(4, 'Артемий', 'Лебедев', 46, '<p><strong>Арте́мий Андре́евич Ле́бедев</strong> (род. 13 февраля 1975, Москва, СССР) &mdash; российский дизайнер, изобретатель, предприниматель, блогер, путешественник и автор &laquo;Ководства&raquo; &mdash; руководства по веб-дизайну. Основатель, совладелец и генеральный директор &laquo;WebDesign&raquo;, впоследствии переименованной в Студию Артемия Лебедева.</p>\r\n<p>Артём - великолепный художник, творческая личность, но очень специфичный человлек... Не переживайте, вам не придётся&nbsp;</p>', '1642932761098-fahga[[f.jpg', 8, '<hr />\r\n<pre>* Умение широко мыслить.\r\n<span style=\"font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\">* </span>Умение мыслить гипотезами.\r\n<span style=\"font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\">* </span>Готовность к изменениям и проблемам.\r\n<span style=\"font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\">* </span>Навыки UI-дизайна.\r\n<span style=\"font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\">* </span>Навыки frontend-разработки.\r\n<span style=\"font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\">* </span>Знание базовых принципов визуального дизайна.</pre>\r\n<hr />\r\n<pre>&nbsp;</pre>'),
(6, 'Руфина', 'Трифонова', 19, '<p>Руфина - молодой разработчик и только начинает свой путь в <strong>IT-отрасли. </strong>Но несмотря на молодой возраст, Руфина - очень хороший программист.&nbsp;</p>', '1642943779122-ffc3db81bd811800.jpg', 9, '<hr />\r\n<pre style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; box-sizing: border-box; font-size: 18px;\">* HTML<br style=\"margin: 0px; padding: 0px; box-sizing: border-box;\" />* Vue<br style=\"margin: 0px; padding: 0px; box-sizing: border-box;\" />* React<br style=\"margin: 0px; padding: 0px; box-sizing: border-box;\" />* Redux<br style=\"margin: 0px; padding: 0px; box-sizing: border-box;\" />* CSS</pre>\r\n<hr />\r\n<pre style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; box-sizing: border-box; font-size: 18px;\">&nbsp;</pre>');

-- --------------------------------------------------------

--
-- Структура таблицы `migrations`
--

CREATE TABLE `migrations` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `run_on` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `migrations`
--

INSERT INTO `migrations` (`id`, `name`, `run_on`) VALUES
(57, '/20220121134807-position-table', '2022-01-22 15:09:04'),
(58, '/20220121135324-employee-table', '2022-01-22 15:09:04'),
(59, '/20220121140533-service-table', '2022-01-22 15:09:04'),
(60, '/20220121141604-status-table', '2022-01-22 15:09:04'),
(61, '/20220121142340-roles-table', '2022-01-22 15:09:04'),
(62, '/20220121170526-user-table', '2022-01-22 15:09:04'),
(63, '/20220121170743-product-table', '2022-01-22 15:09:04'),
(64, '/20220121171144-banned-table', '2022-01-22 15:09:04'),
(65, '/20220121171822-comment-table', '2022-01-22 15:09:04'),
(66, '/20220121172048-purchases-table', '2022-01-22 15:09:04'),
(67, '/20220121172127-demo-table', '2022-01-22 15:09:04'),
(68, '/20220121172218-product-images-table', '2022-01-22 15:09:04'),
(69, '/20220121172353-on-work-table', '2022-01-22 15:09:05'),
(70, '/20220122095111-insertions', '2022-01-22 15:09:05');

-- --------------------------------------------------------

--
-- Структура таблицы `on_work`
--

CREATE TABLE `on_work` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  `service_id` int(11) NOT NULL,
  `status_id` int(11) NOT NULL DEFAULT 1,
  `description` text COLLATE utf8mb4_unicode_ci NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `position`
--

CREATE TABLE `position` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'def-position.png',
  `is_main` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `position`
--

INSERT INTO `position` (`id`, `name`, `icon`, `is_main`) VALUES
(1, 'Генеральный директор', '1642847005718-gendir.png', 1),
(6, '3D-художник', '1642850653878-sfdfsa.png', 1),
(7, 'Account manager', '1642927894213-dhajkhda.png', 1),
(8, 'Приглашённый художник', '1642932130867-izbrannoye.png', 1),
(9, 'Веб-разработчик', '1642942220732-transparent-code-icon-startup-and-new-business-icon-web-icon-5fc0d6a8cddfa7.4199552516064733848433.png', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `second_name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `author_id`, `price`, `second_name`) VALUES
(14, 'Курица из Minecraft', '<p>Вся наша команда просто обожает <a title=\"Minecraft\" href=\"https://www.minecraft.net/ru-ru\" target=\"_blank\" rel=\"noopener\">Minecraft</a>. <em>Ну разве могло бы быть иначе?&nbsp;</em>Огромный открытый мир, разнообразные игровые механики и обилие игровых мобов.&nbsp;</p>\r\n<p>Обычно, при упоминании мобов из <strong>Minecraft</strong>, на память приходят криперы, скелеты, зомби и прочая нечисть. Но лично нам больше всего нравятся курочки. Эти маленькие милые создания никогда не причинят вред игроку и помогут в развитии.</p>\r\n<p>Именно поэтому команда <strong>AR-OPTIMA</strong> решила воссоздать эту знаменитиую курочку,немного переработав её.&nbsp; Она станет отличным дополнением вашей<strong> nft-коллекции</strong>, а также отлично впишется в интерьер вашего дома в дополненной реальности.</p>', 2, 3330, 'Цыпа, цыпа...'),
(15, 'Nintendo Classic', '<p>Совершенно неважно, была ли у Вас в детстве такая приставка или нет, Вы просто обязаны получить её в свою коллекцию. Ведь это не просто приставка - это целый <strong>символ&nbsp;</strong>поколения.&nbsp;&nbsp;</p>\r\n<p>Напомните себе о ламповых вечерах, проведённых за приставкой и пузатым телевизором....</p>', 1, 7400, 'Мама, ещё 15 минут......'),
(16, 'Собачка Шиба-Ину', '<p>Вы только взгляните на этого пёсика, разве он не милашка? Наверняка, многие из Вас задумывались о том, чтобы завести такого у себя дома. Но ведь это повлечёт за собой столько ответсвенности и расходов.....</p>\r\n<p>Но теперь, это больше не проблема, ведь Вы совершенно спокойно можете приобрести нашего цифрового пёсика. Он не требует есть и пить, а также будет с вами в любой момент. Не упустите возможность заполучить этого хорошего мальчика в свою коллекцию!</p>', 4, 16940, 'Хороший мальчик'),
(17, 'Магическая рептилия', '<p>Видели ли Вы когда-нибудь что-либо подобное? Я думаю, что нет. Ведь это самая настоящая рептилия-маг. Она умеет плеваться огнём, а также делать различные заклинания с помошью своего посоха. Ну разве это не удивительно?</p>', 2, 4100, 'Аккуратнее, она плюётся огнём'),
(18, 'Полигональная лисичка', '<p>Лисичка - очень умное и благородное животное.&nbsp; Её любят все: и взрослые, и дети. Мягкий мех, роскошный пушистый хвост, симпатичные лапки способны умилить даже самого чёрствого человека. Так что спешите приобрести это чудо в <strong>вашу коллекцию!</strong></p>', 1, 3400, 'Очень хитрая.......'),
(19, 'Original Gameboy', '<p>Да, да, да, ещё одна модель старой <strong>игровой приставки из детства</strong>. Просто автор очень любит ретро-гейминг. И очень надеется, что и Вы тоже. Ведь что может быть лучше убить пару тройку часов за Зельдой или Покемонами... Правильно, ничего. Так что приобретайте эту модель в вашу коллекцию и давайте ностальгировать вместе!</p>', 1, 11200, 'Готов к игре!'),
(20, 'Палатка', '<p>Такая палатка - мечта любого путешественника. В ней можно с комфортом отдохнуть на природе, пережить непогоду, поспать на свежем воздухе. Это всё, что Вам нужно для счастья.</p>', 1, 4300, 'Идеально для походов'),
(21, 'Огнетушитель', '<p>Добавьте в вашу коллекцию немного пожарной безопасности!</p>', 3, 3400, 'Тушит огонь.'),
(22, 'Граната', '<p>Да, это настощая граната, да, она может взорваться. Да ладно, это была шутка. Это всего лишь 3d-модель игрушечной гранаты, так что взорваться ей не суждено. Можете выдохнуть и расслабиться.</p>', 4, 24000, 'Взрвыается'),
(23, 'Догги', '<p>Возможно, увидев ещё одну модель собачки, Вы можете возразть: \"Да сколько можно уже?\" Отвечаем: можно ещё больше. Ведь кому могут надоесть эти милые меховые создания? Вот и мы думаем, что никому, поэтому, пожалуй, пойдём сделаем ещё одну модель собачки....</p>\r\n<p>А вы не упустите возможность добавить её в свою коллекцию, ведь её нарисовал сам Артёмий Лебедев!</p>', 4, 34000, 'Ещё одна собачуля');

-- --------------------------------------------------------

--
-- Структура таблицы `product_images`
--

CREATE TABLE `product_images` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `product_images`
--

INSERT INTO `product_images` (`id`, `product_id`, `image`) VALUES
(38, 14, '1642929904945-chicken.png'),
(39, 15, '1642931898336-1624789144869-lPsb3jdizLI.jpg'),
(40, 16, '1642934092846-1624550803056-9MyRo-0aq-A.jpg'),
(41, 17, '1642935808599-1624551286544-oOyZ885Ygjc.jpg'),
(42, 18, '1642946037740-fox.png'),
(43, 19, '1642947149146-gb.png'),
(44, 20, '1642953000698-pal.png'),
(45, 21, '1642953438731-firekiller.png'),
(46, 22, '1642955009851-greenade.png'),
(47, 23, '1643218740327-doggy.png');

-- --------------------------------------------------------

--
-- Структура таблицы `purchases`
--

CREATE TABLE `purchases` (
  `buyer_id` int(11) DEFAULT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `purchases`
--

INSERT INTO `purchases` (`buyer_id`, `product_id`) VALUES
(1, 15),
(1, 15),
(1, 18);

-- --------------------------------------------------------

--
-- Структура таблицы `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(2, 'admin'),
(1, 'user');

-- --------------------------------------------------------

--
-- Структура таблицы `service`
--

CREATE TABLE `service` (
  `id` int(11) NOT NULL,
  `header` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'def-service.jpg',
  `price` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `service`
--

INSERT INTO `service` (`id`, `header`, `description`, `image`, `price`) VALUES
(1, 'Сайт под ключ', '<p><strong>Создайте свой сайт!</strong></p>\r\n<p>Команда AR-OPTIMA предоставляет качественние услуги создания сайтов любой сложности под ключ. С нами вы можете быть уверены в том, что Ваш бизнес расцветёт!</p>\r\n<p>&nbsp;</p>\r\n<hr />\r\n<pre><br />* Сайты - визитки<br /><br />* Корпоративные порталы<br /><br />* Форумы<br /><br />* Интернет-магазины<br /><br /></pre>\r\n<hr />\r\n<p><img src=\"https://impulse-design.com.ua/images/sajt-pod-kluch/sajt-pod-kluch1-min.png\" alt=\"Сайт под ключ\" width=\"690\" height=\"478\" /><br />Просто свяжитесь с нами!</p>\r\n<p><em>С любовью, AR-OPTIMA.</em></p>', '1642851189363-—Pngtree—programming and web technology vector_4089305.png', 15000),
(6, 'Ваше цифровое произведение', '<p><strong>Наша команда поможет вам в создании собственного цифрового шедевра!</strong></p>\r\n<p>Наверняка, многие из вас уже слышали об <a href=\"https://ru.wikipedia.org/wiki/%D0%9D%D0%B5%D0%B2%D0%B7%D0%B0%D0%B8%D0%BC%D0%BE%D0%B7%D0%B0%D0%BC%D0%B5%D0%BD%D1%8F%D0%B5%D0%BC%D1%8B%D0%B9_%D1%82%D0%BE%D0%BA%D0%B5%D0%BD\" target=\"_blank\" rel=\"noopener\">NFT</a>. За последние годы эта технология массово проникла на рынок и в современную массовую культуру.&nbsp;</p>\r\n<p><strong>NFT-токен</strong> позволяет закрепить право владения цифровым произведением. Конечно, <em>любой человек</em> сможет воссоздать точно такое же произведение, но наличие токена также позволяет определить оригинал произведения.&nbsp;</p>\r\n<p>Сейчас уще существует огромное множество различных<strong> NFT-площадок</strong>, где вы можете приобрести права на цифровые произведения искусства.&nbsp;<br /><br /></p>\r\n<p><strong>Наша команда не только готова помочь вам в создании своего произведения. Мы также поможем вам зарегистрировать на него исключительные права.</strong></p>', '1642856375374-first-stage.png', 5000),
(7, 'Оформление NFT', '<p><strong>У вас уже есть собственное цифровое произведение?</strong> Это просто отлично! Команда \"AR-OPTIMA\" с радостью поможет вам с оформлением NFT-токена для него!&nbsp;</p>\r\n<p>Просто оставьте свои пожелания в форме ниже и нажмите кнопку \"<strong>Оставить заявку</strong>\".</p>', '1643221499118-second-stage.png', 1000),
(8, 'AR-визуализация', '<p>У Вас уже есть собственное цифровое произведение и Вы владеете токеном на него? Это замечательно! Мы же со своей стороны можем реализовать AR-визуализацию вашего произведения.</p>\r\n<p>Пускай ваша цировая коллекция будет украшать Ваш дом!</p>', '1643221654588-third-stage.png', 7000);

-- --------------------------------------------------------

--
-- Структура таблицы `status`
--

CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `name` varchar(70) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `status`
--

INSERT INTO `status` (`id`, `name`) VALUES
(1, 'В работе'),
(3, 'Завершена'),
(2, 'Приостановлена');

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `login` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'def-avatar.png',
  `role_id` int(11) NOT NULL DEFAULT 1,
  `email` varchar(70) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`id`, `login`, `password`, `avatar`, `role_id`, `email`) VALUES
(1, 'admin', '$2b$10$C.RsmzwXzasZlUmx0U6M0OX0S8QUhkj2.5DzbBGDuntCNxapmna9.', '1642846189871-def-admin.png', 2, 'budashest@gmail.com'),
(2, 'testUser', '$2b$10$AUOTqn5oerqu6KgJQI2b1OUpUUMznjOYu7iwsWEWQcNKIhBnuC2DO', '1643218825964-123.jpg', 1, 'test@mail.ru');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `banned`
--
ALTER TABLE `banned`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`),
  ADD UNIQUE KEY `ip` (`ip`);

--
-- Индексы таблицы `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comment_product_id_fk` (`product_id`),
  ADD KEY `comment_author_id_fk` (`author_id`);

--
-- Индексы таблицы `demo`
--
ALTER TABLE `demo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `demo_product_id_fk` (`product_id`);

--
-- Индексы таблицы `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`),
  ADD KEY `employee_position_id_fk` (`position_id`);

--
-- Индексы таблицы `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `on_work`
--
ALTER TABLE `on_work`
  ADD PRIMARY KEY (`id`),
  ADD KEY `on_work_status_id_fk` (`status_id`),
  ADD KEY `on_work_service_id_fk` (`service_id`),
  ADD KEY `on_work_author_id_fk` (`author_id`),
  ADD KEY `on_work_customer_id_fk` (`customer_id`);

--
-- Индексы таблицы `position`
--
ALTER TABLE `position`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Индексы таблицы `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `product_author_id_fk` (`author_id`);

--
-- Индексы таблицы `product_images`
--
ALTER TABLE `product_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_images_product_id_fk` (`product_id`);

--
-- Индексы таблицы `purchases`
--
ALTER TABLE `purchases`
  ADD KEY `purchases_product_id_fk` (`product_id`),
  ADD KEY `purchases_buyer_id_fk` (`buyer_id`);

--
-- Индексы таблицы `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Индексы таблицы `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `header` (`header`);

--
-- Индексы таблицы `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Индексы таблицы `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `login` (`login`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `user_role_id_fk` (`role_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `banned`
--
ALTER TABLE `banned`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `demo`
--
ALTER TABLE `demo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `employee`
--
ALTER TABLE `employee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT для таблицы `on_work`
--
ALTER TABLE `on_work`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `position`
--
ALTER TABLE `position`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT для таблицы `product_images`
--
ALTER TABLE `product_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT для таблицы `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `service`
--
ALTER TABLE `service`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `status`
--
ALTER TABLE `status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `banned`
--
ALTER TABLE `banned`
  ADD CONSTRAINT `banned_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_author_id_fk` FOREIGN KEY (`author_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comment_product_id_fk` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `demo`
--
ALTER TABLE `demo`
  ADD CONSTRAINT `demo_product_id_fk` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `employee_position_id_fk` FOREIGN KEY (`position_id`) REFERENCES `position` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `on_work`
--
ALTER TABLE `on_work`
  ADD CONSTRAINT `on_work_author_id_fk` FOREIGN KEY (`author_id`) REFERENCES `employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `on_work_customer_id_fk` FOREIGN KEY (`customer_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `on_work_service_id_fk` FOREIGN KEY (`service_id`) REFERENCES `service` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `on_work_status_id_fk` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_author_id_fk` FOREIGN KEY (`author_id`) REFERENCES `employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `product_images`
--
ALTER TABLE `product_images`
  ADD CONSTRAINT `product_images_product_id_fk` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `purchases`
--
ALTER TABLE `purchases`
  ADD CONSTRAINT `purchases_buyer_id_fk` FOREIGN KEY (`buyer_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `purchases_product_id_fk` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_role_id_fk` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
