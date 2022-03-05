# Tags

> Various text interfaces within the Geometry Dash client can be manipulated using special tags similar to markup languages such as `HTML.` Geometry Dash has 3 primary types of tags

- Colour Tags
- Instant Tags
- Delay Tags

## Colour Tags

<link rel="stylesheet" href="imageStyles.css">
<img src="assets/screenshots/colour_tags.png" class="alertlayer">

> Colour Tags are used to style areas of text with colour. They contain both a start and an end tag - the start tag defining which colour should be rendered on screen and the end tag denoting when to stop reading. 

<b>Usage:</b> `<cl>Coloured Text!</c>`

<link rel="stylesheet" href="colour_tags.css">

| Tag       | Colour Code | Example (Website Only)                                 |
| :-------- | :---------- | :----------------------------------------------------- |
| `<cb>`    | `0x4A52E1`  | <cb>Sample</cb>                                        |
| `<cg>`    | `0x40E348`  | <cg>Sample</cg>                                        |
| `<cl>`    | `0x60ABEF`  | <cl>Sample</cg>                                        |
| `<cj>`    | `0x32C8FF`  | <cj>Sample</cj>                                        |
| `<cy>`    | `0xFFFF00`  | <cy>Sample</cy>                                        |
| `<co>`    | `0xFF5A4B`  | <co>Sample</co>                                        |
| `<cr>`    | `0xFF5A5A`  | <cr>Sample</cr>                                        |
| `<cp>`    | `0xFF00FF`  | <cp>Sample</cp>                                        |
| `Default` | `0xFF0000`  | <ccDefault>Sample</ccDefault> <!-- Ha Ha funny joke--> |

## Instant Tags

> Instant Tags are used to render text on screen immediately without any delay. Similarly to colour tags, Instant tags have a start and end tag to denote which piece of text should appear instantly.

<b>Usage:</b> `<i>WHAT???!</i>`

## Delay Tags

> Delay tags are used to create a delay before a specific string in dialog boxes. The game detects a Delay Tag if the string contains a `<d` and then it reads the next 3 characters and converts them into an integer. This value is then passed into the [CCDelayTime](https://docs.cocos2d-x.org/api-ref/cplusplus/V2.2/d6/dde/classcocos2d_1_1_c_c_delay_time.html) class from the [cocos2d-x](/) engine which Geometry Dash uses.

<b>Usage:</b> `<d010>.<d010>.<d030>.`

<h2>Notes</h2>

- Failing to add an end tag for Colour tags and Instant tags will result in the game crashing

- Only Colour tags are usable without modifying the client - via level descriptions and comment bans

- The tags are defined within the `MultilineBitmapFont` class and are sometimes disabled within the create method using a bool