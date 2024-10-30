// function printName () {
//     console.log (`my name,${printName}`);
// }

// named ("shouq")

function printName(name) {
  console.log(`my name, ${name}`);
}
printName("shouq");

function printAge(age) {
  return 2024 - age;
}
console.log(printAge(1992));

function printNameAndAge(name, age) {
  console.log(`Hello ${name} you are ${2024 - age} years old`);
}
printNameAndAge("shouq", 1992);

function printHello(name, language) {
  if (language === "en") {
    console.log(`hello ${name}`);
  } else if (language === "es") {
    console.log(`Hola ${name}`);
  } else if (language === "fr") {
    console.log(`Bonjour ${name}`);
  } else if (language === "tr") {
    console.log(`Merhaba ${name}`);
  }
}
printHello("shouq", "es");

function printMaxa(a, b) {
  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
}
printMaxa(12, 4);
