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

Address.prototype.fullAddress = function() {
  return this.street + " " + this.city + ", " + this.state;
}

//User Interface
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
  event.preventDefault();

  var inputtedFirstName = $("#new-first-name").val();
  var inputtedLastName = $("#new-last-name").val();

  var newContact = new Contact(inputtedFirstName, inputtedLastName);

  $("#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName +"</span></li>");

  $(".contact").last().click(function() {
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.firstName);
    $(".first-Name").text(newContact.firstName);
    $(".last-Name").text(newContact.lastName);
  });

  $(".new-address").each(function() {
    var inputtedStreetName = $(this).find("input.new-street").val();
    var inputtedCityName = $(this).find("input.new-city").val();
    var inputtedStateName = $(this).find("input.new-state").val();
    var newAddress = new Address(inputtedStreetName, inputtedCityName, inputtedStateName);
    newContact.address.push(newAddress);
  });
  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  });
});
