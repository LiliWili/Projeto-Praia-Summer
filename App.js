import * as React from "react";
import {useNavigation} from '@react-navigation/native';
import {Text, StyleSheet, Pressable, View, Image} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaDeSenha from './senha.js';
import Cadastro from './cadastro.js';
import image4 from './assets/image4.png';
import image5 from './assets/image5.png';
import logo from './assets/logo.png';

const TelaInicial = () => {
  const navigation = useNavigation();
  	return (
      <View style={styles.telaInicial}>
        <Text style={[styles.cpf, styles.cpfTypo]}>CPF</Text>
        <Text style={[styles.senha, styles.cpfTypo]}>Senha</Text>
        <Pressable style={[styles.cadastreSe, styles.cadastreSePosition]} onPress={()=> navigation.navigate("cadastro")}>
          <Text style={[styles.cadastreSe1, styles.cadastreSe1Typo]}>Cadastre-se</Text>
        </Pressable>
        <Pressable style={[styles.cadastroParceiro, styles.cadastreSePosition]} onPress={()=>{}}>
          <Text style={[styles.cadastroParceiro1, styles.cadastreSe1Typo]}>Cadastro parceiro</Text>
        </Pressable>
        <Text style={[styles.loginCom, styles.loginComTypo]}>Login com</Text>
        <Pressable style={[styles.esqueciSenha, styles.loginComPosition]} onPress={() => navigation.navigate("senha")}>
          <Text style={[styles.esqueciSenha1, styles.loginComTypo]}>Esqueci senha</Text>
        </Pressable>
        <View style={[styles.telaInicialChild, styles.telaLayout]} />
        <View style={[styles.telaInicialItem, styles.telaLayout]} />
        <View style={[styles.telaInicialInner, styles.telaInicialInnerBorder]} />
        <View style={[styles.rectangleView, styles.image5IconPosition]} />
        <Image style={styles.image4Icon} resizeMode="cover" source={image4}/>
        <Image style={[styles.image5Icon, styles.image5IconPosition]} resizeMode="cover" source={image5} />
        <Pressable style={[styles.entrar, styles.entrarPosition]} onPress={()=>{}}>
          <Text style={[styles.entrar1, styles.entrarTypo]}>Entrar</Text>
        </Pressable>
        <Pressable style={[styles.rectanglePressable, styles.telaInicialInnerBorder]} onPress={()=>{}} />
        <Text style={[styles.entrarComoParceiro, styles.entrarTypo]}>Entrar como parceiro</Text>
        <View style={[styles.efb84fcf30311e5668cb3abd3d27a9Parent, styles.efb84fcf30311e5668cb3abd3d27a9Layout]}>
          <Image style={[styles.efb84fcf30311e5668cb3abd3d27a9Icon, styles.efb84fcf30311e5668cb3abd3d27a9Layout]} resizeMode="cover" source={logo} />
          <Text style={styles.praiaSummer}>{`PRAIA
            SUMMER`}</Text>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  	cpfTypo: {
    		height: 18,
    		textAlign: "left",
    		fontFamily: "Inter-Regular",
    		fontSize: 12,
    		left: 80,
    		color: "#fff",
    		position: "absolute"
  	},
  	cadastreSePosition: {
    		top: 491,
    		position: "absolute"
  	},
  	cadastreSe1Typo: {
    		color: "rgba(255, 255, 255, 0.9)",
    		height: 18,
    		textAlign: "left",
    		fontFamily: "Inter-Regular",
    		fontSize: 12
  	},
  	loginComTypo: {
    		height: 21,
    		textAlign: "left",
    		color: "#fff",
    		fontFamily: "Inter-Regular",
    		fontSize: 12
  	},
  	loginComPosition: {
    		top: 418,
    		position: "absolute"
  	},
  	telaLayout: {
    		height: 23,
    		width: 171,
    		borderWidth: 1,
    		borderColor: "rgba(0, 0, 0, 0.18)",
    		borderStyle: "solid",
    		backgroundColor: "#e7f4f9",
    		borderRadius: 30,
    		left: 128,
    		position: "absolute"
  	},
  	telaInicialInnerBorder: {
    		height: 24,
    		top: 379,
    		borderWidth: 1,
    		borderColor: "rgba(0, 0, 0, 0.18)",
    		borderStyle: "solid",
    		backgroundColor: "#e7f4f9",
    		borderRadius: 30,
    		position: "absolute"
  	},
  	image5IconPosition: {
    		top: 439,
    		position: "absolute"
  	},
  	entrarPosition: {
    		top: 384,
    		position: "absolute"
  	},
  	entrarTypo: {
    		height: 14,
    		color: "#101e40",
    		fontSize: 10,
    		textAlign: "left",
    		fontFamily: "Inter-Regular"
  	},
  	efb84fcf30311e5668cb3abd3d27a9Layout: {
    		height: 131,
    		width: 157,
    		position: "absolute"
  	},
  	cpf: {
    		top: 299,
    		width: 26
  	},
  	senha: {
    		width: 39,
    		top: 340
  	},
  	cadastreSe1: {
    		width: 78
  	},
  	cadastreSe: {
    		left: 93
  	},
  	cadastroParceiro1: {
    		width: 112
  	},
  	cadastroParceiro: {
    		left: 198
  	},
  	loginCom: {
    		width: 71,
    		left: 117,
    		top: 418,
    		position: "absolute"
  	},
  	esqueciSenha1: {
    		width: 91
  	},
  	esqueciSenha: {
    		left: 213
  	},
  	telaInicialChild: {
    		top: 301
  	},
  	telaInicialItem: {
    		top: 340
  	},
  	telaInicialInner: {
    		left: 108,
    		width: 57
  	},
  	rectangleView: {
    		left: 165,
    		shadowColor: "rgba(0, 0, 0, 0.25)",
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		shadowRadius: 4,
    		elevation: 4,
    		shadowOpacity: 1,
    		borderRadius: 100,
    		backgroundColor: "#fdfdfd",
    		width: 33,
    		height: 36
  	},
  	image4Icon: {
    		top: 444,
    		left: 170,
    		width: 23,
    		height: 26,
    		position: "absolute"
  	},
  	image5Icon: {
    		left: 208,
    		width: 35,
    		height: 37
  	},
  	entrar1: {
    		width: 31
  	},
  	entrar: {
    		left: 122
  	},
  	rectanglePressable: {
    		left: 171,
    		width: 132
  	},
  	entrarComoParceiro: {
    		left: 184,
    		width: 108,
    		top: 384,
    		position: "absolute"
  	},
  	efb84fcf30311e5668cb3abd3d27a9Icon: {
    		top: 2,
    		left: 0
  	},
  	praiaSummer: {
    		top: 81,
    		left: 28,
    		fontSize: 16,
    		fontFamily: "ZenOldMincho-Regular",
    		textAlign: "center",
    		width: 103,
    		height: 50,
    		color: "#fff",
  	},
  	efb84fcf30311e5668cb3abd3d27a9Parent: {
    		top: 110,
    		left: 117
  	},
  	telaInicial: {
    		backgroundColor: "#0c3958",
    		flex: 1,
    		width: "100%",
    		height: 844,
    		overflow: "hidden"
  	}
});

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={TelaInicial} />
      <Stack.Screen name="senha" component={TelaDeSenha} />
      <Stack.Screen name="cadastro" component ={Cadastro} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;