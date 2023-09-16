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


