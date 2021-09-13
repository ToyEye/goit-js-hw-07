{/* <ul id="categories">
        <li class="item">
            <h2>Животные</h2>

            <ul>
                <li>Кот</li>
                <li>Хомяк</li>
                <li>Лошадь</li>
                <li>Попугай</li>
            </ul>
        </li>
        <li class="item">
            <h2>Продукты</h2>

            <ul>
                <li>Хлеб</li>
                <li>Петрушка</li>
                <li>Творог</li>
            </ul>
        </li>
        <li class="item">
            <h2>Технологии</h2>

            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node</li>
            </ul>
        </li>
    </ul> */}
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const numberEl = document.querySelectorAll('.item');
const summ = numberEl.length;
console.log(`В списке ${summ} категории.`);

const titelEL = document.querySelectorAll('h2');
console.log("~ titelEL", titelEL)
