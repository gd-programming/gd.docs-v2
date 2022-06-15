# ReadFriendRequests

> This endpoint is used to read friend requests recieved from other players

## Parameters

| Parameter       | Explanation                                                | Optional |
| :-------------- | :--------------------------------------------------------- | -------- |
| `gameVersion`   | The Game Version the player is playing on                  | `True`   |
| `binaryVersion` | The current build the player playing on                    | `True`   |
| `gdw`           | If the player is using Geometry Dash World                 | `True`   |
| `accountID`     | The player's account ID                                    | `False`  |
| `gjp`           | The player's password encrypted with xor cipher and base64 | `False`  |
| `requestID`     | The ID for the friend request recieved                     | `False`  |
| `secret`        | The common secret: `Wmfd2893gb7`                           | `False`  |

## Response

**Successful Request**

```py
1
```

**Failed Request**

```py
-1
```