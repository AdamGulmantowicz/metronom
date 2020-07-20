function NavBar() {
  return `
<div class="hamburger">
  <nav class="nav js-nav">
    <ul class="nav__list js-nav__list">
      <li class="nav__item">
        <label>1, 3:</label>
        <input id="oddColor" type="text"/> 
      </li>
      <li class="nav__item">
        <label>2, 4:</label>
        <input id="evenColor" type="text"/> 
      </li>
  </nav>
  <div class="menu js-menu">
    <span class="menu__line"></span>
    <span class="menu__line"></span>
    <span class="menu__line"></span>
  </div>
</div>
`;
}

export default NavBar;
