import { randomIP, randomAvatar } from "./module.js";

const customersCont = document.getElementById("customers");

async function getCustomerDatas() {
  const response = await fetch("http://localhost:3000/customers");

  if (response.status !== 200) {
    throw new Error(response.status);
  }

  const customers = await response.json();

  customers.forEach((customer) => {
    const customerInfo = document.createElement("div");
    customerInfo.classList.add("customer-info");

    const customerName = document.createElement("p");
    customerName.innerText =
      "Name: " + customer.first_name + " " + customer.last_name;

    const customerCity = document.createElement("p");
    customerCity.innerText = "City: " + customer.city;

    const customerEMail = document.createElement("p");
    customerEMail.innerText = "E-mail: " + customer.email;

    const customerAvatar = document.createElement("p");
    customerAvatar.innerText = "Avatar: ";
    const customerAvatarImg = document.createElement("img");
    customerAvatarImg.style.display = "block";
    customerAvatarImg.classList.add("avatar");
    customerAvatarImg.src = customer.avatar;

    const removeCustomer = document.createElement("button");
    removeCustomer.classList.add("remove-btn");
    removeCustomer.innerText = "Remove Customer";

    customersCont.append(customerInfo);
    customerInfo.append(
      customerName,
      customerCity,
      customerEMail,
      customerAvatar,
      customerAvatarImg,
      removeCustomer
    );
    removeCustomer.addEventListener("click", () => {
      customerInfo.remove();
    });
  });

  console.log(customers);
}

getCustomerDatas();

const form = document.querySelector("form");
const firstname = document.getElementById("first-name");
const lastname = document.getElementById("last-name");
const city = document.getElementById("city");
const email = document.getElementById("email");

form.addEventListener("submit", (event) => {
  const profile = {
    first_name: firstname.value,
    last_name: lastname.value,
    email: email.value,
    ip_address: randomIP(),
    avatar: randomAvatar(),
    city: city.value,
  };

  event.preventDefault();
  async function addCustomer() {
    try {
      const response = await fetch("http://localhost:3000/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profile),
      });
      console.log(response);
      if (response.status !== 201) {
        throw new Error(`POST unsuccessful. We got status ${response.status}.`);
      }
    } catch (error) {
      console.error(error);
    }
  }

  addCustomer();
});
