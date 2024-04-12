function BankAccount(customerName,balance=0) //constructor fn
{
    this.customerName=customerName;
    this.accountNumber=Date.now();
    this.balance=balance;

    // When an object is created the properties and methods gets attached to the object.
    // Properies for every object is different, but method is same.
    // So attaching same method to every object is waste of memory.
    // Hence we use prototype to avoid this.

    // this.deposit=(amount)=>{
    //     this.balance+=amount;
    // }
    // this.withdraw=(amount)=>{
    //     this.balance-=amount;
    // }
}

// prototype is used to add properties / methods to an object

// can not use arrow function
// If we use arrow function -> this will point window , the global object
BankAccount.prototype.deposit=function(amount){
    this.balance+=amount;
}

BankAccount.prototype.withdraw=function(amount){
    this.balance-=amount;
}


console.log(BankAccount.prototype);

obj1=new BankAccount("shruti",1000);
obj1.deposit(200);
console.log(obj1);
obj1.withdraw(300);
console.log(obj1);
