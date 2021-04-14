let app = new Vue ({
  el: '#app',
  data: {
    /* header e footer*/
    navLinks: [
      'home',
      'about',
      'project',
      'services',
      'blog',
      'contact'
    ],
    /* / header e footer*/
    
    activeImages: [],
    counterImg: 1,
    imgSlot: [
      {
        source: 'img/DRYcover.jpg',
        name: 'dry',
        counter: 1
      },
      {
        source: 'img/SPONSORSHIPcover.jpg',
        name: 'sponsorship',
        counter: 1
      },
      {
        source: 'img/VIZEONcover.jpg',
        name: 'vizeon',
        counter: 1
      },
      {
        source: 'img/VIZEONcover.jpg',
        name: 'vizeon',
        counter: 2
      },
      {
        source: 'img/SPONSORSHIPcover.jpg',
        name: 'sponsorship',
        counter: 2
      },
      {
        source: 'img/DRYcover.jpg',
        name: 'dry',
        counter: 2
      }
    ],
    itemIndex: null,
    isHover: false,
    position: ''
  },

  created() {
    this.imgSlot.forEach((element) => {
      if (element.counter == 1) {
        this.activeImages.push(element);
      }
    });
  },
  methods: {
    forward: function () {
      this.counterImg++;
      if (this.counterImg > 2) {
        this.counterImg = 1;
      }
      this.activeImages = [];
      this.imgSlot.forEach((element) => {
        if (element.counter == this.counterImg) {
          this.activeImages.push(element);
        }
      });
    },
    back: function () {
      this.counterImg--;
      if (this.counterImg < 1) {
        this.counterImg = 2;
      }
      this.activeImages = [];
      this.imgSlot.forEach((element) => {
        if (element.counter == this.counterImg) {
          this.activeImages.push(element);
        }
      });
    },
    
  }
});
