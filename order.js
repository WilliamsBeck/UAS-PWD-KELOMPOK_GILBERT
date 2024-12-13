
const menuPrices = {
    item1: { name: "Boba Sundae ⭐", price: 16000 },
    item2: { name: "Mango Sundae", price: 16000 },
    item3: { name: "Oreo Sundae", price: 16000 },
    item4: { name: "Strawberry Lucky Sundae ⭐", price: 16000 },
    item5: { name: "Chocolate Lucky Sundae", price: 16000 },
    item6: { name: "Original Sundae", price: 16000 },
    item7: { name: "Brown pearl milk tea ⭐", price: 19000 },
    item8: { name: "Pearl Milk Tea", price: 22000 },
    item9: { name: "Coconut Milk Tea", price: 22000 },
    item10: { name: "Red bean Milk Tea", price: 22000 },
    item11: { name: "Oats Milk Tea", price: 22000 },
    item12: { name: "Twin Toppings Milk Tea", price: 22000 },
    item13: { name: "Supreme Mixed Milk Tea ⭐", price: 22000 },
    item14: { name: "Fresh squeezed lemonade ⭐", price: 10000 },
    item15: { name: "Lemon jasmine tea", price: 12000 },
    item16: { name: "Lemon earl grey tea", price: 12000 },
    item17: { name: "Creamy mango boba ⭐", price: 22000 },
    item18: { name: "Hawaiian fruit tea", price: 22000 },
    item19: { name: "Passion fruit jasmine tea ", price: 20000 },
    item20: { name: "Peach earl grey tea  ⭐", price: 16000 },
    item21: { name: "Peach jasmine tea", price: 16000 },
    item22: { name: "Jasmine tea with 2 toppings", price: 13000 },
    item23: { name: "Earl grey tea with 2 toppings ", price: 13000 },
    item24: { name: "Original jasmine tea", price: 10000 },
    item25: { name: "Original earl grey tea", price: 10000 },
  };

  function updateQuantity(itemId, change) {
    const quantityField = document.getElementById(
      "quantity" + itemId.slice(4)
    );
    let quantity = parseInt(quantityField.value);

    quantity += change;
    if (quantity < 0) quantity = 0;

    quantityField.value = quantity;

    updateTotalPrice();
    updateOrderSummary();
  }

  function updateTotalPrice() {
    let totalPrice = 0;

    for (let item in menuPrices) {
      const quantity =
        parseInt(
          document.getElementById("quantity" + item.slice(4)).value
        ) || 0;
      totalPrice += menuPrices[item].price * quantity;
    }

    document.getElementById("totalPrice").textContent =
      totalPrice.toLocaleString();
  }

  function updateOrderSummary() {
    const orderTableBody = document.getElementById("orderTableBody");
    orderTableBody.innerHTML = "";
    for (let item in menuPrices) {
      const quantity =
        parseInt(
          document.getElementById("quantity" + item.slice(4)).value
        ) || 0;

      if (quantity > 0) {
        const row = document.createElement("tr");

       
        const menuName = document.createElement("td");
        menuName.textContent = menuPrices[item].name;
        row.appendChild(menuName);

        
        const menuQuantity = document.createElement("td");
        menuQuantity.textContent = quantity;
        row.appendChild(menuQuantity);

        
        const menuPrice = document.createElement("td");
        menuPrice.textContent =
          "Rp. " + (menuPrices[item].price * quantity).toLocaleString();
        row.appendChild(menuPrice);

        
        orderTableBody.appendChild(row);
      }
    }
  }

 
    function submitOrder() {
        Swal.fire({
            title: "Make sure your order is correct!",
            text: "After submitting, you can't change your order",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#8c3838",
            cancelButtonColor: "grey",
            confirmButtonText: "Yes"
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
            title: "Success",
            text: "Your meal has been prepared and is ready for delivery ",
            icon: "success",
            showOkButton: true,
            confirmButtonColor: "#8c3838",
        });
        }
        });
    }

 
  function openModal(img) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");

    modal.style.display = "block"; 
    modalImg.src = img.src;
    modalImg.style.transform = "scale(4)"; 
  }

  
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none"; 
  }
