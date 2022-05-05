

//map1 preserves the order of insertion of key value pairs
//mao also preserves the data type of keys i.e it doesnot converts the 
  //keyys to string by default likw what object does SO, MAPS can store keys of any data types.

  let map1 = new Map();
  map1.set("name","sun");
  map1.set("lname","moon");
  map1.set("age",25);
  map1.set(true,"true");
  console.log(map1)
  console.log(map1.size);
  
  console.log(map1.get("1"));
  console.log(map1.get(1));
  console.log(map1.get("name"));

  console.log(map1.has("EMAIL"));
  map1.delete(1);
//   map1.clear()
      console.log(map1)
      console.log(map1.size);

for(let key of map1.keys()){
    console.log(key);
}
for(let value of map1.value()){
    console.log(value);
}

//entry
for(let entry of map1.entries()){
    console.log(entry);
}

map1.forEach(function(value,key){
    console.log(key,value);
})


//Sets has no keys and but only UNIQUE Values...
//Set can not give u key value pairs, but only value paires using .entries() method
let set1 = new Set();

set1.add("Apple");
set1.add("Banana");
set1.add("Oranges");
set1.add("Mangoes");
set1.add("Litchi");

console.log(set1);

console.log(set1.values());
console.log(set1.keys());
console.log(set1.entries());
console.log(set1.has("Kiwi"));

set1.delete("Banana");

console.log(set1.has("Banana"));

//set1.clear();
console.log(set1);

for (let key of set1.keys()) {
    console.log(key);
}

for (let value of set1.values()) {
    console.log(value);
}

for (let entry of set1.entries()) {
    let key = entry;
    // console.log(key1[1])
    console.log(key);
}

set1.forEach(function(value, key) {
    console.log(key, value);
})

  
