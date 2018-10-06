var App = {

  $spinner: $('.spinner img'), // getElementsByClassName(spinner and img)

  username: 'anonymous', // why is there a default username?

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    setInterval(App.fetch, 1000);

  },
  // This function accepts a callback function, which by default is an anon. func. that does nothing.
  // it calls the readAll method of the Parse object (the server) and logs the data that gets
  // passed in. Afterward, it invokes whatever callback funciton was passed in.
  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      Messages.storage = [];
      data.results.forEach(message => Messages.storage.push(message));
      
      RoomsView.renderRoomMessages();
      callback();
      // MessagesView.render('lobby');
    });
  },

  // Calls $spinner.show()... probably shows a spinner during loading.
  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  // see above, stops that.
  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};

/* 

What is this?

Questions:

What does readAll do?


*/