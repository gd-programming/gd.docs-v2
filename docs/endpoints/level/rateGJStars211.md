# rateGJStars211

> Sends a star suggestion for a level

## Parameters

| Parameter         | Description                                                                                                   | Required                              |
| ----------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| `secret`          | [Common secret](/reference/secrets.md) `Wmfd2893gb7`                                                          | Yes                                   |
| `stars`           | The amount of stars being suggested                                                                           | Yes                                   |
| `levelID`         | The ID of a level to rate                                                                                     | Yes                                   |
| `gameVersion`     | [Game Version](#), 21 on 2.1                                                                                  |                                       |
| `binaryVersion`   | [Binary Version](#), 35 on 2.113                                                                              |                                       |
| `gdw`             | Whether the request is for GD World, either 0 or 1                                                            |                                       |
| `accountID`       | The rating person's account ID                                                                                |                                       |
| `gjp`             | The rating person's [GJP](/topics/Algorithms/robtop-cipher.md)                                                |                                       |
| `udid`            | The rating person's UDID                                                                                      |                                       |
| `uuid`            | The rating person's UUID                                                                                      |                                       |
| `chk`             | Unsure                                                                                                        |                                       |

## Response
A successful request always returns `1`, regardless of whether the level was rated or not.

If the request is not successful, it will return `-1`.

## Example

```js
// pseudo code
request({
  type: "POST",
  url: "http://www.boomlings.com/database/rateGJStars211.php",
  data: {
    levelID: 81304994,
    stars: 3,
    secret: "Wmfd2893gb7"
  },
});
```

### Output

```
1
```
