//An array of working with drug datas

const drugs = [

 { id: 1, name: "Amoxicillin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 120, manufacturer: "Pfizer" },

 { id: 2, name: "Paracetamol", category: "Analgesic", dosageMg: 1000, isPrescriptionOnly: false, stock: 200, manufacturer: "GSK" },

 { id: 3, name: "Ibuprofen", category: "Analgesic", dosageMg: 400, isPrescriptionOnly: false, stock: 150, manufacturer: "Bayer" },

 { id: 4, name: "Chloroquine", category: "Antimalarial", dosageMg: 250, isPrescriptionOnly: true, stock: 80, manufacturer: "Sanofi" },

 { id: 5, name: "Ciprofloxacin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 70, manufacturer: "Pfizer" },

 { id: 6, name: "Loratadine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 160, manufacturer: "Novartis" },

 { id: 7, name: "Metformin", category: "Antidiabetic", dosageMg: 850, isPrescriptionOnly: true, stock: 140, manufacturer: "Teva" },

 { id: 8, name: "Artemether", category: "Antimalarial", dosageMg: 20, isPrescriptionOnly: true, stock: 60, manufacturer: "Roche" },

 { id: 9, name: "Aspirin", category: "Analgesic", dosageMg: 300, isPrescriptionOnly: false, stock: 180, manufacturer: "Bayer" },

 { id: 10, name: "Omeprazole", category: "Antacid", dosageMg: 20, isPrescriptionOnly: true, stock: 90, manufacturer: "AstraZeneca" },

 { id: 11, name: "Azithromycin", category: "Antibiotic", dosageMg: 250, isPrescriptionOnly: true, stock: 50, manufacturer: "Pfizer" },

 { id: 12, name: "Cetirizine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 110, manufacturer: "Novartis" },

 { id: 13, name: "Insulin", category: "Antidiabetic", dosageMg: 100, isPrescriptionOnly: true, stock: 30, manufacturer: "Novo Nordisk" },

 { id: 14, name: "Artemisinin", category: "Antimalarial", dosageMg: 100, isPrescriptionOnly: true, stock: 50, manufacturer: "GSK" },

 { id: 15, name: "Codeine", category: "Analgesic", dosageMg: 30, isPrescriptionOnly: true, stock: 20, manufacturer: "Teva" },

 { id: 16, name: "Vitamin C", category: "Supplement", dosageMg: 500, isPrescriptionOnly: false, stock: 300, manufacturer: "Nature’s Bounty" },

 { id: 17, name: "Ranitidine", category: "Antacid", dosageMg: 150, isPrescriptionOnly: false, stock: 90, manufacturer: "Sanofi" },

 { id: 18, name: "Doxycycline", category: "Antibiotic", dosageMg: 100, isPrescriptionOnly: true, stock: 40, manufacturer: "Pfizer" },

 { id: 19, name: "Tramadol", category: "Analgesic", dosageMg: 50, isPrescriptionOnly: true, stock: 45, manufacturer: "Teva" },

 { id: 20, name: "Folic Acid", category: "Supplement", dosageMg: 5, isPrescriptionOnly: false, stock: 250, manufacturer: "Nature’s Bounty" }

]





//Question One
// To get all drugs that are antibiotics.

const toGetAntibiotics = drugs.filter((each) => {
    return each.category === "Antibiotic"
}
);
console.log(toGetAntibiotics)


//Question Two
// To return an array of drug names in lowercase.

const nameToLowercase = drugs.map((each) => {
    return each.name.toLocaleLowerCase()
});
console.log(nameToLowercase)


//Question Three
//A function that accepts a category and returns all drugs under that category.

function getCategory(drugs, category) {
    return drugs.filter((drug) =>{
        return drug.category === category
    })
}

const analgesic = getCategory(drugs, "Analgesic")
console.log(analgesic)


//Question Four
//To log each drug’s name and its manufacturer.

const toLog = drugs.map((each) => {
    return {
        name: each.name,
        manufacturer: each.manufacturer
    }
}
);
console.log(toLog);


//Question Five
//To return all drugs that require a prescription.

const requirePrescription = drugs.filter((isRequire) => {
    return isRequire.isPrescriptionOnly === true
});

console.log(requirePrescription)



//Question six
//To return a new array, each item should follow the format: "Drug: [name] - [dosageMg]mg".

const newArrayOfDrugs = drugs.map((drug) => {
    return `Drug: ${drug.name} - ${drug.dosageMg}mg`
})
console.log(newArrayOfDrugs)



//Question seven
//To write a function that returns all drugs with a stock less than 50.

const drugStockBelow50 = () => {
   return drugs.filter((stock) => {
       return stock.stock < 50;
});
}
const result = drugStockBelow50();
console.log(result);


//Question eight
//To return all drugs that are not prescription-only.

const notPrescriptionOnly = drugs.filter((notRequire) => {
    return notRequire.isPrescriptionOnly === false
});

console.log(notPrescriptionOnly)


//Question nine
//To write a function that takes a manufacturer name and returns how many drugs are from that company.

const drugManufacturer = (drugs, manufacturer) => {
    
    return drugs.filter((each) => {
        return each.manufacturer === manufacturer;
    })

};
const drugManuf = drugManufacturer(drugs, "Pfizer");

console.log(drugManuf)


//Question ten
//To use forEach() to count how many drugs are Analgesics.

let counter = 0;
const toCount = drugs.forEach((each) => {
        if (each.category === "Analgesic") {
        counter++
    }
      })
console.log(counter)

