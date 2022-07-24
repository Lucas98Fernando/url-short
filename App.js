import React, {useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
  Alert,
} from 'react-native';
import Clipboard from '@react-native-community/clipboard';

// API cuttly:
//https://cutt.ly/api/api.php?key=[API_KEY]&short=[URL_YOU_WANT_SHORTEN]&name=[CUSTOM_URL_ALIAS]

export default function App() {
  // Store data from input
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [urlFinal, setUrlFinal] = useState('');

  // Function to validade url's
  const short = async () => {
    if (url.includes('https://') || url.includes('http://')) {
      setLoading(true);
      await fetch(
        `https://cutt.ly/api/api.php?key=0c55fa2799c86078ae43de35bbe90c1adbca3&short=${url}&name=${name}`,
      )
        .then(async (response) => {
          const data = await response.json();
          if (data.url.status === 3) {
            Alert.alert(
              'Atenção',
              'Esse nome personalizado já está sendo utilizado!',
            );
            return;
          }
          if (data.url.status === 2) {
            Alert.alert('Atenção', 'A URL informada é inválida');
            return;
          }
          setUrlFinal(data.url.shortLink);
          Keyboard.dismiss;
        })
        .finally(() => setLoading(false));
    }
  };

  /* Function to copy the shortened URL */
  function copyUrl() {
    Clipboard.setString(urlFinal);
    Alert.alert(
      'Atenção !',
      'URL copiada para a área de transferência.',
      [
        {
          text: 'Fechar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  }

  return (
    // Serves to allow the user to click outside the input and close the keyboard
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require('./src/assets/bg_white.jpg')}
          style={styles.bgImage}>
          <Text style={styles.title}>
            URL
            <Text style={styles.textRed}>Short</Text>
          </Text>

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

          <TouchableOpacity onPress={() => short()} style={styles.shortBtn}>
            {loading && (
              <ActivityIndicator
                style={styles.loading}
                color="#fff"
                size="small"
              />
            )}
            <Text style={styles.textBtn}>
              {loading ? 'Gerando URL' : 'Encurtar'}
            </Text>
          </TouchableOpacity>

          <TouchableWithoutFeedback onPress={urlFinal ? copyUrl : () => {}}>
            <Text style={styles.finalUrl}>{urlFinal}</Text>
          </TouchableWithoutFeedback>

          <Text style={styles.textFooter}>
            Desenvolvido por:
            <Text style={styles.secondTextFooter}> Lucas Fernando</Text>.
          </Text>
        </ImageBackground>
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
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  urlInput: {
    height: 50,
    borderRadius: 15,
    borderWidth: 2,
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
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderRadius: 15,
    padding: 20,
    backgroundColor: '#f10',
  },
  textBtn: {
    fontWeight: '700',
    fontSize: 18,
    color: '#fff',
    marginLeft: 10,
  },
  textRed: {
    color: '#f10',
  },
  finalUrl: {
    width: '85%',
    height: 30,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 15,
  },
  textFooter: {
    position: 'absolute',
    fontWeight: '500',
    bottom: 20,
  },
  bgImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.9,
  },
  secondTextFooter: {
    color: '#f10',
    fontWeight: '600',
  },
  loading: {
    marginTop: 12,
  },
});
