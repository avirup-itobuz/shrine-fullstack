import { getData, createElement } from "../helper/helper.js";
import { accoridonFaq } from "../helper/constants.js";
const accordionFAQs = await getData(accoridonFaq);

function generateAccordionItem(index, title, subtitle) {
  return `<div class="accordion-item my-4">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed fw-semibold fs-5" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
                           <div class="d-flex gap-2"><span class="index inline-block border rounded d-flex justify-content-center align-items-center">${index+1}</span><span>${title}</span></div>
                        </button>
                    </h2>
                    <div id="flush-collapse${index}" class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body"><p>${subtitle}</p>
                        </div>
                    </div>
                </div>`;
}
const question1 = document.getElementById("questions-1");
const question2 = document.getElementById("questions-2");
let length = accordionFAQs.length;
let leftStart = 0,
  leftEnd,
  rightStart,
  rightEnd = length - 1;
if (length % 2 == 0) {
  leftEnd = Math.trunc(length / 2) - 1;
  rightStart = Math.trunc(length / 2);
} else {
  leftEnd = Math.trunc(length / 2);
  rightStart = Math.trunc(length / 2) + 1;
}
console.log(leftStart, leftEnd, rightStart, rightEnd);

for (let i = leftStart; i <= leftEnd; i++) {
  const accordionItem = generateAccordionItem(
    i,
    accordionFAQs[i].title,
    accordionFAQs[i].subtitle
  );
  question1.insertAdjacentHTML("beforeend", accordionItem);
}
for (let i = rightStart; i <= rightEnd; i++) {
  const accordionItem = generateAccordionItem(
    i,
    accordionFAQs[i].title,
    accordionFAQs[i].subtitle
  );
  question2.insertAdjacentHTML("beforeend", accordionItem);
}
