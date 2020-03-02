class Ticket {
  constructor() {
    this.name = 'Anechka';
  }
};

class Booking extends Ticket {
  constructor(props) {
    super();
    this.referenceNumber = props.referenceNumber;
    this.fare = props.fare;
    this.passengers = props.passengers;
    this.flights = props.flights;

    this.getPassengerQuantity = this.getPassengerQuantity.bind(this);

    // this.getFare = this.getFare.bind(this);
  }

  getFlights() {
    return this.flights;
  }

  getPassengerQuantity() {
    console.log(this);
  }

  // getFare() {
  //   return this.getPassengerQuantity();
  // }
}

const myBooking = new Booking({
  referenceNumber: 'ANDI77',
  fare: '329.00',
  passengers: 2,
  flights: 'good flights'
});

console.log(myBooking.getFare());

/**
 * this of bar is foo
 */
// foo.bar();