# Account Error

> AccountError is an enum used to handle errors generated within the account creation system

```cpp
enum AccountError
{
    kAccountErrorUnknown = 0,
    kAccountErrorGeneric = -1,
    kAccountErrorTakenUsername = -2,
    kAccountErrorTakenEmail = -3,
    kAccountErrorInvalidUsername = -4,
    kAccountErrorInvalidPassword = -5,
    kAccountErrorInvalidEmail = -6,
    kAccountErrorPasswordsDontMatch = -7,
    kAccountErrorPasswordTooShort = -8,
    kAccountErrorUsernameTooShort = -9,
    kAccountErrorLinkedToDifferentAccount = -10,
    kAccountErrorAccountDisabled = -12,
    kAccountErrorLinkedToDifferentSteamAccount = -13,
    kAccountErrorEmailsDontMatch = -99
};
```