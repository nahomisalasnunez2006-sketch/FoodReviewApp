import { useState } from 'react';
import { View, Text, TextInput, FlatList, Pressable, ScrollView, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Estrellas from '../../src/components/Estrellas';
import { restaurantes, categorias } from '../../src/data';

// Ruta "/inicio" : buscador, filtro de categorias y lista de restaurantes
export default function Inicio() {
  // Lo que escribe el usuario en el buscador
  const [busqueda, setBusqueda] = useState('');
  // Categoria seleccionada en los filtros
  const [categoria, setCategoria] = useState('Todas');

  // Solo mostramos los restaurantes que coinciden con la busqueda y la categoria
  const filtrados = restaurantes.filter((r) => {
    const coincideNombre = r.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoria === 'Todas' || r.categoria === categoria;
    return coincideNombre && coincideCategoria;
  });

  return (
    <View style={styles.pantalla}>
      {/* Barra de busqueda con la lupa a la derecha */}
      <View style={styles.buscador}>
        <TextInput
          style={{ flex: 1 }}
          placeholder="Buscar restaurante"
          value={busqueda}
          onChangeText={setBusqueda}
        />
        <Ionicons name="search" size={20} color="#555" />
      </View>

      {/* Filtros de categoria: fila que se desliza a la derecha */}
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filtros}>
          {categorias.map((c) => (
            <Pressable
              key={c}
              onPress={() => setCategoria(c)}
              style={[styles.chip, categoria === c && styles.chipActivo]}
            >
              <Text style={categoria === c ? styles.textoChipActivo : null}>{c}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      {/* Lista de restaurantes */}
      <FlatList
        data={filtrados}
        keyExtractor={(r) => r.id}
        contentContainerStyle={{ paddingBottom: 16 }}
        ListEmptyComponent={<Text style={styles.vacio}>No hay resultados</Text>}
        renderItem={({ item }) => (
          // Link navega a la ruta /inicio/1, /inicio/2, etc. (archivo [id].js)
          // asChild hace que el Pressable de adentro sea el que reciba el click
          <Link href={`/inicio/${item.id}`} asChild>
            <Pressable style={styles.tarjeta}>
              {/* Columna izquierda: logo, distancia y precio */}
              <View style={styles.izquierda}>
                <View style={[styles.logo, { backgroundColor: item.color }]}>
                  <Text style={{ fontSize: 28 }}>{item.emoji}</Text>
                </View>
                <Text style={styles.chico}>{item.distancia} mts</Text>
                <Text style={styles.chico}>{'$'.repeat(item.precio)}</Text>
              </View>

              {/* Columna derecha: nombre, estrellas y tipo de comida */}
              <View style={{ flex: 1 }}>
                <Text style={styles.nombre}>{item.nombre}</Text>
                <Estrellas calificacion={item.calificacion} />
                <Text style={styles.categoria}>Comida {item.categoria}</Text>
              </View>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: '#F8F9FA', paddingHorizontal: 16 },
  buscador: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 12,
  },
  filtros: { gap: 8, paddingVertical: 12 },
  chip: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
    backgroundColor: '#fff',
  },
  chipActivo: { backgroundColor: '#E8590C', borderColor: '#E8590C' },
  textoChipActivo: { color: '#fff', fontWeight: 'bold' },
  tarjeta: {
    flexDirection: 'row', // logo a la izquierda, informacion a la derecha
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
  },
  izquierda: { alignItems: 'center', marginRight: 12 },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30, // circulo
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  chico: { fontSize: 12, color: '#555' },
  nombre: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  categoria: { color: '#555', marginTop: 4 },
  vacio: { textAlign: 'center', marginTop: 40, color: '#888' },
});
