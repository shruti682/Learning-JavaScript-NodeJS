function BankAccount(customerName,balance=0)
{
    this.customerName=customerName;
    this.accountNumber=Date.now();
    this.balance=balance;

    // this.deposit=(amount)=>{
    //     this.balance+=amount;
    // }
    // this.withdraw=(amount)=>{
    //     this.balance-=amount;
    // }
}

// obj1= new BankAccount("Shruti");
// obj1.deposit(100);
// obj1.withdraw(78);
// console.log(obj1);

accountForm=document.querySelector('#accountForm');
customerName=document.querySelector('#customerName');
balance=document.querySelector('#balance');

accounts=[];

accountForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const newAccount=new BankAccount(customerName.value,balance.value);
    accounts.push(newAccount);
    console.log(accounts);
});

depositForm=document.querySelector('#depositForm');
accountNumber=document.querySelector('#accountNumber');
amount=document.querySelector('#amount');

depositForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const account = accounts.find((element) => element.accountNumber === +accountNumber.value);
    account.balance=+account.balance+(+amount.value);
    console.log(accounts);
});
