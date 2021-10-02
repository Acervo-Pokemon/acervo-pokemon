<img src="https://avatars.githubusercontent.com/u/91509293?s=200&v=4"/></a>

## Api que serã consumida

![image](https://user-images.githubusercontent.com/55209015/135701041-2842f3a3-74f3-45c8-8119-66e4b503d348.png)

Listagem https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0

Buscar Pokemon: https://pokeapi.co/api/v2/pokemon/7

Documentação: https://pokeapi.co/docs/v2

## Telas

```
->Tela de Busca,
Botão para busca do nome do pokémon
Botão listar favoritos.
->Tela de Detalhe, detalhes do pokémon (permitir favoritar o mesmo)
Deverá conter: (nome, altura, peso, habilidades, tipos, foto e estatísticas)
Vejam as seguintes propriedades:
name
height
weight
[Abilities] -> listar ability (name)
[Types] -> listar type (name)
[Sprites] //IMAGEM EM SVG
 "other": {
 "dream_world": {
 "front_default":
[Stats] -> listar stat (name e base_stat)
Obs. listar somente: hp,attack,defense e speed
->Tela de Favoritos
Mostrar lista de pokémons favoritos (Usar useEffects)
nome e foto pokémon
```
## Prototype
```
https://www.figma.com/file/rT5CEumbSMVUbu2CJnFKG0/Untitled?node-id=1%3A3
```
## Estrutura

![image](https://user-images.githubusercontent.com/55209015/135701330-e15461bb-32d4-47ab-8da9-8a8f0e886584.png)

![image](https://user-images.githubusercontent.com/55209015/135701341-662a05c9-4509-4912-9121-70ae8ca32f83.png)


## Branch
![image](https://user-images.githubusercontent.com/55209015/135701265-5db55c4e-a0c7-411a-b744-4cb3b603988b.png)

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


