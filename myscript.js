
// Scrivi un programma che stampi i numeri da 1 a 100.

// Ma per i multipli di 3 stampi “Fizz” al posto del numero.

// E per i multipli di 5 stampi "Buzz".

// Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".


for (let i = 1; i < 101; i++) {
    // console.log(i , i % 3);
    if( i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    }else if ( i % 5 == 0){
        console.log("Buzz");
    }else if ( i % 3 == 0){
        console.log("Fizz");
    }
    else {
        console.log(i);
    }
}