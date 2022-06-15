# XOR

> XOR is a bitwise operation used by Geometry Dash to encrypt data. It is commonly denoted as a `^` in many programming languages

- <b>Geometry Dash has 2 methods to encrypting data using XOR</b>
  - Using a singular key
  - Cycling through a 5 digit key

When needed, Geometry Dash iterates through every byte of the data and applies the XOR operation using its key

## Examples

<b>Below are pseudocode examples of the algorithms used</b>

<!-- tabs:start -->

### **Singular**

```js
result = "";
for (i = 0; i < input.length; i++) {
  char = input[i].toByte();
  result += (char ^ key).toChar();
}
```

### **Cycle**

```js
result = "";
for (i = 0; i < input.length; i++) {
  char = input[i].toByte();
  xKey = i % key.length;
  result += (char ^ xKey).toChar();
}
```

<!-- tabs:end -->

### Keys

| Key     | Usage                       | XOR Type |
| :------ | :-------------------------- | :------- |
| `11`    | Player Save Data            | Singlar  |
| `14251` | Player Messages             | Cycled   |
| `19283` | Vault Codes                 | Cycled   |
| `19847` | Daily Challenges            | Cycled   |
| `26364` | Level Password              | Cycled   |
| `29481` | Comment Integrity           | Cycled   |
| `37526` | Account Password            | Cycled   |
| `39673` | Level Leaderboard Integrity | Cycled   |
| `41274` | Level Integrity             | Cycled   |
| `48291` | Load Data                   | Cycled   |
| `58281` | Rating Integry              | Cycled   |
| `59182` | Chest Rewards               | Cycled   |
| `85271` | Stat submission Integrity   | Cycled   |
