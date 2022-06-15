# Special Objects

<!-- tabs:start -->

### **37**
Object 37 is reserved for the `rod_ball_{num}_001.png` texture. There are 3 different textures that are used for this object, being randomly selected.

This object can not be placed within a level on its own however, objects `15, 16 and 17` are linked to this object.

**The properties this object has are**
```cpp
object->m_nObjectKey = 37;

object->setDefaultMainColorMode(kColourPlayer);
object->m_eType = kGameObjectTypeDecoration;
object->m_bAudioScale = true;
object->m_nDefaultZOrder = 10;
object->m_nDefaultZLayer = 3;
```

### **38**

Object 38 is reserved for the `portal_{num}_back_001.png`. This object is added into a level whenever a portal is added. The texture used depends on the portal that was added. The texture is then added to the back of a portal with a matching colour

**The properties this object has are**
```cpp
object->m_nObjectKey = 38;

object->m_eType = kGameObjectTypeDecoration;
```

<!-- tabs:end --> 