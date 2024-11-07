{
    //////////////////////////////// Start////////////////////////////////

    // Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.


    // Type Interface 
    interface Iperson {
        name: string;
        age: number;
    };

   const getProperty = <T , Q extends keyof T>(obj : T , key : Q) : T[Q] => {
    return obj[key];
   };

   const person : Iperson = { name: "Alice", age: 30 };
//    console.log(getProperty(person, "name"));

   
   
    

    //////////////////////////////// End////////////////////////////////
}