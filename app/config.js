import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Ruta "/config" : pestana de configuracion (por ahora solo un aviso)
export default function Config() {
  return (
    <View style={styles.centro}>
      <Ionicons name="settings-outline" size={64} color="#E8590C" />
      <Text style={styles.texto}>Aqui ira la configuracion de la app</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  centro: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  texto: { marginTop: 12, fontSize: 16, color: '#555', textAlign: 'center' },
});
