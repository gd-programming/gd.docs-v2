# The RobTop Cipher
The RobTop Cipher refers to the combination of Base64 (url-safe) + XOR used frequently within Geometry Dash as a form of encryption.
It is used within places such as passwords (GJP) or save data on Windows.
The cipher may utilise either the cycled or static variant of the XOR cipher depending on where the ciphertext originates from (such as save data or the
encoded password). To find out which variant is used, you may consult the [key reference material](/docs/reference/keys.md#xor-keys).

## Encryption and Decryption
### Encryption
To encrypt something using the RobTop Cipher, you do the following:

```js
plaintext = "some text"

// Cyclic XOR RobTop Cipher
cyclic_key = "..." // The XOR Key from the key reference material

cxor_text = cyclic_xor(plaintext, cyclic_key)
cresult = base64_urlsafe_encode(cxor_text) // Our result

// Static XOR RobTop Cipher
static_key = 0xFF // The XOR Key from the key reference material

sxor_text = static_xor(plaintext, static_key)
sresult = base64_urlsafe_encode(sxor_text) // Our result.
```

### Decryption
To decrypt something using the RobTop cipher, you do the following:

```js
ciphertext = "..."

// Cyclic XOR RobTop Cipher
cyclic_key = "..." // The XOR Key from the key reference material

cxor_text = base64_urlsafe_decode(ciphertext)
cresult = cyclic_xor(cxor_text, cyclic_key) // Our result.

// Static XOR RobTop Cipher
static_key = 0xFF // The XOR Key from the key reference material

sxor_text = base64_urlsafe_decode(ciphertext)
sresult = static_xor(sxor_text, static_key) // Our result.
```

## Types of XOR Used
### Static XOR
Within the static XOR RobTop Cipher, the key should be treated as a byte. Then, all bytes of the string must be iterated over, XORing each unicode code of a
character by the static key to form a new string.

By the very nature of the XOR cipher, decoding involves the same process as encoding.

### Cyclic XOR
Within the cyclic XOR RobTop Cipher (the most common variant), the key should be treated as a string or a sequence of UTF-8 character codes.
The differentiating factor between cyclic and static XOR is that cyclic XOR uses a key longer than one byte. This means that the key has to be
repeatedly looped over during the string iteration.

Please refer to the [XOR](/docs/topics/Algorithms/Xor.md) section for details on the implementation
