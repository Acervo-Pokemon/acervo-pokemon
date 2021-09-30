## Prototype
https://www.figma.com/file/rT5CEumbSMVUbu2CJnFKG0/Untitled?node-id=1%3A3

---

## Para navegação em pilha (projeto expo)

```
yarn add @react-navigation/native @react-navigation/native-stack && \
expo install react-native-screens react-native-safe-area-context
```

### App.js

```
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Page1 from './src/pages/Page1/Page1'
import Page2 from './src/pages/Page2/Page2'

const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Page1'>
        <Stack.Screen name='Page1' component={Page1} />
        <Stack.Screen name='Page2' component={Page2} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
```

## Page1.js, Page2.js, ...

```
import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { View } from 'react-native'

export default function Page2() {
    
    const navigation = useNavigation()

    return(
        <View>

        </View>
    )
}
```

---

## Axios

```
yarn add axios
```

## Icons

```
yarn add react-native-vector-icons
```

## ScreenOrientation

Fonte: [https://docs.expo.dev/versions/latest/sdk/screen-orientation/](https://docs.expo.dev/versions/latest/sdk/screen-orientation/)

```
expo install expo-screen-orientation
```

Para iniciar na orientação PORTRAIT, incluir ```"orientation": "portrait"``` em app.json

```
{
  "expo": {
    "name": "acervo-pokemon",
    "slug": "acervo-pokemon",
    "version": "1.0.0",
    "assetBundlePatterns": [
      "**/*"
    ],
    "orientation": "portrait"
  },
  "name": "acervo-pokemon"
}

```

Para bloquear a orientação em PORTRAIT, em App.js incluir


```
import * as ScreenOrientation from 'expo-screen-orientation'

export default function App() {
  
  useEffect(() => {
    async function changeScreenOrientation() {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
    changeScreenOrientation()
  })
}
```


