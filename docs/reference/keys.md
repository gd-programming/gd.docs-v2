# Keys

> Geometry Dash uses [Xor Cipher](#) combined with [base64 encoding](#) to protect various strings within the client. Multiple Keys are used to protect different aspects of the game

## Xor Keys

|  Key  | Usage | Xor Type |
|:------|:------|:---------|
|   11  | Player Save Data | Static |
| 14251 | Player Messages | Cycled |
| 19283 | Vault Codes | Cycled |
| 19847 | Daily Challenges | Cycled |
| 26364 | Level Password | Cycled |
| 29481 | Comment Integrity | Cycled |
| 37526 | Account Password | Cycled |
| 39673 | Level Leaderboard Integrity | Cycled |
| 41274 | Level Integrity | Cycled |
| 48291 | Load Data | Cycled |
| 58281 | Rating Integry | Cycled |
| 59182 | Chest Rewards | Cycled |
| 85271 | Stat submission Integrity | Cycled |

## Xor Types

> <u>There are <b>two</b> ways Geometry Dash applies [Xor Cipher](#) to strings - <b>Static</b> and <b>Cycled</b></u>
> - Static Ciphers apply the key as is without any changes applying to the key itself.  
> - Cycled Ciphers iterate through each value on the key one by one and then loops back once it reaches the end.

## Xor Example

> <i>Below are Xor functions for both variations. They are written in javascript for the sake of simplicity</i>

<!-- tabs:start -->

### **Static**
```js
function Xor(key, string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        let input = string.charCodeAt(i);
        result += String.fromCharCode(input ^ key);
    }
    return result;
}
```

### **Cycle**
```js
function Xor(key, string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        let input = string.charCodeAt(i);
        let xKey = key.charCodeAt(i)
        result += String.fromCharCode(input ^ xKey);
    }
    return result;
}
```

<!-- tabs:end --> 
