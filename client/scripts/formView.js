var FormView = {

  $form: $('form'), // gets all HTML elements called <form>
  $addRoomButton: $('#addRoomButton'),
  $addRoomInput: $('#addRoomInputSpan').find('input'),
  $addRoomInputSpan: $('#addRoomInputSpan'),
  $submitRoomName: $('#submitRoomName'),
  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    FormView.$addRoomButton.click(FormView.showAddRoomInput);
    FormView.$submitRoomName.click(FormView.createNewRoom);
    FormView.populateMenu();
  },
  
  createNewRoom: function() {
    RoomsView.renderRoom(({ 'name': FormView.$addRoomInput.val() } ));
  },
  
  showAddRoomInput: function() {
    FormView.$addRoomInputSpan.slideToggle();
    FormView.$addRoomButton.text() === 'Add Room' ? FormView.$addRoomButton.text('Hide') : FormView.$addRoomButton.text('Add Room');
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    let myUsername = App.username.split('%20').join(' ');
    let message = Messages.NewMessage(myUsername, FormView.$form.find('input').val(), RoomsView.$select.val());
    Parse.create(message);
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  },
  
  populateMenu: function() {
    let currentRoom = $('select').val();
    $('select').html('');
    Messages.storage.forEach(message => Rooms.storage.add(message.roomname));
    Rooms.storage.forEach(roomName => RoomsView.renderRoom({ 'name' : roomName }));
    $('select').val(currentRoom);
  }

};