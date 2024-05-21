let signIn = document.querySelector(".signIn");
let login = document.querySelector(".login");

let signIn_name = document.querySelector(".signIn_name");
let signIn_surname = document.querySelector(".signIn_surname");
let signIn_mail = document.querySelector(".signIn_mail");
let signIn_password = document.querySelector(".signIn_password");

let login_mail = document.querySelector(".login_mail");
let login_password = document.querySelector(".login_password");

let registered = document.querySelector(".registered");
let registered_btn = document.querySelector(".registered_btn");

let getDataAll = async () => {
  let request = await fetch("https://fakestoreapi.com/products");
  return request.json();
};
getDataAll().then((data) => renderAllProducts(data));

let getDataMens = async () => {
  let request = await fetch("https://fakestoreapi.com/products");
  return request.json();
};
getDataMens().then((data) => renderMensProducts(data));

let renderJewelry = async () => {
  let request = await fetch("https://fakestoreapi.com/products");
  return request.json();
};
renderJewelry().then((data) => getDataJewelry(data));

let renderElec = async () => {
  let request = await fetch("https://fakestoreapi.com/products");
  return request.json();
};
renderElec().then((data) => getDataElec(data));

function login_signIn() {
  try {
    signIn.addEventListener("submit", (e) => {
      e.preventDefault();
      localStorage.setItem("mail", signIn_mail.value);
      localStorage.setItem("password", signIn_password.value);
      localStorage.setItem("name", signIn_name.value);
      localStorage.setItem("surname", signIn_surname.value);
    });
  } catch (error) {}

  try {
    login.addEventListener("submit", (e) => {
      let local_mail = localStorage.getItem("mail");
      let local_password = localStorage.getItem("password");
      e.preventDefault();
      if (
        local_mail === login_mail.value &&
        local_password === login_password.value
      ) {
        window.location = "./all.html";
        // registeredFunc();
      }
    });
  } catch (error) {}
}
login_signIn();

// function registeredFunc() {
//   registered.innerHTML = `
//       <h1>Siz ro'yxatdan o'tdingiz</h1>
//       <div class="registered_p">
//         <p>Name:</p>
//         <p>Surname:</p>
//         <p>Email:</p>
//         <p>Password:</p>
//       </div>
//       <button class="registered_btn">ok</button>
//     `;
//   registered.style.border = "1px solid #000";
// }

function renderAllProducts(data) {
  data.forEach((value) => {
    let all_products = document.querySelector(".all_products");
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.innerHTML = `
      <img src=${value.image} alt="" />
        <h1>${value.title.slice(0, 10)}...</h1>
        <p>${value.description.slice(0, 50)}...</p>
        <div class="price">
          <p>summa</p>
          <div>
            <h2>-10%</h2>
            <h3>${value.price}</h3>
          </div>
        </div>
        <button>Add to card</button>
        <button>Buy now</button>
      `;
    all_products.append(card);
  });
}

function renderMensProducts(data) {
  data.forEach((value) => {
    if (value.category === "men's clothing") {
      let mens_products = document.querySelector(".mens_products");
      let card_men = document.createElement("div");
      card_men.setAttribute("class", "card");
      card_men.innerHTML = `
          <img src=${value.image} alt="" />
            <h1>${value.title.slice(0, 10)}...</h1>
            <p>${value.description.slice(0, 50)}...</p>
            <div class="price">
              <p>summa</p>
              <div>
                <h2>-10%</h2>
                <h3>${value.price}</h3>
              </div>
            </div>
            <button>Add to card</button>
            <button>Buy now</button>
          `;
      mens_products.append(card_men);
    }
  });
}

function getDataJewelry(data) {
  data.forEach((value) => {
    if (value.category === "jewelery") {
      let jew_cards = document.querySelector(".jew_cards");
      let card_jew = document.createElement("div");
      card_jew.setAttribute("class", "card");
      card_jew.innerHTML = `
              <img src=${value.image} alt="" />
                <h1>${value.title.slice(0, 10)}...</h1>
                <p>${value.description.slice(0, 50)}...</p>
                <div class="price">
                  <p>summa</p>
                  <div>
                    <h2>-10%</h2>
                    <h3>${value.price}</h3>
                  </div>
                </div>
                <button>Add to card</button>
                <button>Buy now</button>
              `;
      jew_cards.append(card_jew);
    }
  });
}

function getDataElec(data) {
  data.forEach((value) => {
    if (value.category === "electronics") {
      let elec_cards = document.querySelector(".elec_cards");
      let card_elec = document.createElement("div");
      card_elec.setAttribute("class", "card");
      card_elec.innerHTML = `
                <img src=${value.image} alt="" />
                  <h1>${value.title.slice(0, 10)}...</h1>
                  <p>${value.description.slice(0, 50)}...</p>
                  <div class="price">
                    <p>summa</p>
                    <div>
                      <h2>-10%</h2>
                      <h3>${value.price}</h3>
                    </div>
                  </div>
                  <button>Add to card</button>
                  <button>Buy now</button>
                `;
      elec_cards.append(card_elec);
    }
  });
}
