$(function () {

    let formPizzaOrder = $("#pizza-order");

    let firstName = $("#first-name");
    let lastName = $("#last-name");

    let street = $("#street");
    let streetNo = $("#street-no");

    let postCode = $("#post-code");
    let city = $("#city");

    let pizza = $("#pizza");
    let price = $("#price");

    let tomatoSauce = $("#tomato-sauce");
    let garlicSauce = $("#garlic-sauce");

    let agree = $("#agree");

    let errors = $("#errors");

    let priceTable = [{
            id: 1,
            price: 29
        },
        {
            id: 2,
            price: 32
        },
        {
            id: 3,
            price: 41
        },
        {
            id: 4,
            price: 39
        },
        {
            id: 5,
            price: 36
        },
    ];


    // zdarzenie obslugujace wybor pizzy z select-option
    pizza.change(function () {

        let pizzaPrice = 0;

        let pizzaType = $(this).val();

        if (pizzaType == 0) {
            price.text("0 PLN")
            return;
        }

        priceTable.forEach(function (element) {
            console.log(element)
            if (element.id == pizzaType) {
                pizzaPrice = element.price;

                price.text(pizzaPrice + " PLN")

                return false;
            }
        })
    });




    // zdarzenie obslugujace validacje formularza
    formPizzaOrder.submit(function () {

        errors.empty();

        function cheackValue(data) {
            console.log(data)
            if (data == "") {
                return true
            }
        }
        let errorsArray = [];

        if (cheackValue($.trim(firstName.val()))) {
            errorsArray.push("Uzupełnij pole: Imie");
        }

        if ($.trim(lastName.val()) == "") {
            errorsArray.push("Uzupełnij pole: Nazwisko");
        }

        if ($.trim(street.val()) == "") {
            errorsArray.push("Uzupełnij pole: ulica");
        }

        if ($.trim(streetNo.val()) == "") {
            errorsArray.push("Uzupełnij pole: Nr.");
        }

        if ($.trim(postCode.val()) == "") {
            errorsArray.push("Uzupełnij pole: Kod pocztowy");
        }

        if ($.trim(city.val()) == "") {
            errorsArray.push("Uzupełnij pole: Miasto");
        }

        if (pizza.val() == 0) {
            errorsArray.push("Wybierz Pizzę!");
        }

        if (agree.is(':checked') == false) {
            errorsArray.push("Musisz wyrazić zgodę na RODO itp.");
        }


        if (errorsArray.length != 0) {
            // console.log(errorsArray); 

            errorsArray.forEach(function (element, index) {
                let liError = "<li>" + element + "</li>";
                errors.append(liError);
            });

            return false;
        }

        let orderObject = {
            firstName: $.trim(firstName.val()),
            lastName: $.trim(lastName.val()),
            street: $.trim(street.val()),
            streetNo: $.trim(streetNo.val()),
            postCode: $.trim(postCode.val()),
            city: $.trim(city.val()),
            pizza: pizza.val(),
            sauces: [
                tomatoSauce.is(':checked'), garlicSauce.is(":checked")
            ],
        };

        console.log(JSON.stringify(orderObject));
        console.log(orderObject);

        return false;

    });


});