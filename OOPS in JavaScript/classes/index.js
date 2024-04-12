// class
// No need to define methods on prototype of class explicitly - Methods are defined on the 'prototype' of each class instance and are shared by all instances
// can not be hoisted

// const BankAccount=class{ --> unnamed class
class BankAccount{
    customerName;
    accountNumber;
    balance;

    constructor(customerName,balance=0){
        this.customerName=customerName;
        this.accountNumber=Date.now();
        this.balance=balance;
    }

    deposit(amount){
        this.balance+=amount;
    }
    withdraw(amount){
        this.balance-=amount;
    }
}

console.log(BankAccount.prototype);

obj1=new BankAccount("shruti",1200);
obj1.deposit(200);
console.log(obj1);
obj1.withdraw(300);
console.log(obj1);
