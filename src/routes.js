import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./pages/aboutPage"),
  },
  {
    path: "/recipe/:recipeId",
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  {
    path: "/MyRecipes",
    name: "MyRecipes",
    component: () => import("./pages/MyRecipes"),
  },
  {
    path: "/favoriteRecipes",
    name: "favoriteRecipes",
    component: () => import("./pages/favoriteRecipes"),
  },
  {
    path: "/familyRecipes",
    name: "familyRecipes",
    component: () => import("./pages/familyPage"),
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
];

export default routes;
