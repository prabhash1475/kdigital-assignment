import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "Stainless Steel 304 Pipes",
      material: "Stainless Steel",
      grade: "304",
      shape: "",
      length: "",
    },
    {
      id: 2,
      name: "Aluminium F12 Pipes",
      material: "Aluminium",
      grade: "F12",
      shape: "",
      length: "",
    },
    {
      id: 3,
      name: "Copper C101 Sheets",
      material: "Copper",
      grade: "C101",
      shape: "",
      length: "",
    },
    {
      id: 4,
      name: "Brass H62 Rods",
      material: "Brass",
      grade: "H62",
      shape: "",
      length: "",
    },
    {
      id: 5,
      name: "Stainless Steel 316 Sheets",
      material: "Stainless Steel",
      grade: "316",
      shape: "",
      length: "",
    },
    {
      id: 6,
      name: "Aluminium F24 Rods",
      material: "Aluminium",
      grade: "F24",
      shape: "",
      length: "",
    },
    {
      id: 7,
      name: "Copper C110 Rods",
      material: "Copper",
      grade: "C110",
      shape: "",
      length: "",
    },
    {
      id: 8,
      name: "Brass H65 Pipes",
      material: "Brass",
      grade: "H65",
      shape: "",
      length: "",
    },
    {
      id: 9,
      name: "Stainless Steel 410 Rods",
      material: "Stainless Steel",
      grade: "410",
      shape: "",
      length: "",
    },
    {
      id: 10,
      name: "Aluminium F32 Sheets",
      material: "Aluminium",
      grade: "F32",
      shape: "",
      length: "",
    },
    {
      id: 11,
      name: "Copper C122 Pipes",
      material: "Copper",
      grade: "C122",
      shape: "",
      length: "",
    },
    {
      id: 12,
      name: "Brass H68 Sheets",
      material: "Brass",
      grade: "H68",
      shape: "",
      length: "",
    },
    {
      id: 13,
      name: "Stainless Steel 430 Sheets",
      material: "Stainless Steel",
      grade: "430",
      shape: "",
      length: "",
    },
    {
      id: 14,
      name: "Aluminium F40 Pipes",
      material: "Aluminium",
      grade: "F40",
      shape: "",
      length: "",
    },
    {
      id: 15,
      name: "Copper C230 Sheets",
      material: "Copper",
      grade: "C230",
      shape: "",
      length: "",
    },
    {
      id: 16,
      name: "Brass H70 Rods",
      material: "Brass",
      grade: "H70",
      shape: "",
      length: "",
    },
    {
      id: 17,
      name: "Stainless Steel 420 Pipes",
      material: "Stainless Steel",
      grade: "420",
      shape: "",
      length: "",
    },
    {
      id: 18,
      name: "Aluminium F50 Rods",
      material: "Aluminium",
      grade: "F50",
      shape: "",
      length: "",
    },
    {
      id: 19,
      name: "Copper C360 Pipes",
      material: "Copper",
      grade: "C360",
      shape: "",
      length: "",
    },
    {
      id: 20,
      name: "Brass H75 Sheets",
      material: "Brass",
      grade: "H75",
      shape: "",
      length: "",
    },
  ],

  filter: {
    product: "",
    material: "",
  },
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action) => {
      const { id, shape, length } = action.payload;
      const product = state.products.find((product) => product.id === id);
      if (product) {
        product.shape = shape;
        product.length = length;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addProduct, updateProduct, setFilter } = productsSlice.actions;

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});

export default store;
