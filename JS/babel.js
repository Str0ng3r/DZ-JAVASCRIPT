"use strict"
const categoriesList = document.querySelector('#categories');
const categoriesItems = document.querySelectorAll(".item");
console.log(`Number of categories ${categoriesItems.length}`)
categoriesItems.forEach((el) => {
    const catName = el.querySelector('h2').textContent
    const catEl = el.querySelectorAll('li');
    console.log(`Category:${catName} Elements : ${catEl.length}`)
})


const categ = document.getElementById("ingredients");
const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];

  function fasovka(massIng) {
    const massItems = [];
    ingredients.forEach((el) => {
      const ingOne = document.createElement("li");
      ingOne.innerHTML = el;
      ingOne.classList.add("item");
      massItems.push(ingOne);
    });
    for (let i = 0; i < massItems.length; i++) {
      massIng.appendChild(massItems[i]);
    }
    console.log(massIng)
  }
  fasovka(categ)



  const galleryEl = document.querySelector(".gallery");
console.log(galleryEl)
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const createGallery = ({url,alt}) => 
`<li><img height = 500 width = 800 src="${url}" alt = "${alt}"></li>`;

const vloj = images.map((el) => createGallery(el)).join('');
galleryEl.insertAdjacentHTML('afterbegin',vloj)


const spanEl = document.querySelector("#value");
console.log(spanEl)
const buttonPlus = document.querySelector('#counter button[data-action="increment"]');
console.log(buttonPlus)
const buttonMinus = document.querySelector('#counter button[data-action="decrement"]')
let defoltInt = 0
const minusValue = (event) => {
  defoltInt -= 1
  spanEl.textContent = defoltInt
 }
const plusValue = (event) => {
defoltInt += 1
spanEl.textContent = defoltInt;
}

const inputEl = document.querySelector('#name-input');
console.log(inputEl);
const spanEst = document.querySelector('#name-output');
console.log(spanEst)
const writingIn = (event) => {
  if (inputEl.value === '') {
    spanEst.textContent = 'Anonymous';
  } else {
    spanEst.textContent = inputEl.value;
  }
}
inputEl.addEventListener('input',writingIn)
buttonMinus.addEventListener('click',minusValue)
buttonPlus.addEventListener('click',plusValue);


const inputBor = document.querySelector('#validation-input')
inputBor.addEventListener('blur', () => {
  const expectedLength = inputBor.getAttribute('data-length');
  const actualLength = inputBor.value.length;

  if (actualLength === parseInt(expectedLength)) {
    inputBor.classList.add('valid');
    inputBor.classList.remove('invalid');
  } else {
    inputBor.classList.add('invalid');
    inputBor.classList.remove('valid');
  }
});


const inputElst = document.querySelector('#font-size-control');
console.log(inputElst)
console.log(inputElst.min)
console.log(inputElst.value)
const elSpan = document.querySelector('#text');
console.log(elSpan)
inputElst.addEventListener('input', () => {
elSpan.style.fontSize = `${inputElst.value}px`
})




const formEl = document.querySelector('.login-form')
console.log(formEl)
const input1 = formEl.elements.email
const input2 = formEl.elements.password
console.log(input1)
console.log(input2)
const objBase = {}
formEl.addEventListener('submit',(event) => {
    event.preventDefault();
    if (!input1.value || !input2.value){
        alert('Всі поля повинні бути заповнені!')
        return
    }else {
        objBase.email = input1.value;
        objBase.password = input2.value
    }
    console.log(objBase)
    formEl.reset();
})



function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  const bodyEl = document.querySelector('body')
  const buttonChange = document.querySelector('.change-color')
  const spanElsa = document.querySelector('.color')
  buttonChange.addEventListener('click',() => {
     const valuj = getRandomHexColor();
      bodyEl.style.backgroundColor = getRandomHexColor()
      spanElsa.textContent = bodyEl.style.backgroundColor;
  })