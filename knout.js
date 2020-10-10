function AppViewModel(){
    var self = this;

    var iconTypes = [
      { icon: "icon-bone", text: "Bone"},
      { icon: "icon-ball", text: "Ball"},
      { icon: "icon-circle", text: "Circle"},
      { icon: "icon-rabbit", text: "Rabbit"},
   ]

   self.inventory = ko.observableArray([
      iconTypes[1]
   ]);

    self.userName = ko.observable("Joseph");
    self.count = ko.observable(0);

    self.add = function(){
       var currentValue = self.count();
       self.count(currentValue + 1);

       var index = Math.floor(Math.random() * iconTypes.length);
       self.inventory.push(iconTypes[index]);
    }

    self.minus = function(){
      var currentValue = self.count();
      if(currentValue == 0)
      {
         alert('can not be negative');
         return;
      }
      self.count(currentValue - 1);
    }

    self.removeItem = function(data, event) {
      var indexToRemove = event.target.getAttribute("item-index")
      self.inventory.splice(indexToRemove, 1);
   }

    self.emailAddress = ko.observable("").extend({
      required: true,
      email: true
   });

   self.hasBeenSubmitted = ko.observable(false);

   self.handleSubmit = function() {
      
      if(self.emailAddress().length == 0)
         alert('please fill out you email address');
      else      
         alert('submit the form!');

      console.log({
         emailAddress: self.emailAddress()
      })
   }

    self.status = ko.computed(function(){
      if(self.count() > 0)
         return 'POSITIVE';
      else if(self.count() < 0)
         return 'NEGATIVE';
      else
         return 'ZERO';
    });
 }

 const knockoutApp = document.querySelector("#knockout-app");
 ko.applyBindings(new AppViewModel(), knockoutApp);