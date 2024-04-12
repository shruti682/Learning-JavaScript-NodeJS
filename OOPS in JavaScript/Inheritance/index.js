// Inheritance

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

class CurrentAccount extends BankAccount{
    tansactionLimit=50000;
    constructor(customerName,balance=0){
        super(customerName,balance);
    }

    takeBusinessLoan(amount){
        console.log('Taking Business Loan '+ amount)
    }
}

class SavingAccount extends BankAccount{
    tansactionLimit=10000;
    constructor(customerName,balance=0){
        super(customerName,balance);
    }

    takePersonalLoan(amount){
        console.log('Taking Personal Loan '+ amount)
    }
}

obj1 = new CurrentAccount("shruti",1200);
obj1.deposit(200);
console.log(obj1);
obj1.withdraw(500);
console.log(obj1);
obj1.takeBusinessLoan(400);
