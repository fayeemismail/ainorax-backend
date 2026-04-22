// schemaTypes/index.ts

// Singleton
import navbar from "./singleton/navbar";

// Home
import home from "./home/home";
import hero from "./home/hero";

// Shared
import navItem from "./shared/navItem";
import button from "./shared/button";
import services from "./home/services";
import serviceItem from "./shared/serviceItem";
import whyChooseItem from "./shared/whyChooseItem";
import whyChooseUs from "./home/whyChooseUs";
import aboutPreview from "./home/aboutPreview";
import blogPreview from "./home/blogPreview";
import blogCard from "./shared/blogCard";
import homeCTA from "./home/homeCTA";
import aboutPage from "./about/aboutPage";
import aboutHero from "./about/aboutHero";
import aboutStory from "./about/aboutStory";
import aboutValues from "./about/aboutValues";
import aboutProcess from "./about/aboutProcess";
import aboutStats from "./about/aboutStats";
import aboutClosing from "./about/aboutClosing";
import servicesPage from "./services/servicesPage";
import servicesHero from "./services/servicesHero";
import mainServices from "./services/mainServices";
import additionalCapabilities from "./services/additionalCapabilities";
import servicesComingSoon from "./services/servicesComingSoon";
import servicesCTA from "./services/servicesCTA";
import blogPage from "./blog/blogPage";
import blogHero from "./blog/blogHero";
import blogCategories from "./blog/blogCategories";
import featuredPostSection from "./blog/featuredPostSection";
import recentPostsSection from "./blog/recentPostsSection";
import posts from "./blog/posts";
import contactPage from "./contact/contactPage";
import contactHero from "./contact/contactHero";
import contactMain from "./contact/contactMain";
import contactLocation from "./contact/contactLocation";
import contactCTA from "./contact/contactCTA";
import loader from "./common/loader";
import background from "./common/background";
import footer from "./common/footer";
import clientCard from "./shared/clientCard";
import clientsSection from "./home/clientsSection";

export const schemaTypes = [
  navbar,
  home,
  aboutPage,
  servicesPage,
  blogPage,
  contactPage,

  //home page
  hero,
  services,
  whyChooseUs,
  aboutPreview,
  blogPreview,
  clientsSection,
  homeCTA,

  //about page
  aboutHero,
  aboutStory,
  aboutValues,
  aboutProcess,
  aboutStats,
  aboutClosing,

  //services page
  servicesHero,
  mainServices,
  additionalCapabilities,
  servicesComingSoon,
  servicesCTA,

  //blog page
  blogHero,
  blogCategories,
  featuredPostSection,
  recentPostsSection,

  //contact page
  contactHero,
  contactMain,
  contactLocation,
  contactCTA,

  //shared
  navItem,
  button,
  serviceItem,
  whyChooseItem,
  blogCard,
  clientCard,

  //common
  loader,
  background,
  footer,
];