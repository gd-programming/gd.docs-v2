# Register Account

> This endpoint is used to register an account

## Parameters

| Parameter | Explanation | Optional |
| --- | --- | --- |
| `userName` | The username of the account to create | `False` |
| `password` | The password of the account to create | `False` |
| `email` | The email of the account to create | `False` |
| `secret` | Wmfv3899gc9 | `False` |

## Response

**Successful Request**

```
1
```

**Failed Request**

| Error Code | Meaning |
| --- | --- |
| -2 | Already taken |
| -4 | Longer than 20 characters |
