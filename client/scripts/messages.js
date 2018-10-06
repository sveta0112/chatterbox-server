var Messages = {
  
  NewMessage: function(userName, messageText, roomName = 'lobby') {
    let message = {};
    message.username = userName;
    message.text = messageText;
    message.roomname = roomName;
    return message;
  },
  
  storage: []
};


