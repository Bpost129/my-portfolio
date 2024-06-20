import { animate, scroll } from "motion"

document.querySelectorAll("section").forEach((section) => {
  const header = section.querySelector("h2");
  scroll(animate(header, { y: [-400, 400] }), {
    target: header
  });
});

const progress = document.querySelector(".progress")

scroll(animate(progress, { strokeDasharray: ["0,1", "1,1"] }))