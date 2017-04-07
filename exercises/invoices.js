var invoices = {
  unpaid: [],
  paid: [],
  add: function(clientName, amountOwed) {
    this.unpaid.push({name: clientName, amount: amountOwed});
  },
  totalDue: function() {
    return this.unpaid.reduce(function(sum, obj) {
      return sum += obj.amount; 
    }, 0)
  },
  totalPaid: function() {
    return this.paid.reduce(function(sum, obj) {
      return sum += obj.amount; 
    }, 0)
  },
  payInvoice: function(client) {
    var unpaid = [];
    for (var i = 0; i < this.unpaid.length; i++) {
      if (client.name === this.unpaid[i].name) {
        this.paid.push(this.unpaid[i]);
      } else {
        unpaid.push(this.unpaid[i]);
      }
    }
    this.unpaid = unpaid;
  }
}

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);

invoices.payInvoice({name: 'Due North Development'});
invoices.payInvoice({name: 'Slough Digital'});
console.log(invoices.paid.forEach(function(value) {console.log(value);}) );
console.log(invoices.unpaid.forEach(function(value) {console.log(value);}) );

console.log(invoices.totalPaid());
console.log(invoices.totalDue());

// console.log(invoices);
// console.log(invoices.totalDue());
