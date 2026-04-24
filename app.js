const dropdown = document.getElementById('dropdown');
const dropdownButton = document.getElementById('dropdownButton');
const colorBox = document.getElementById('colorBox');
const colorButton = document.getElementById('colorButton');
const toggleText = document.getElementById('toggleText');
const textToggleButton = document.getElementById('textToggleButton');
const counterButton = document.getElementById('counterButton');
const counterValue = document.getElementById('counterValue');
const dateButton = document.getElementById('dateButton');
const dateOutput = document.getElementById('dateOutput');
const searchInput = document.getElementById('searchInput');
const itemList = document.getElementById('itemList');
const items = itemList.getElementsByTagName('li');
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const calcBtn = document.getElementById('calcBtn');
const resultDiv = document.getElementById('result');

const colors = ['#dbeafe', '#dcfce7', '#fef3c7', '#fee2e2', '#e0e7ff', '#fae8ff'];
let colorIndex = 0;
let clickCount = 0;
let textExpanded = false;

dropdownButton.addEventListener('click', () => {
	dropdown.classList.toggle('open');
});

colorButton.addEventListener('click', () => {
	colorIndex = (colorIndex + 1) % colors.length;
	colorBox.style.setProperty('--box-color', colors[colorIndex]);
});

textToggleButton.addEventListener('click', () => {
	textExpanded = !textExpanded;
	toggleText.classList.toggle('clamped', !textExpanded);
	textToggleButton.textContent = textExpanded ? 'Сховати текст' : 'Показати весь текст';
});

counterButton.addEventListener('click', () => {
	clickCount += 1;
	counterValue.textContent = `Кількість натискань: ${clickCount}`;
});

dateButton.addEventListener('click', () => {
	const currentDate = new Date();
	const formatted = new Intl.DateTimeFormat('uk-UA', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: false,
	}).format(currentDate).replace(',', '');

	dateOutput.textContent = formatted;
});

document.addEventListener('click', (event) => {
	if (!dropdown.contains(event.target)) {
		dropdown.classList.remove('open');
	}
});


searchInput.addEventListener('input', function(e) {
    const filterText = e.target.value.toLowerCase();

    for (let i = 0; i < items.length; i++) {
        let itemText = items[i].textContent || items[i].innerText;
        
        if (itemText.toLowerCase().indexOf(filterText) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
});

calcBtn.addEventListener('click', () => {
	const n1 = parseFloat(num1Input.value);
	const n2 = parseFloat(num2Input.value);

	resultDiv.classList.remove('is-error');

	if (Number.isNaN(n1) || Number.isNaN(n2)) {
		resultDiv.textContent = 'Будь ласка, введіть обидва числа.';
		resultDiv.classList.add('is-error');
		return;
	}

	const sum = n1 + n2;
	resultDiv.textContent = `Результат: ${sum}`;
});