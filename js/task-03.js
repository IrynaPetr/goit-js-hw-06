const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];




const makeGallary = ({
  url,
  alt,
}) => `<li class="gallery-item"><img src ="${url}" alt ="${alt}" width="600"></li>`;
console.log(makeGallary);

const listEl = document.querySelector('.gallery');

const markup = images.map(element => makeGallary(element)).join('');

listEl.insertAdjacentHTML('afterbegin', markup);
console.log(markup);


listEl.style.display = 'grid';
listEl.style.listStyle = 'none';
listEl.style.justifyContent = 'center';
listEl.style.gap = '30px';