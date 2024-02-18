const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const submit = document.querySelector(".submit");

const card_container_1 = document.querySelector(".card_container_1");
const card_container_2 = document.querySelector(".card_container_2");


submit.addEventListener("click", (event) => {
    event.preventDefault();
  const text1 = input1.value;
  const text2 = input2.value;
  const text3 = input3.value;
  post(text1, text2, text3);
  input1.value = "";
  input2.value = "";
  input3.value = "";
});



function post(text_1, text_2, text_3) {
  let card = document.createElement("div");
  card.className = "card";
  const title = document.createElement("h1");
  title.className = "title";
  title.innerHTML = text_1;
  const detail = document.createElement("p");
  detail.className = "detail";
  detail.innerHTML = text_2;
  const price = document.createElement("h4");
  price.className = "price";
  price.innerHTML = text_3;
  const add_btn = document.createElement('button')
  add_btn.className = "add_btn"
  add_btn.innerHTML = "Add To Cart" 
  card.appendChild(title);
  card.appendChild(detail);
  card.appendChild(price);
  card.appendChild(add_btn);
  card_container_1.appendChild(card);



  add_btn.addEventListener('click', () => {
      add_btn.innerHTML = "delete"
    if(card_container_1.contains(card)){
        card_container_2.appendChild(card)
        card_container_1.removeChild(card)
        add_btn.innerHTML = ""
    }
    if(card_container_2.contains(card)){
        card_container_2.removeChild(card)
    }
  });
  console.log(card);
}
const initialAddBtns = document.querySelectorAll('.add_btn');
initialAddBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.card');
        if (card_container_1.contains(card)) {
            card_container_2.appendChild(card);
            card_container_1.removeChild(card);
            btn.innerHTML = "Delete";
        } else if (card_container_2.contains(card)) {
            card_container_2.removeChild(card);
        }
    });
});