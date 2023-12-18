window.onload=function(){
    var vm = new Vue({
    el: "#vue",
    data: {
      products: [
        {
          id: 1,
          name: "black",
          price: 99
        },
        {
          id: 2,
          name: "dark-blue",
          price: 99
        },
        {
          id: 3,
          name: "green",
          price: 99
        },
        {
          id: 4,
          name: "grey",
          price: 99
        },
        {
          id: 5,
          name: "light-blue",
          price: 99
        },
        {
          id: 6,
          name: "pink",
          price: 99
        },
        {
          id: 7,
          name: "purple",
          price: 99
        },
        {
          id: 8,
          name: "red",
          price: 99
        },
        {
          id: 9,
          name: "white",
          price: 99
        }
      ]
    },
    computed: {
      cart() {
        return this.products.filter((i) => i.qty);
      },
      count() {
        return this.cart.reduce((n, cart) => cart.qty + n, 0);
      },
      total() {
        return this.cart
          .reduce((n, cart) => cart.price * cart.qty + n, 0)
          .toFixed(2);
      }
    },
    methods: {
      addToCart(product) {
        product.qty ? product.qty++ : this.$set(product, "qty", +1);
      }
    }
  });
  
    }