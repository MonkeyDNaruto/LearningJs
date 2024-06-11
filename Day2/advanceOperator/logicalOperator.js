// &&(Logical And operator), ||(logical OR operator)
let arjun = {
    score: 50,
    address: "jhapa"
};

let siddhartha = {
    score: 90,
    address: "morang"
};

let nischal = {
    score: 95,
    address: "Kathmandu"
}  

// job repuirement: score >= 90 and address = Kathmandu
if((arjun.score >= 90) || (arjun.address == "Kathmandu")){
    console.log("Arjun you can apply for the job.");
    if((arjun.score >= 90) && (arjun.address == "Kathmandu")){
        console.log("Arjun you got the job.");
    };
};

if((siddhartha.score >= 90) || (siddhartha.address == "Kathmandu")) {
    console.log("Siddhartha you can apply for the job.");
    if((siddhartha.score >= 90) && (siddhartha.address == "Kathmandu")) {
        console.log("Siddhartha you got the job.");
    };
};

if((nischal.score >= 90) || (nischal.address == "Kathmandu")) {
    console.log("Nischal you can apply for the job.");
    if((nischal.score >= 90) && (nischal.address == "Kathmandu")) {
        console.log("Nischal you got the job");
    };
    
};
