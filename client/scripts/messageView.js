var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"> <%-username%> </div>
        <div> <%-text%> </div>
      </div>
    `)

}; // _.template 

// Template functions can both interpolate values, using <%= … %>,
//  as well as execute arbitrary JavaScript code, with <% … %>.

//  If you wish to interpolate a value, and have it be 
// HTML-escaped, use <%- … %>

// let myMessage = MessageView.render('hello "dude" <div></div> sup.')

