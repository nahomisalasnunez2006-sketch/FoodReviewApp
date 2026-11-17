import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// Layout raiz: la barra de abajo con 3 pestanas (Inicio | Mapa | Config)
// Cada pestana corresponde a un archivo o carpeta dentro de "app"
export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#E8590C' }}>
      {/* index.js solo redirige a /inicio, por eso lo ocultamos de la barra */}
      <Tabs.Screen name="index" options={{ href: null }} />

      <Tabs.Screen
        name="inicio" // carpeta app/inicio
        options={{
          title: 'Inicio',
          headerShown: false, // el titulo lo pone el Stack de inicio/_layout.js
          tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="mapa" // archivo app/mapa.js
        options={{
          title: 'Mapa',
          tabBarIcon: ({ color, size }) => <Ionicons name="map" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="config" // archivo app/config.js
        options={{
          title: 'Config',
          tabBarIcon: ({ color, size }) => <Ionicons name="settings" color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
