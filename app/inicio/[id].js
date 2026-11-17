import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Estrellas from '../../src/components/Estrellas';
import { restaurantes } from '../../src/data';

// Ruta dinamica "/inicio/[id]" : detalle de UN restaurante
// Los corchetes en el nombre del archivo significan que "id" cambia (1, 2, 3...)
export default function DetalleRestaurante() {
  // Leemos el id que viene en la ruta, por ejemplo /inicio/2 -> id = "2"
  const { id } = useLocalSearchParams();
  const rest = restaurantes.find((r) => r.id === id);

  if (!rest) {
    return <Text style={{ padding: 20 }}>Restaurante no encontrado</Text>;
  }

  return (
    <ScrollView style={styles.pantalla} contentContainerStyle={{ padding: 16 }}>
      <View style={styles.tarjeta}>
        {/* Parte de arriba: logo a la izquierda, datos a la derecha */}
        <View style={styles.fila}>
          <View style={styles.izquierda}>
            <View style={[styles.logo, { backgroundColor: rest.color }]}>
              <Text style={{ fontSize: 40 }}>{rest.emoji}</Text>
            </View>
            <Text style={styles.precio}>{'$'.repeat(rest.precio)}</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.nombre}>{rest.nombre}</Text>
            <View style={styles.filaDatos}>
              <Text style={styles.chico}>{rest.distancia} mts  </Text>
              <Estrellas calificacion={rest.calificacion} tamano={16} />
            </View>
            <Text style={styles.chico}>Comida {rest.categoria}</Text>
          </View>
        </View>

        {/* Descripcion abajo */}
        <Text style={styles.subtitulo}>Descripcion</Text>
        <Text style={styles.descripcion}>{rest.descripcion}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: '#F8F9FA' },
  tarjeta: { backgroundColor: '#fff', borderRadius: 12, padding: 16, borderWidth: 1, borderColor: '#ddd' },
  fila: { flexDirection: 'row', alignItems: 'center' },
  izquierda: { alignItems: 'center', marginRight: 16 },
  logo: { width: 90, height: 90, borderRadius: 45, justifyContent: 'center', alignItems: 'center' },
  precio: { marginTop: 6, fontWeight: 'bold' },
  nombre: { fontSize: 20, fontWeight: 'bold', marginBottom: 6 },
  filaDatos: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 },
  chico: { color: '#555' },
  subtitulo: { fontSize: 16, fontWeight: 'bold', marginTop: 20, marginBottom: 6 },
  descripcion: { lineHeight: 22, color: '#333' },
});
