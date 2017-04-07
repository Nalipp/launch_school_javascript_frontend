var index = 0;
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
    console.log(person.firstName + ' ' + person.lastName);
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

  remove: function (person) {
    var index = this.getIndex(person);

    if (index === -1) {
      return;
    }

    this.collection.splice(index, 1);
  },

  getIndex: function (person) {
    var index = -1;
    this.collection.forEach(function(collection, i) {
      if (collection.firstName === person.firstName && 
          collection.lastName === person.lastName) {
        index = i;
      }
    });
    return index;;
  },

  isInvalidPerson: function(person) {
    return typeof(person.firstName) !== 'string' && typeof(person.lastName) !== 'string';
  },

  get: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    } 
    return this.collection[this.getIndex(person)];
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

people.update(3, 'lastName', 'Arther');
people.rollCall();

// people.update({firstName: 'Tim', lastName: 'Zach', music: 'Outlaw coutry from the 70s and 80s'});
// console.log(people.collection[people.getIndex({firstName: 'Tim', lastName: 'Zach'})])

// update
//   -get person by id
//   -or create new person with passed person object
//   -or replace existing person with passed person object
// add


