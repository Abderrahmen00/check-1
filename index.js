const  pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];
//one//
const getage = pet => {return new Date().getFullYear() - pet.bornOn;};
pets.forEach(pet => { return pet.age = getage(pet)});
console.log(pets)
//two//
const getag = dog => {return new Date().getFullYear() - dog.bornOn;};
const dogs = pets.filter(dog => { return dog.type === "dog"});
console.log(dogs);
//three
const age = 4
console.log(`Jasper is ${age} years old`);

