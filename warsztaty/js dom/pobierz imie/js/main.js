const inp1 = document.getElementById('input1');
const inp2 = document.getElementById('input2');
const form = document.getElementById('formularz');

const textClickCallback = (e) => {
    e.preventDefault();

    const inputText1 = inp1.value;
    const inputText2 = inp2.value;




    console.log(inputText1);
    console.log(inputText2);
}

form.addEventListener('submit', textClickCallback);

/*

 Stwórz nasłuchiwanie zdarzenia submit i zdefiniuj odpowiednią funkcję callback.
 Następnie podczas wysyłania formularza zablokuj jego domyślne działanie. Pobierz wartości obydwu pól formularza (czyli fname i lname) i wyświetl jej w konsoli.
*/