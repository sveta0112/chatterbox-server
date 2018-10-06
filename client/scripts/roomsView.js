var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    for (roomObj in Rooms.storage) {
      debugger;
      RoomsView.renderRoom(roomObj);
    }
  },

  render: _.template('<option><%-name%></option>'),
  
  renderRoomMessages: function() {
    MessagesView.$chats.html('');
    MessagesView.render(RoomsView.$select.val());
    // MessagesView.render(RoomsView.$select.val());
  },

  renderRoom: function(roomObj) {
    // inputs: string
    // outputs: no outputs
    // edge cases: submitted room doesn't exist. 

    // strategy:
    // append a new <option> tag to the rooms <select> tag. 
    
    let roomHTML = RoomsView.render(roomObj);
    RoomsView.$select.append(roomHTML);
    Rooms.storage.add(roomObj.roomname);
    RoomsView.$select.mouseenter(FormView.populateMenu);
    RoomsView.$select.change(RoomsView.renderRoomMessages);
  }

};


//renderRoom shoul also add the roomObject to rooms? 