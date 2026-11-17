import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Ruta "/mapa" : pestana del mapa (por ahora solo un aviso)
export default function Mapa() {
  return (
    <View style={styles.centro}>
      <Ionicons name="map-outline" size={64} color="#E8590C" />
      <Text style={styles.texto}>Aqui ira el mapa de restaurantes cercanos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  centro: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  texto: { marginTop: 12, fontSize: 16, color: '#555', textAlign: 'center' },
});
