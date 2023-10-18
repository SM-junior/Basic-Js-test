//////////////////Simple Calculator//////////////////
const calculatorForm = document.querySelector('.calculator-form');
const firstNumber = document.querySelector('#first-number');
const secondNumber = document.querySelector('#second-number');
const btn = document.querySelector('.calculate-btn');
const calculation = document.querySelector('.calculation')

const calculate = (e) => {
    e.preventDefault();
    calculation.style.display = 'block';
    const add = parseInt(firstNumber.value) + parseInt(secondNumber.value);
    const sub = parseInt(firstNumber.value) - parseInt(secondNumber.value);
    const mul = parseInt(firstNumber.value) * parseInt(secondNumber.value);
    const div = parseInt(firstNumber.value) / parseInt(secondNumber.value);
    const finalDiv = div.toFixed(2)
    document.querySelector('.add').innerHTML = `${firstNumber.value} + ${secondNumber.value}= ${add}`;
    document.querySelector('.sub').innerHTML = `${firstNumber.value} - ${secondNumber.value}= ${sub}`;
    document.querySelector('.mul').innerHTML = `${firstNumber.value} x ${secondNumber.value}= ${mul}`;
    document.querySelector('.div').innerHTML = `${firstNumber.value} / ${secondNumber.value}= ${finalDiv}`;
    e.target.reset();

}
calculatorForm.addEventListener('submit', calculate)

////////Simple Todo///////////
const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('.todo-list');

const addTodo = (e) => {
    e.preventDefault();
    const ul = document.createElement('ul');
    ul.innerHTML += `<li class="border-solid border-2 border-white w-[50%] mx-auto mb-2 py-1 px-3 flex justify-between">${todoInput.value} <span><i class="fa-solid fa-trash delete hover:scale-150 hover:text-red-600 hover:duration-700"></i></span></li>`
    todoList.appendChild(ul);
    e.target.reset();
}
const deleteTodo = (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove();
    }
}
todoForm.addEventListener('submit', addTodo);
todoList.addEventListener('click', deleteTodo)

////////////Simple Temperature Converter////////////
const temperatureForm = document.querySelector('.temperature-form');
const celsiusInput = document.querySelector('#celsius-input');
const temp = document.querySelector('.temp');
const fahren = document.querySelector('.fah')
const kelvin = document.querySelector('.kel')

const convertTemp = (e) => {
    e.preventDefault();
    const fah = (parseInt(celsiusInput.value) * (9 / 5)) + 32;
    const kel = parseInt(celsiusInput.value) + 273.15;
    temp.classList.add('text-center')
    fahren.innerHTML = `${celsiusInput.value} degree Celsius = ${fah}<span class='text-lg'>F</span>`;
    kelvin.innerHTML = `${celsiusInput.value} degree Celsius = ${kel}<span class='text-lg'>K</span>`;
    e.target.reset()
}
temperatureForm.addEventListener('submit', convertTemp)

/////////////////Simple Counter App/////////////////
const increment = document.querySelector('#increment')
const decrement = document.querySelector('#decrement')
const counter = document.querySelector('#counter')

let count = 0;
const handleIncrement = () => {
    count = count + 1;
    counter.innerText = count
}

const handleDecrement = () => {
    if (counter.innerText == 0) {
        decrement.classList.add('disabled')
    }
    else {
        count = count - 1;
        counter.innerText = count
    }
}
increment.addEventListener('click', handleIncrement);
decrement.addEventListener('click', handleDecrement)

/////////////////////Simple API fetching////////////////////
const url = "https://jsonplaceholder.typicode.com/users?_limit=8";
const displayUser = async () => {
    const res = await fetch(url);
    const data = await res.json();
    data.map(item => {
        const fetchInfo = document.querySelector('.fetch-info');
        fetchInfo.innerHTML += `
        <div class="card card-compact w-76 bg-base-100 shadow-xl">
        <figure><img src='https://i.ibb.co/x8Q0BLV/P3-OLGJ1-copy-1.png' alt="Shoes" /></figure>
        <div class="card-body">
        <h2 class="card-title">Name: ${item.name}</h2>
        <p>Email: ${item.email}</p>
        <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
        </div>
        </div>
        </div>
        `
    })
}
displayUser();