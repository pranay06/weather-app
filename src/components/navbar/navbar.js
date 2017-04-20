class NavBarController {

  /*@ngInject*/
  constructor() {        

    this.items = 
      [
        {
          href: ["Home"],
          label: 'Home',
          isActive: true
        }
      ];


  }

  $onInit() {
     
  }

  onItemClicked(clickedItem) {
    this.items = this.items.map((item) => {
      item.isActive = item.label === clickedItem.label;
      return item;
    });
  }
}

const Navbar = {
  template: require('./nav-bar.html'),
  controller: NavBarController,
  controllerAs: "model"
};

export default Navbar;

