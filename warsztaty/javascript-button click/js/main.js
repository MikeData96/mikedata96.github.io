$(function () {

    const idUser = $("idUser");
    const userName = $("userName");
    const url = $("#url");
    const paragrafy = $("p")
    const button = $("#getData");

    $('button').click(function () {
        let numberUserId = $("#numberUserId").val();
        console.log("numberUserId", numberUserId)

        fetch(`https://jsonplaceholder.typicode.com/users/${numberUserId}`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                idUser.text("Id użytkownika to " + res.id)
                userName.text("Nazwa użytkownika" + res.name)
                url.text("Strona klienta" + res.website)
                paragrafy.css({
                    "color": "red",
                    "font-size": "20px"

            })
    })
})
    })