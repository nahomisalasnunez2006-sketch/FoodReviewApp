import { Redirect } from 'expo-router';

// Ruta "/" : al abrir la app, mandamos directo a la pestana Inicio
export default function Index() {
  return <Redirect href="/inicio" />;
}
