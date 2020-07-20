import $ from "jquery";
import ko from "knockout";
import App from "./js/view/app";
import Metronom from "./js/model/metronom";
import "@claviska/jquery-minicolors/jquery.minicolors";
import "./css/lib/jquery.minicolors.css";
import "./sass/main.scss";

$("#app").append(App());

$(".js-menu").on("click", () => {
  $(".js-menu").toggleClass("active");
  $(".js-nav").toggleClass("open");
  $(".js-nav__list").toggleClass("show");
});

$("#oddColor").minicolors({
  change: (val) => {
    $("html").css("--oddColor", val);
  },
});

$("#evenColor").minicolors({
  change: (val) => {
    $("html").css("--evenColor", val);
  },
});

ko.applyBindings(new Metronom());
