// grab the nav element.
const elem = document.querySelector("nav");

// construct an instance of Headroom, passing the nav elemen.
const headroom = new Headroom(elem, {
  offset: 55,
  tolerance: {
    up: 5,
    down: 0
  },
  classes: {
    initial: "animate__animated",
    pinned: "animate__flipInX",
    unpinned: "animate__flipOutX",
  }
});

// initialise
headroom.init();