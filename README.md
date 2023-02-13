# ***gulp-start-wersion***
## **Автоматизація** — ***gulp*** — це набір інструментів, який допомагає вам автоматизувати важкі або трудомісткі завдання у робочому процесі.
*Незалежність від платформи – інтеграція вбудована в усі основні **IDE**, і люди використовують gulp із **PHP**, **.NET**,**Node.js**,**Java** та іншими платформами*.
*Потужна екосистема . Використовуйте модулі npm, щоб робити все, що завгодно, + понад 3000 підібраних плагінів для потокового перетворення файлів.
Простий . Забезпечуючи лише мінімальну поверхню **API**, gulp легко освоїти та використовувати*.

*Система завдань була переписана з нуля, дозволяючи використовувати ```series()```та ```parallel()```методи композиції завдань*.
*Спостерігач оновлено, тепер він використовує ```chokidar``` (***більше немає потреби в gulp-watch!***) із функціями, що відповідають нашій системі завдань*.
*Додано першокласну підтримку для поетапних збірок за допомогою **lastRun()***.
*Було додано вбудовану підтримку джерельних карт - плагін gulp-sourcemaps більше не потрібен*!
*Тепер рекомендована реєстрація завдань експортованих функцій за допомогою експорту node або **ES***.
*Були розроблені спеціальні реєстри, що дозволяють виконувати спільні завдання або розширювати функціональність*.
*Потокове впровадження було покращено, що дозволило покращити умовні та поетапні збірки*.
## *gulpfile.babel.js*
Gulp дозволяє використовувати наявні знання ***JavaScript*** для написання файлів gulp або використовувати ваш досвід роботи з файлами gulp для написання простого **JavaScript**. Хоча передбачено кілька утиліт для спрощення роботи з файловою системою та командним рядком, усе інше, що ви пишете, є чистим **JavaScript**.

## **gulpfile.babel.js *пояснює.***
**gulpfile.babel.js**— *це файл у каталозі вашого проекту під назвою ```gulpfile.babel.js```, який автоматично завантажується під час виконання ```gulp``` команди*.
У цьому файлі ви часто побачите API gulp, як -от ```src()```, ```dest()```, ```series()``` або, ```parallel()```але можна використовувати будь-які модулі ***JavaScript*** або ***Node***. *Будь-які експортовані функції будуть зареєстровані в системі завдань gulp*.

## *Транспіляція*
*Ви можете написати файл gulp за допомогою мови, яка потребує транспіляції, як-от **TypeScript** або **Babel**, змінивши розширення на своєму **gulpfile.js**, щоб вказати мову, і встановивши відповідний модуль транспілятора*.

Для ***TypeScript***  перейменуйте gulpfile.tsта встановіть модуль **ts-node** .
Для ***Babel*** перейменуйте ```gulpfile.babel.js ``` та встановіть модуль ```@babel/register``` .
Більшість нових версій node підтримують більшість функцій, які надають TypeScript або Babel, окрім синтаксису import/ . exportЯкщо потрібний лише цей синтаксис, перейменуйте ```gulpfile.esm.jsт``` а встановіть модуль ***esm*** .

Для детальнішого вивчення цієї теми та повного списку підтримуваних розширень дивіться нашу документацію щодо транспіляції ***gulpfile*** .

## *Розбиття gulpfile.babel.js*
*Багато користувачів починають із додавання всієї логіки до ***gulpfile.babel.js***. Якщо він стане занадто великим, його можна переоформити в окремі файли які будуть перетворені на окремі функції і занесені в папку ***tasks***.*

*Кожне завдання можна розділити на окремий файл, а потім імпортувати у ваш **gulpfile** для створення. Це не тільки забезпечує організованість, але й дозволяє тестувати кожне завдання окремо або змінювати склад залежно від умов*.

*Роздільна здатність модуля . Цей каталог міг би містити ваші окремі модулі для завдань. Якщо ви використовуєте транспілер, назвіть папку та файл відповідно*.
