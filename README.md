# Card Loot Opening
React Package to enchance your looting cards with stunning holographic effects !

[![Card Loot Opening Demo](demo.gif)](https://github.com/SachaMarits/card-loot-opening)

## Table of contents

- [Getting started](#getting-started)
- [Dependencies](#dependencies)
- [Documentation](#documentation)
<!-- - [Live Demo]({#live-demo}) -->

## Getting Started

### Adding Package

Install Card Loot Opening from NPM:

```
npm i card-loot-opening
```

### Importing Components

Import required LootCard component within your files:

```jsx
import { LootCard } from 'card-loot-opening';
```

Now you are ready to use the imported LootCard component ! 🔥

---

## Dependencies

### Required Peer Dependencies

Only React is needed to run Card Loot Opening:

  * [**React**](https://www.npmjs.com/package/react)

---

### Customizable effects

Many customizable effects:
* Shine color
* Holographic color
* Shadow color
* Animation on mouse out
* Two preset effects
* Size

---

## [Documentation](https://sachamarits.github.io/card-loot-opening)

### Basic usage

```jsx
<LootCard
  img="https://assets.pokemon.com/assets/cms2/img/cards/web/SM3/SM3_EN_20.png"
  rarityPreset="legendary"
/>
```

You can use two preset effect: legendary or holographic.

### Custom usage

```jsx
<LootCard
  img={"https://assets.pokemon.com/assets/cms2/img/cards/web/SV3PT5/SV3PT5_EN_200.png"}
  shineOptions={{
    color1: "#6dd5ed",
    color2: "#2193b0"
  }}
  holographicOptions={{
    glow: true,
    color1: "#0077be",
    color2: "#0087b3",
    color3: "#0097a8",
    color4: "#00a799",
    color5: "#00b78e"
  }}
  shadowOptions={{
    default: { color1: "#6dd5ed", color2: "#2193b0" },
    hover: { color1: "#6dd5ed", color2: "#2193b0" }
  }}
  size={{ height: 410, width: 300 }}
/>
```
Here you can define several customizable props.

### Props

| Prop                | Type   | Usage | Purpose                                        |
| ------------------- |:------:| --|-----------------------------------------------|
| img                 | string | Url| Card's image url                |
| shineOptions        | Object |`{ color1, color2 }`| Create a gradient from those two colors when holographic colors are not set                          |
| holographicOptions  | Object |`{ glow, color1, color2, color3, color4, color5 }`| Create a gradient and a better effect, set glow to true if you want to make it glow when hovering the card       |
| shadowOptions       | Object |`{ default: { color1, color2 }, hover: { color1, color2 } }`| Set the default shadow and the shadow when hovering the card |
| size                | Object |`{ height, width }` | Set the card's size |
| rarityPreset        | string | "legendary" or "holographic" | Use preset effect |
<!-- 
---

## [Live Demo](https://well-rounded-react-template.sachamarits.be/)

Live demo: https://well-rounded-react-template.sachamarits.be/ <br/>
Most components can be seen within: `Template > Components` and `Template > Crud Table`. -->
