export const ROUTES = {
  home: { path: "/", label: "Home" },
  login: { path: "/login", label: "Login" },
  courses: {
    path: "/courses",
    label: "Courses",
    detail: (id: string) => `/courses/${id}`,
  },
  paymentOptions: {
    // to be deprecated, use paymentMethods instead
    path: "/payment",
  },
  paymentMethods: {
    path: "/payment",
  },
  paymentConfirmation: {
    path: "/payment/payment",
  },
  paymentChangeMethod: {
    path: "/payment/change-method",
  },
  paymentSuccess: {
    path: "/payment/success",
  },

  payment: {
    methods: {
      getPath: (orderId: string) => `/payment/${orderId}`,
    },
  },

  me: {
    myorders: {
      path: "/me/myorders",
    },
    myprofile: {
      path: "/me/profile",
    },
    myclasses: {
      path: "/me/classes",
    },
  },
};
