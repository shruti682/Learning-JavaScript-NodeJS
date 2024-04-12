// Encapculation
// Data Hiding
// # is used before data type of member function to keep it priate
// can not be accessed by derived class object

class BankAccount{
    customerName;
    accountNumber;
    #balance; // private data type

    constructor(customerName,balance=0){
        this.customerName=customerName;
        this.accountNumber=Date.now();
        this.#balance=balance;
    }

    deposit(amount){
        this.#balance+=amount;
    }
    withdraw(amount){
        this.#balance-=amount;
    }

    // getter 
    get balance(){
        return this.#balance;
    }

    // setter
    set balance(bal){
        if(isNaN(bal)){
            throw new Error("Not a valid amount");
        }
        this.#balance=bal;
    }
}

class CurrentAccount extends BankAccount{
    tansactionLimit=50000;
    constructor(customerName,balance=0){
        super(customerName,balance);
    }

    #calculateLoan(amount){ //private function
        console.log('Calculating loan...');
    }
    takeBusinessLoan(amount){
        calculateLoan(amount);
        console.log('Taking Business Loan '+ amount)
    }
}



obj1 = new CurrentAccount("shruti",1200);
obj1.balance=1000; //setter
console.log(obj1.balance); //getter
