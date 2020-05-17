const ADD_TO_CART = "ADD_TO_CART";
export const GET_NUMBERS_CART = "GET_NUMBERS_CART";
const initialState = {
  cartProducts: 0,
  cartCost: 0,
  products: {
    8: {
      description:
        "decoration, carnival, autumn, colorful, toy, flora, painting, flowers, art, floristry, new orleans, psychedelic art",
      id: 8,
      image:
        "https://get.pxhere.com/photo/flower-glass-decoration-carnival-autumn-colorful-toy-flora-painting-flowers-art-floristry-new-orleans-psychedelic-art-668590.jpg",
      price: 1000,
      productName: "Flowers",
      inCart: false,
    },
    7: {
      description:
        " art, sketch, drawing, illustration, mural, cyprus, modern art, acrylic paint, psychedelic art",
      id: 7,
      image:
        "https://c.pxhere.com/photos/5a/f0/street_art_london_shoreditch_eastend_street_brick_lane_art_facade-1189691.jpg!d",
      price: 1700,
      productName: "Face",
      inCart: false,
    },
    6: {
      description:
        "painting, folk art, abstract, art station, colorful, creativity,",
      id: 6,
      image:
        "https://cdna.artstation.com/p/assets/images/images/006/782/528/large/ross-tran-busstop-web.jpg?1501196755",
      price: 2000,
      productName: "Station",
      inCart: false,
    },
    5: {
      description: "painting, folk art, colorful, creativity,",
      id: 5,
      image: "http://www.rikoart.com/wp-content/uploads/2016/06/cockerel.jpg",
      price: 1500,
      productName: "Birds",
      inCart: false,
    },
    4: {
      description:
        "abstract painting, acrylic paint, art, brush, canvas, creativity, dirty, expressionism, messy, modern art, painting, pattern",
      id: 4,
      image:
        "https://www.artranked.com/images/7e/7efe4881821b078f5ad6187c5ebff720.jpg",
      price: 1500,
      productName: "Big Mess",
      inCart: false,
    },
    3: {
      description:
        "abstract painting, acrylic paint, colorful, contemporary art, dirty, expressionism, gouache, messy, rough",
      id: 3,
      image:
        "https://get.pxhere.com/photo/abstract-abstract-painting-acrylic-acrylic-paint-art-artistic-background-brush-canvas-colorful-contemporary-art-creative-creativity-design-dirty-expressionism-gouache-hd-wallpaper-ink-messy-modern-art-paint-painting-pattern-rough-texture-vibrant-color-wallpaper-watercolor-1532895.jpg",
      price: 2000,
      productName: "Mestiry",
      inCart: false,
    },
    2: {
      description:
        " colorful, contemporary art, creativity, expressionism, gouache,  vibrant color, watercolor",
      id: 2,
      image:
        "http://hdwpro.com/wp-content/uploads/2016/10/HD-Artistic-Image.jpg",
      price: 1500,
      productName: "Winter Nights",
      inCart: false,
    },
    1: {
      description: "abstract art, modern art, impressionist, acrylic paint",
      id: 1,
      image:
        "https://get.pxhere.com/photo/abstract-color-artistic-colorful-decor-painting-art-modern-art-impressionist-acrylic-paint-640027.jpg",
      price: 1000,
      productName: "Acropolis",
      inCart: false,
    },
  },
};
const ADDING_TO_CART = "shoppyArt/authentication/ADDING_TO_CART";
//add cart action
export const addToCart = (id, price) => {
  return (dispatch) => {
    console.log("add");
    console.log("product", id);
    console.log("product", price);
    let productsId = [];
    let productsIdJson = window.localStorage.getItem(ADDING_TO_CART);
    if (productsIdJson) {
      productsId = JSON.parse(productsIdJson);
    }
    let newProducts = [...productsId];
    if (productsId.indexOf(id) === -1) {
      newProducts = [...newProducts, id];
    }
    window.localStorage.setItem(ADDING_TO_CART, JSON.stringify(newProducts));
    dispatch({
      type: ADD_TO_CART,
      payload: id,
    });
  };
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      let addedproducts = { ...state.products[action.payload] };
      addedproducts.inCart = true;
      console.log(addedproducts);
      return {
        ...state,
        cartProducts: state.cartProducts + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          // ...state.products[action.payload],
          [action.payload]: addedproducts,
        },
      };
    case GET_NUMBERS_CART:
      return {
        ...state,
      };
    default:
      return state;
  }
}
