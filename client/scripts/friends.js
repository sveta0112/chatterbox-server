var Friends = {

  toggleStatus: function(friend) {
    Friends.storage[friend] = Friends.storage[friend] ? false : true;
  },
  
  storage: {}

};
