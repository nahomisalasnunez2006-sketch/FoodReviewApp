import { Stack } from 'expo-router';

// Layout de la carpeta inicio: un Stack (pantallas apiladas)
// Asi al entrar al detalle aparece la flecha para regresar a la lista
export default function InicioLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Food Review App' }} />
      <Stack.Screen name="[id]" options={{ title: 'Detalle Rest' }} />
    </Stack>
  );
}
