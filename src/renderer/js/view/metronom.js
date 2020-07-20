import icons from "../../img/symbol-defs.svg";

function Metronom() {
  return `
    <div class="metronom" data-bind="click: togglePause">
      <div class="metronom__item" data-bind="css: { active: tempoPart() === 0 }">1</div>
      <div class="metronom__item" data-bind="css: { active: tempoPart() === 2 }">2</div>
      <div class="metronom__item" data-bind="css: { active: tempoPart() === 4 }">3</div>
      <div class="metronom__item" data-bind="css: { active: tempoPart() === 6 }">4</div>
      <div class="metronom__dot" data-bind="css: { active: tempoPart() % 2 && tempoPart() > -1 }">
        <!-- ko if: isPaused -->
          <svg>
            <use href="${icons + "#icon-play3"}" />
          </svg>
        <!-- /ko -->
        <!-- ko ifnot: isPaused -->
          <svg>
            <use href="${icons + "#icon-stop2"}" />
          </svg>
        <!-- /ko -->
      </div>
    </div>  
  `;
}

export default Metronom;
