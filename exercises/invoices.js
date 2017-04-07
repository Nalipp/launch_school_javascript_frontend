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
  payInvoice: function(client) {
    var unpaid = [];
    for (var i = 0; i < this.unpaid.length; i++) {
      if (client.name === this.unpaid[i].name) {
        this.paid.push(client);
      } else {
        notFound.push(client);
      }
    }
    this.unpaid = unpaid;
  }
}

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);

invoices.payInvoice({name: 'Moonbeam Interactive'});
console.log(invoices.paid);

// console.log(invoices);
// console.log(invoices.totalDue());
