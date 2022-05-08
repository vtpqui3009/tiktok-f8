import React from "react";
// Layouts
import { HeaderOnly } from "~/components/Layout";

// Pages
const Home = React.lazy(() => import("~/pages/Home"));
const Following = React.lazy(() => import("~/pages/Following"));
const Profile = React.lazy(() => import("~/pages/Profile"));
const Upload = React.lazy(() => import("~/pages/Upload"));
const Search = React.lazy(() => import("~/pages/Search"));

// Public Routes
export const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/profile", component: Profile },
  { path: "/upload", component: Upload, layout: HeaderOnly },
  { path: "/search", component: Search, layout: null },
];
// Private Routes
export const privateRoutes = [];
