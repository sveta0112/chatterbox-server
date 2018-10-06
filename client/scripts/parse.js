var Parse = {

  server: `http://127.0.0.1:3000`,

  create: function(message, successCB, errorCB = null) {
    // todo: save a message to the server
    // inputs: string, function, function
    // outputs: nothing
    // strategy: 
    //  fill in an $.ajax request with the right things
    //    - we'll need the following things:
    //      1. the URL
    //      2. the type (set?)
    //      3. the data (?)
    //      4. content type (application/json ?)
    //      5. success Callback function
    //      6. error Callback function, maybe just the default is fine.
    
    $.ajax({
      url: 'http://127.0.0.1:3000/classes/messages',
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        console.error('chatterbox: Failed to send message', data);
      }
    });
    

  },

  readAll: function(successCB, errorCB = null) { // this method takes in a successCB method and an errorCB method, which are functions that contain their respective work for success and failure
    $.ajax({ // ajax request with six different properties
      url: 'http://127.0.0.1:3000/classes/messages', // this is the server URL above
      type: 'GET', // gets a property
      //data: { order: '-createdAt' }, // this is the data that is gotten by the GET
      contentType: 'application/json', // this is the data format of the data that got GET'd
      success: successCB, // this is a method that calls a callback method called CB when readAll is succesfully called
      error: errorCB || function(error) { // takes in an error message
        console.error('chatterbox: Failed to fetch messages', error); // logs it
      }
    });
  }

};