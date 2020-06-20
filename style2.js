// reference type
// object 

let person = {
    name : "sa",
    age : 23
  };
  
  // dot notation
  person.name = 'di';
  // bracket notation
  person['name'] = '56';
  person['age'] = 50;
  console.log(person['name']+" "+person.name);
  console.log(person['age']+" "+person.name);
  
  // arrays
  
  let arry = ['red','green'];
  arry[2] = 56; // lenth is dyanmic. objects and size of array is dynamic.
  console.log(arry);
  
  //  functions
  
  function fun(name, x){
     console.log("hi"+" "+name+ " "+x);
  }
  
  fun('Alex',person.age);
  
  
  function sq(num) {
      return num*num;
  }
  
  let num = sq(3);
  console.log(num);