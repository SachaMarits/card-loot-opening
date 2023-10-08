# Card Loot Opening Documentation

---
## Loot Card

### Basic usage

### Usage

Basic usage:
```jsx
<LootCard
  img="https://assets.pokemon.com/assets/cms2/img/cards/web/SM3/SM3_EN_20.png"
  rarityPreset="legendary"
/>
```

You can use two preset effect: legendary or holographic.

Custom usage:

```jsx
<LootCard
  img={"https://assets.pokemon.com/assets/cms2/img/cards/web/SV3PT5/SV3PT5_EN_200.png"}
  shineOptions={{
    color1: "#6dd5ed",
    color2: "#2193b0",
  }}
  holographicOptions={{
    glow: true,
    color1: "#0077be",
    color2: "#0087b3",
    color3: "#0097a8",
    color4: "#00a799",
    color5: "#00b78e",
}}
  shadowOptions={{
    default: { color1: "#6dd5ed", color2: "#2193b0" },
    hover: { color1: "#6dd5ed", color2: "#2193b0" },
  }}
  size={{ height: 410, width: 300 }}
/>
```
Here you can define several customizable props.

### Props

| Prop                | Type   | Usage | Purpose                                        |
| ------------------- |:------:| --|-----------------------------------------------|
| img                 | string || Card's image url                |
| shineOptions        | Object |`{ color1: "string", color2: "string" }`| Create a gradient from those two colors when holographic colors are not set                          |
| holographicOptions  | Object |`{ glow: true, color1: "string", color2: "string", color3: "string", color4: "string", color5: "string" }`| Create a gradient and a better effect, set glow to true if you want to make it glow when hovering the card       |
| shadowOptions       | Object |`{ default: { color1: "string", color2: "string" }, hover: { color1: "string", color2: "string" } }`| Set the default shadow and the shadow when hovering the card |
| size                | Object |`{ height: 410, width: 300 }` | Set the card's size |


<a href="#loot-card">^</a>
