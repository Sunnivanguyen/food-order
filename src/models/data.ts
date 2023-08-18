const { v4: uuidv4 } = require("uuid");

export interface TypeDish {
  id: string;
  name: string;
  price: number;
  soldout: boolean;
  image: string;
  quantity?: number;
}

class Dishes implements TypeDish {
  id: string;
  name: string;
  price: number;
  soldout: boolean;
  image: string;

  constructor(name: string, price: number, image: string) {
    this.id = uuidv4();
    this.name = name;
    this.price = price;
    this.soldout = false;
    this.image = image;
  }
}

const chickenRice = new Dishes(
  "chicken rice",
  120000,
  "https://github.com/HoanghoDev/addtocardv2/blob/main/image/1.PNG?raw=true"
);

const dryChicken = new Dishes(
  "fry chicken",
  120000,
  "https://github.com/HoanghoDev/addtocardv2/blob/main/image/2.PNG?raw=true"
);

const tunaSalad = new Dishes(
  "tuna salad",
  240000,
  "https://github.com/HoanghoDev/addtocardv2/blob/main/image/3.PNG?raw=true"
);

const pumpkinSoup = new Dishes(
  "pumpkin soup",
  140000,
  "https://github.com/HoanghoDev/addtocardv2/blob/main/image/4.PNG?raw=true"
);

const sideSalad = new Dishes(
  "side salad",
  100000,
  "https://github.com/HoanghoDev/addtocardv2/blob/main/image/5.PNG?raw=true"
);

const pizza = new Dishes(
  "pizza",
  220000,
  "https://github.com/HoanghoDev/addtocardv2/blob/main/image/6.PNG?raw=true"
);

const ChickenCutlets = new Dishes(
  "Chicken cutlets with salad",
  220000,
  "https://th.bing.com/th/id/R.5dcc1d7fda064a214ecd73b94fb7da73?rik=GVE4OnICQOtb8g&riu=http%3a%2f%2fwww.piratescoveva.net%2f__static%2fstatic%2f401%2fphoto-010.png&ehk=9bc1ZPHVw33lgQ5yzpRP4omxPbBxR8ZBy%2fmjJinTkeU%3d&risl=&pid=ImgRaw&r=0"
);

const beefSteak = new Dishes(
  "Beef Steak",
  220000,
  "https://pngimg.com/uploads/steak/steak_PNG25.png"
);

const butterChicken = new Dishes(
  "Butter Chicken",
  200000,
  "https://www.dlf.pt/dfpng/maxpng/587-5877834_indian-food-dish-png.png"
);

const briyani = new Dishes(
  "Briyani",
  130000,
  "https://www.nicepng.com/png/full/964-9642029_veg-biryani-biryani.png"
);
const dishes = [
  chickenRice,
  dryChicken,
  tunaSalad,
  pumpkinSoup,
  sideSalad,
  pizza,
  ChickenCutlets,
  beefSteak,
  butterChicken,
  briyani,
];

export default dishes;
