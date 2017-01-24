//Business Logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.address = [];
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
Address.prototype.fullAddress = function() {
  return this.street + " " + this.city + ", " + this.state;
}

//User Interface
$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
                  '<div class="form-group">' +
                    '<label for="new-street">Street</label>' +
                    '<input type="text" class="form-control" id="new-street">' +
                  '</div>' +

                  '<div class="form-group">' +
                    '<label for="new-city">City</label>' +
                    '<input type="text" class="form-control" id="new-city">' +
                  '</div>' +

                  '<div class="form-group">' +
                    '<label for="new-state">State</label>' +
                    '<input type="text" class="form-control" id="new-state">' +
                  '</div>' +
                '</div>');
  });



  $("form#new-contact").submit(function(event) {
    event.preventDefault();

  var inputtedFirstName = $("#new-first-name").val();
  var inputtedLastName = $("#new-last-name").val();

  var newContact = new Contact(inputtedFirstName, inputtedLastName);

  $(".new-address").each(function() {
    var inputtedStreetName = $(this).find("input#new-street").val();
    var inputtedCityName = $(this).find("input#new-city").val();
    var inputtedStateName = $(this).find("input#new-state").val();
    var newAddress = new Address(inputtedStreetName, inputtedCityName, inputtedStateName);
    newContact.address.push(newAddress);
  });

  $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

  $(".contact").last().click(function() {
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.fullName());
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
    $("ul#addresses").text("");
    newContact.address.forEach(function(Address) {
      $("ul#addresses").append("<li>" + Address.fullAddress() + "</li>");
    });
  });

  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  });
});
