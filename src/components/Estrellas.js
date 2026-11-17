import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Componente reutilizable: muestra la calificacion en un cuadrito + 5 estrellas
// Se usa en la lista de Inicio y en el Detalle del restaurante
export default function Estrellas({ calificacion, tamano = 14 }) {
  const estrellas = [1, 2, 3, 4, 5].map((n) => {
    // Estrella llena, media o vacia segun la calificacion
    let icono = 'star-outline';
    if (calificacion >= n) icono = 'star';
    else if (calificacion >= n - 0.5) icono = 'star-half';
    return <Ionicons key={n} name={icono} size={tamano} color="#F59F00" />;
  });

  return (
    <View style={styles.fila}>
      <Text style={styles.numero}>{calificacion.toFixed(1)}</Text>
      {estrellas}
    </View>
  );
}

const styles = StyleSheet.create({
  fila: { flexDirection: 'row', alignItems: 'center' },
  numero: {
    borderWidth: 1,
    borderColor: '#333',
    paddingHorizontal: 4,
    marginRight: 6,
    fontSize: 12,
    fontWeight: 'bold',
  },
});
