function makeBank() {
  var accounts = [];
  return {
    openAccount: function() {
      var number = accounts.length + 101;
      var newBank = makeAccount(number);
      accounts.push(newBank);
      return newBank;
    },
    transfer: function(sourceAccount, destinationAccount, amt) {
      return destinationAccount.deposit(sourceAccount.withdraw(amt))
    },
  }
}

function makeAccount(number) {
  return {
    balance: 0,
    number: number,
    transactions: [],
    deposit: function(amt) {
      this.balance += amt;
      this.transactions.push({type: "deposit", amount: amt});
      return amt;
    },
    withdraw: function(amt) {
      if (amt > this.balance) {
        amt = this.balance;
      }
      this.balance -= amt;
      this.transactions.push({type: "withdraw", amount: amt});
      return amt;
    },
  }
}

var bank = makeBank();
var source = bank.openAccount();
console.log(source.deposit(10));
// // = 10
var destination = bank.openAccount();
console.log(bank.transfer(source, destination, 7));
// // = 7
console.log(source.balance);
// // = 3
console.log(destination.balance);
// // = 7

// var bank = makeBank();
// var account = bank.openAccount();
// console.log(account.number);
// // = 101
// console.log(bank.accounts);
// // // // = [Object]
// console.log(bank.accounts[0]);
// // // = Object {number: 101, balance: 0, transactions: Array[0]}
// var secondAccount = bank.openAccount();
// console.log(secondAccount.number);
// // // = 102

// var bank = makeBank();
// console.log(bank.accounts);
// // = []
