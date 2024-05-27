import {StyleSheet, View, Text, Pressable, Image} from "react-native";
import loguinho from './assets/loguinho.png';
import barra from './assets/Barrinha.png';

const TelaDeSenha = () => {
  	
  	return (
    		<View style={styles.telaDeSenha}>
      			<View style={styles.telaDeSenhaChild} />
      			<Text style={[styles.eMail, styles.cpfTypo]}>E- mail</Text>
      			<View style={styles.telaDeSenhaItem} />
      			<Text style={[styles.cpf, styles.cpfTypo]}>Cpf</Text>
      			<Text style={styles.completeOsDados}>Complete os dados para alterar senha</Text>
      			<View style={[styles.telaDeSenhaInner, styles.rectangleViewBorder]} />
      			<Text style={[styles.receberCdigo, styles.voltar1Typo]}>Receber código</Text>
      			<View style={[styles.rectangleView, styles.rectangleViewBorder]} />
      			<Pressable style={[styles.voltar, styles.voltarPosition]} onPress={()=>{}}>
        				<Text style={styles.voltar1Typo}>Voltar</Text>
      			</Pressable>
      			<View style={[styles.groupParent, styles.parentPosition]}>
        				<View style={[styles.efb84fcf30311e5668cb3abd3d27a9Parent, styles.parentPosition]}>
          					<Image style={[styles.efb84fcf30311e5668cb3abd3d27a9Parent, styles.parentPosition]} resizeMode="cover" source={loguinho} />
          					<Text style={styles.praiaSummer}>PRAIA SUMMER</Text>
        				</View>
        				<Image style={[styles.efb84fcf30311e5668cb3abd3d27a9Icon1, styles.parentPosition]} resizeMode="cover" source={barra} />
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	cpfTypo: {
    		height: 25,
    		width: 159,
    		fontFamily: "Lao Sans Pro",
    		fontSize: 12,
    		left: 49,
    		alignItems: "center",
    		display: "flex",
    		textAlign: "left",
    		color: "#000",
    		position: "absolute"
  	},
  	rectangleViewBorder: {
    		backgroundColor: "#e7f4f9",
    		borderRadius: 30,
    		top: 449,
    		height: 20,
    		borderWidth: 1,
    		borderColor: "rgba(0, 0, 0, 0.18)",
    		borderStyle: "solid",
    		position: "absolute"
  	},
  	voltar1Typo: {
    		fontFamily: "Inter-Regular",
    		fontSize: 10,
    		textAlign: "left",
    		color: "#000"
  	},
  	voltarPosition: {
    		top: 453,
    		position: "absolute"
  	},
  	parentPosition: {
    		height: 59,
    		top: 0,
    		position: "absolute"
  	},
  	telaDeSenhaChild: {
    		marginTop: -40,
    		height: 21,
    		width: 190,
    		borderWidth: 1,
    		borderColor: "rgba(0, 0, 0, 0.18)",
    		borderStyle: "solid",
    		backgroundColor: "#fff",
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
    		marginLeft: -50,
    		position: "absolute"
  	},
  	eMail: {
    		top: 280
  	},
  	telaDeSenhaItem: {
    		marginTop: -77,
    		height: 20,
    		width: 190,
    		borderWidth: 1,
    		borderColor: "rgba(0, 0, 0, 0.18)",
    		borderStyle: "solid",
    		backgroundColor: "#fff",
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
    		marginLeft: -50,
    		position: "absolute"
  	},
  	cpf: {
    		top: 243
  	},
  	completeOsDados: {
    		marginLeft: -70,
    		top: 150,
    		fontSize: 19,
    		fontFamily: "LeagueSpartan-Regular",
    		width: 165,
    		alignItems: "center",
    		display: "flex",
    		textAlign: "left",
    		color: "#000",
    		left: "50%",
    		position: "absolute"
  	},
  	telaDeSenhaInner: {
    		left: 116,
    		width: 97
  	},
  	receberCdigo: {
    		left: 135,
    		top: 453,
    		position: "absolute"
  	},
  	rectangleView: {
    		left: 236,
    		width: 52
  	},
  	voltar: {
    		left: 248
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
    		textAlign: "center",
    		width: 48,
    		height: 7,
    		position: "absolute"
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
  	telaDeSenha: {
    		backgroundColor: "#f6fcff",
    		flex: 1,
    		width: "100%",
    		height: 844,
    		overflow: "hidden"
  	}
});

export default TelaDeSenha;
