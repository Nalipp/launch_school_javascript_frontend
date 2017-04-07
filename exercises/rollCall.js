var index = 1;
var people = [];

var son = {
  firstName: 'Hyeonu',
  lastName: 'Lipp',
}

var wife = {
  firstName: 'Julia',
  lastName: 'Lipp',
}

var me = {
  firstName: 'Nate',
  lastName: 'Lipp',
}

var mother = {
  firstName: 'Gerelda',
  lastName: 'Lipp',
};

var father = {
  firstName: 'Dennis',
  lastName: 'Lipp',
};

var friend = {
  firstName: 'Gary',
  lastName: 'Kapil',
};


people = {
  collection: [],
  information: function (person) {
    console.log(person.id + ': ' + person.firstName + ' ' + person.lastName);
  },

  rollCall: function() {
    this.collection.forEach(this.information);
  },

  add: function (person) {
    addId = {
      id : index,
      firstName : person.firstName,
      lastName : person.lastName,
    }
    if (this.isInvalidPerson(addId)) {
      return;
    }
    this.collection.push(addId);
    index += 1;
  },

  getIndex: function (id) {
    var index = -1;
    
    for (var i = 0; i < this.collection.length; i++) {
      if (this.collection[i].id === id) index = i; 
    }
    return index;
  },

  remove: function (id) {
    var index = this.getIndex(id);

    if (index === -1) {
      return;
    }

    this.collection.splice(index, 1);
  },

  getId: function (person) {
    var id = -1;
    this.collection.forEach(function(collection, i) {
      if (collection.firstName === person.firstName && 
          collection.lastName === person.lastName) {
        id = collection.id;
      }
    });
    return id;;
  },

  isInvalidPerson: function(person) {
    return typeof(person.firstName) !== 'string' || typeof(person.lastName) !== 'string';
  },

  get: function(id) {
    if (this.getId === -1) {
      return;
    }
    for (var i = 0; i < this.collection.length; i++) {
      
      if (this.collection[i].id === id) {
        this.information(this.collection[i]);
      }
    }
  },

  getObjectById(id) {
    return this.collection.filter(function(person) {
      return person.id === id;
    })
  },

  update: function(id, key, value) {
    if (!this.getObjectById(id)) {
      console.log('That id is not in the database'); 
      return;
    }
    this.getObjectById(id)[0][key] = value;
  }
}


people.add(me);
people.add(son);
people.add(wife);
people.add(father);
people.add(mother);
people.add(friend);
// people.rollCall();

// people.update(3, 'lastName', 'Arther');
// people.rollCall();

// console.log(people.collection.forEach(function(person) {console.log(person.id); }));

// console.log(people.get(2));

// collection
// console.log(people.collection);
// rollcall()
// console.log(people.rollCall());
// add(person)
// people.add({firstName: 'Tad', lastName: 'Albricht'})
// var id = people.getId({firstName: 'Dennis', lastName: 'Lipp'})
// var person = {firstName: 'Tad', lastName: 'Albricht'};
// // people.remove(id)
// // getId(person)
// console.log(people.isInvalidPerson(person));
// console.log(people.get(2));
// console.log(people.getObjectById(6));
// people.update(7, 'lastName', 'Albright');
// people.rollCall();
