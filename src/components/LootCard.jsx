import React, { useMemo, useState } from "react";
import $ from "jquery";
import { useEffect } from "react";

export default function LootCard({ title, rarity = "common", landscape = false, img }) {
  const rareCards = useMemo(() => ["legendary", "holographic"], []);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    var x;
    var $cards = $(".card-holo");
    var $style = $(".hover");
    var backgroundImage = `background-image: url(${img})`;

    $cards
      .on("mousemove touchmove", function (e) {
        // normalise touch/mouse
        var pos = [e.offsetX, e.offsetY];
        e.preventDefault();
        if (e.type === "touchmove")
          pos = [e.touches[0].clientX, e.touches[0].clientY];

        var $card = $(this);

        // math for mouse position
        var l = pos[0];
        var t = pos[1];
        var h = $card.height();
        var w = $card.width();
        var px = Math.abs(Math.floor((100 / w) * l) - 100);
        var py = Math.abs(Math.floor((100 / h) * t) - 100);
        var pa = 50 - px + (50 - py);

        // math for gradient / background positions
        var lp = 50 + (px - 50) / 1.5;
        var tp = 50 + (py - 50) / 1.5;
        var px_spark = 50 + (px - 50) / 7;
        var py_spark = 50 + (py - 50) / 7;
        var p_opc = 20 + Math.abs(pa) * 1.5;
        var ty = ((tp - 50) / 2) * -1;
        var tx = ((lp - 50) / 1.5) * 0.5;

        // css to apply for active card
        var grad_pos = `background-position: ${lp}% ${tp}%;`;
        var sprk_pos = `background-position: ${px_spark}% ${py_spark}%;`;
        var opc = `opacity: ${p_opc / 100};`;
        var tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg) rotateZ(${
          landscape ? "90" : "0"
        }); ${backgroundImage}`;

        // need to use a <style> tag for pseudo elements
        var style = "";
        if (rareCards.some((c) => rarity.includes(c))) {
          style = `
            .card-holo:hover:before { ${grad_pos} }  /* gradient */
            .card-holo:hover:after { ${sprk_pos} ${opc} }   /* sparkles */ 
          `;
        }

        // set / apply css class and style
        $cards.removeClass("active");
        $card.removeClass("animated");
        $card.attr("style", tf);
        $style.html(style);
        if (e.type === "touchmove") {
          return false;
        }
        clearTimeout(x);
      })
      .on("mouseout touchend touchcancel", function () {
        // remove css, apply custom animation on end
        var $card = $(this);
        $style.html("");
        $card.removeAttr("style");
        $card.attr("style", backgroundImage);
        x = setTimeout(function () {
          $card.addClass("animated");
        }, 2500);
      });
    setIsLoaded(true);
  }, [rareCards, rarity, img]);

  useEffect(() => {
    let audio;
    let timer;
    if (rarity.includes("legendary")) {
      audio = new Audio("/legendary.mp3");
      const opening = document.getElementById("opening");
      timer = setTimeout(() => opening.classList.add("pyro"), 1000);
      timer = setTimeout(() => opening.classList.remove("pyro"), 5000);
    }
    if (rarity.includes("holographic")) audio = new Audio("/holo.mp3");
    if (audio) audio.play();
    return () => {
      clearTimeout(timer);
      const opening = document.getElementById("opening");
      if (opening) opening.classList.remove("pyro");
    };
    // eslint-disable-next-line
  }, [img]);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <section className="cards">
      <div
        alt={title}
        className={`${
          rareCards.some((c) => rarity.includes(c)) ? "" : "normal"
        } ${rarity} card-holo mt-3`}
        style={{ backgroundImage: `url(${img})` }}
      />
      <style className="hover"></style>
    </section>
  );
}
