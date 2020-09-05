import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import Clipboard from '@react-native-community/clipboard';

// API cuttly:
//https://cutt.ly/api/api.php?key=[API_KEY]&short=[URL_YOU_WANT_SHORTEN]&name=[CUSTOM_URL_ALIAS]

export default function App() {
  // Store data from input
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [urlFinal, setUrlFinal] = useState('');

  // Function to validade url's
  const short = async () => {
    if (url.includes('https://') || url.includes('http://')) {
      await fetch(
        `https://cutt.ly/api/api.php?key=0c55fa2799c86078ae43de35bbe90c1adbca3&short=${url}&name=${name}`,
      ).then(async (response) => {
        const data = await response.json();
        if (data.url.status === 3) {
          alert('Esse nome já está sendo utilizado');
          return;
        }
        if (data.url.status === 2) {
          alert('A URL informada é inválida');
          return;
        }
        setUrlFinal(data.url.shortLink);
        Keyboard.dismiss;
      });
    }
  };

  function copyUrl() {
    Clipboard.setString(urlFinal);
    alert('URL copiada com sucesso!');
  }

  return (
    // Serves to allow the user to click outside the input and close the keyboard
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* App title starts here*/}
        <Text style={styles.title}>
          URL
          <Text style={{color: '#f10'}}>Short</Text>
        </Text>
        {/** App title ends here */}
        {/** Input box starts here*/}
        <TextInput
          style={styles.urlInput}
          onChangeText={(textInput) => setUrl(textInput)}
          value={url}
          placeholder="Informe a URL"
        />

        <TextInput
          style={styles.urlInput}
          onChangeText={(textInput) => setName(textInput)}
          value={name}
          placeholder="Informe o nome personalizado"
        />
        {/** Input box ends here */}
        {/** Button to shorten the url */}
        <TouchableOpacity onPress={() => short()} style={styles.shortBtn}>
          <Text style={styles.textBtn}>Encurtar</Text>
        </TouchableOpacity>

        <TouchableWithoutFeedback onPress={urlFinal ? copyUrl : () => {}}>
          <Text style={styles.finalUrl}>{urlFinal}</Text>
        </TouchableWithoutFeedback>

        <Text style={styles.footer}>
          Desenvolvido por:
          <Text style={{color: '#f10'}}> Lucas Fernando</Text>.
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

// App styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  urlInput: {
    height: 50,
    borderRadius: 15,
    borderWidth: 1,
    marginBottom: 15,
    borderColor: '#f10',
    color: '#000',
    width: '85%',
    padding: 10,
    backgroundColor: '#fafafa',
    fontSize: 18,
  },
  shortBtn: {
    width: '85%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    borderRadius: 15,
    padding: 20,
    backgroundColor: '#f10',
  },
  textBtn: {
    fontWeight: '600',
    fontSize: 18,
    color: '#fff',
  },
  finalUrl: {
    width: '85%',
    height: 30,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 15,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
  },
});
