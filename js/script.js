var btn = document.getElementById("button");
var burgerName = document.getElementById("name");
var ingredients = document.getElementsByClassName("ingredient-checkbox");
var displayPrice = document.getElementById("price");
var addBtn = document.getElementsByClassName("ingredient-add");

/* Add cliccabili */

for (i = 0; i < addBtn.length; i++) {
    var add = addBtn[i];

    add.addEventListener("click", function () {
        var thisCheckbox = this.previousElementSibling;

        thisCheckbox.checked = !thisCheckbox.checked;
    });
}

/* Calcola prezzo */

btn.addEventListener("click", function () {
    var name = burgerName.value.trim();

    /* Nome burger obbligatorio */

    if (name.length === 0) {
        alert("Non hai inserito un nome per il tuo burger");
    } else {
        var price = 50;

        for (i = 0; i < ingredients.length; i++) {
            var ingredientCheck = ingredients[i];

            if (ingredientCheck.checked === true) {
                price += parseInt(ingredientCheck.value);
            }
        }
        console.log(price);

        /* Coupon */

        var coupons = ["12345ABCDEF", "67892GHILMN", "54321ZAPQRS"];

        var couponCode = coupon.value;

        if (coupons.includes(couponCode)) {
            price -= price * 0.2;
        }

        /* Stampa prezzo */

        displayPrice.innerHTML = price.toFixed(2);
    }
});
