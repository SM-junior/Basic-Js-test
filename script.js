//Simple Calculator
const calculatorForm=document.querySelector('.calculator-form');
const firstNumber=document.querySelector('#first-number');
const secondNumber=document.querySelector('#second-number');
const btn=document.querySelector('.calculate-btn');
const calculation=document.querySelector('.calculation')

const calculate=(e)=>{
    e.preventDefault();
    calculation.style.display='block';
    const add=parseInt(firstNumber.value)+parseInt(secondNumber.value);
    const sub=parseInt(firstNumber.value)-parseInt(secondNumber.value);
    const mul=parseInt(firstNumber.value)*parseInt(secondNumber.value);
    const div=parseInt(firstNumber.value)/parseInt(secondNumber.value);
    const finalDiv=div.toFixed(2)
    document.querySelector('.add').innerHTML=`${firstNumber.value} + ${secondNumber.value}= ${add}`;
    document.querySelector('.sub').innerHTML=`${firstNumber.value} - ${secondNumber.value}= ${sub}`;
    document.querySelector('.mul').innerHTML=`${firstNumber.value} x ${secondNumber.value}= ${mul}`;
    document.querySelector('.div').innerHTML=`${firstNumber.value} / ${secondNumber.value}= ${finalDiv}`;
    e.target.reset();

}
calculatorForm.addEventListener('submit', calculate)

//Simple Todo
const todoForm=document.querySelector('.todo-form');
const todoInput=document.querySelector('#todo-input');
const todoList=document.querySelector('.todo-list');

const addTodo=(e)=>{
    e.preventDefault();
    const ul=document.createElement('ul');
    ul.innerHTML +=`<li class="border-solid border-2 border-indigo-600 w-[50%] mx-auto mb-2 py-1 px-3 flex justify-between">${todoInput.value} <span><i class="fa-solid fa-trash delete hover:scale-150 hover:text-red-600 hover:duration-700"></i></span></li>`
    todoList.appendChild(ul);
    e.target.reset();
}



const deleteTodo=(e)=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.remove();
    }
}
todoForm.addEventListener('submit', addTodo);
todoList.addEventListener('click', deleteTodo)

//Simple Temperature Converter
const temperatureForm=document.querySelector('.temperature-form');
const celsiusInput=document.querySelector('#celsius-input');
const temp=document.querySelector('.temp');
const fahren=document.querySelector('.fah')
const kelvin=document.querySelector('.kel')

const convertTemp=(e)=>{
    e.preventDefault();
    const fah=(parseInt(celsiusInput.value)*(9/5))+32;
    const kel=parseInt(celsiusInput.value)+273.15;
    temp.classList.add('text-center')
    fahren.innerHTML=`${celsiusInput.value} degree Celsius = ${fah}<span class='text-lg'>F</span>`;
    kelvin.innerHTML=`${celsiusInput.value} degree Celsius = ${kel}<span class='text-lg'>K</span>`;
    e.target.reset()
}

temperatureForm.addEventListener('submit', convertTemp)


