const resturents = [
    {
        name: "Tony'y Pizzera",
        cuisine: "Italian",
        rating: 4,
        address: {
            first_line: "45 Lombard Street",
            second_line: "London",
            postcode: "SE1 4DF",
            contact: [17723425487, 19734283588]
        }
    },
    {
        name: "Sushi Swish",
        cuisine: "Japanese",
        rating: 5,
        address: {
            "first line": "21 Avington Lane",
            "second line": "London",
            postcode: "SW1 4PE",
            contact: [27729875234, 39534634588]
        }
    }
];

//  1. Get Sushi Swishes cuisine
console.log(resturents[1].cuisine);

//  2. Get Tony'y Pizzera postcode
console.log(resturents[0].address.postcode);

//  3. Get both the resturents name
console.log("First resturent name: " + resturents[0].name, "& Second resturent name: " + resturents[1].name);
resturents.forEach(resturent => console.log(resturent.name));

//  4. Get Tony'y Pizzera first line of their address
console.log(resturents[0].address.first_line);

//  5. Get Sushi Swishes first line of their address
console.log(resturents[1].address["first line"]);


//  6. Get Sushi Swishes second contact number
console.log(resturents[1].address.contact[1]);