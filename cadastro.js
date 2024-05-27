import * as React from "react";
import {StyleSheet, View, Text, Image, Pressable} from "react-native";
import barrinha from './assets/barrinhacadastro.png';
import logo from './assets/loguinhocadastro.png';

const TelaDeCadastro = () => {
  	
  	return (
    		<View style={styles.telaDeCadastro}>
      			<View style={styles.telaDeCadastroChild} />
      			<Text style={[styles.eMail, styles.senhaTypo]}>E- mail</Text>
      			<View style={[styles.telaDeCadastroItem, styles.telaChildShadowBox]} />
      			<Text style={[styles.nome, styles.nomeFlexBox]}>Nome</Text>
      			<View style={[styles.telaDeCadastroInner, styles.telaChildShadowBox]} />
      			<Text style={[styles.confirmarSenha, styles.senhaTypo]}>Confirmar senha</Text>
      			<View style={[styles.rectangleView, styles.telaChildShadowBox]} />
      			<Text style={[styles.senha, styles.senhaTypo]}>Senha</Text>
      			<View style={[styles.telaDeCadastroChild1, styles.telaChildShadowBox]} />
      			<Text style={[styles.dataNascimento, styles.nomeFlexBox]}>Data Nascimento</Text>
      			<View style={[styles.telaDeCadastroChild2, styles.telaChildShadowBox]} />
      			<Text style={[styles.cpf, styles.senhaTypo]}>Cpf</Text>
      			<Text style={[styles.completeOsDados, styles.nomeFlexBox]}>Complete os dados para criar a conta</Text>
      			<Text style={[styles.noSouUm, styles.noSouUmFlexBox]}>Não sou um robô</Text>
      			<View style={[styles.telaDeCadastroChild3, styles.telaChildLayout]} />
      			<Pressable style={[styles.entrar, styles.entrarPosition]} onPress={()=>{}}>
        				<Text style={[styles.entrar1, styles.nomeFlexBox1]}>Entrar</Text>
      			</Pressable>
      			<View style={[styles.telaDeCadastroChild4, styles.telaChildLayout]} />
      			<Pressable style={[styles.voltar, styles.entrarPosition]} onPress={()=>{}}>
        				<Text style={[styles.entrar1, styles.nomeFlexBox1]}>Voltar</Text>
      			</Pressable>
      			<View style={[styles.groupParent, styles.parentPosition]}>
        				<View style={[styles.efb84fcf30311e5668cb3abd3d27a9Parent, styles.parentPosition]}>
          					<Image style={[styles.efb84fcf30311e5668cb3abd3d27a9Parent, styles.parentPosition]} resizeMode="cover" source={logo} />
          					<Text style={[styles.praiaSummer, styles.noSouUmFlexBox]}>PRAIA SUMMER</Text>
        				</View>
        				<Image style={[styles.efb84fcf30311e5668cb3abd3d27a9Icon1, styles.parentPosition]} resizeMode="cover" source={barrinha} />
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	senhaTypo: {
    		height: 25,
    		alignItems: "center",
    		display: "flex",
    		textAlign: "left",
    		color: "#000",
    		fontFamily: "Lao Sans Pro",
    		fontSize: 12,
    		left: 42,
    		position: "absolute"
  	},
  	telaChildShadowBox: {
    		height: 20,
    		width: 190,
    		borderWidth: 1,
    		borderColor: "rgba(0, 0, 0, 0.18)",
    		borderStyle: "solid",
    		borderRadius: 20,
    		shadowOpacity: 1,
    		elevation: 4,
    		shadowRadius: 4,
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		shadowColor: "rgba(0, 0, 0, 0.25)",
    		left: "50%",
    		top: "50%",
    		marginLeft: -57,
    		position: "absolute"
  	},
  	nomeFlexBox: {
    		alignItems: "center",
    		display: "flex"
  	},
  	noSouUmFlexBox: {
    		textAlign: "center",
    		position: "absolute"
  	},
  	telaChildLayout: {
    		width: 52,
    		backgroundColor: "#e7f4f9",
    		borderRadius: 30,
    		top: 590,
    		height: 20,
    		borderWidth: 1,
    		borderColor: "rgba(0, 0, 0, 0.18)",
    		borderStyle: "solid",
    		position: "absolute"
  	},
  	entrarPosition: {
    		top: 594,
    		position: "absolute"
  	},
  	nomeFlexBox1: {
    		textAlign: "left",
    		color: "#000"
  	},
  	parentPosition: {
    		height: 59,
    		top: 0,
    		position: "absolute"
  	},
  	telaDeCadastroChild: {
    		marginTop: -30,
    		height: 21,
    		width: 190,
    		borderWidth: 1,
    		borderColor: "rgba(0, 0, 0, 0.18)",
    		borderStyle: "solid",
    		borderRadius: 20,
    		shadowOpacity: 1,
    		elevation: 4,
    		shadowRadius: 4,
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		shadowColor: "rgba(0, 0, 0, 0.25)",
    		top: "50%",
    		marginLeft: -57,
    		backgroundColor: "#fff",
    		left: "50%",
    		position: "absolute"
  	},
  	eMail: {
    		top: 182,
    		width: 159
  	},
  	telaDeCadastroItem: {
    		marginTop: -144,
    		backgroundColor: "#fdfdfd"
  	},
  	nome: {
    		top: 145,
    		height: 19,
    		width: 159,
    		textAlign: "left",
    		color: "#000",
    		fontFamily: "Lao Sans Pro",
    		display: "flex",
    		fontSize: 12,
    		position: "absolute",
    		left: 42
  	},
  	telaDeCadastroInner: {
    		marginTop: 57,
    		backgroundColor: "#fff",
    		height: 20
  	},
  	confirmarSenha: {
    		top: 345,
    		width: 12,
        
  	},
  	rectangleView: {
    		marginTop: 14,
    		backgroundColor: "#fff",
    		height: 20
  	},
  	senha: {
    		top: 300,
    		width: 159
  	},
  	telaDeCadastroChild1: {
    		marginTop: -105,
    		backgroundColor: "#fff",
    		height: 20
  	},
  	dataNascimento: {
    		top: 220,
    		left: 20,
    		width: 158,
    		height: 24,
    		textAlign: "left",
    		color: "#000",
    		fontFamily: "Lao Sans Pro",
    		display: "flex",
    		fontSize: 12,
    		position: "absolute"
  	},
  	telaDeCadastroChild2: {
    		marginTop: -67,
    		backgroundColor: "#fff",
    		height: 20
  	},
  	cpf: {
    		top: 258,
    		width: 159
  	},
  	completeOsDados: {
    		marginLeft: -140,
    		top: 90,
    		fontSize: 20,
    		fontFamily: "LeagueSpartan-Regular",
    		width: 317,
    		textAlign: "left",
    		color: "#000",
    		display: "flex",
    		left: "50%",
    		position: "absolute"
  	},
  	noSouUm: {
    		top: 525,
    		left: 86,
    		color: "#593d2c",
    		justifyContent: "center",
    		width: 219,
    		height: 36,
    		fontFamily: "Inter-Regular",
    		alignItems: "center",
    		display: "flex",
    		fontSize: 12,
    		textAlign: "center"
  	},
  	telaDeCadastroChild3: {
    		left: 113
  	},
  	entrar1: {
    		fontSize: 10,
    		fontFamily: "Inter-Regular"
  	},
  	entrar: {
    		left: 125
  	},
  	telaDeCadastroChild4: {
    		left: 233
  	},
  	voltar: {
    		left: 245
  	},
  	efb84fcf30311e5668cb3abd3d27a9Parent: {
    		width: 71,
    		left: 0,
    		height: 59,
    		top: 0
  	},
  	praiaSummer: {
    		top: 40,
    		left: 11,
    		fontSize: 5,
    		fontFamily: "ZenOldMincho-Regular",
    		color: "#fff",
    		width: 48,
    		height: 7
  	},
  	efb84fcf30311e5668cb3abd3d27a9Icon1: {
    		left: 68,
    		width: 322,
    		height: 59,
    		top: 0
  	},
  	groupParent: {
    		width: 390,
    		left: 0,
    		height: 59,
    		top: 0
  	},
  	telaDeCadastro: {
    		backgroundColor: "#f6fcff",
    		flex: 1,
    		width: "100%",
    		height: 844,
    		overflow: "hidden"
  	}
});

export default TelaDeCadastro;
