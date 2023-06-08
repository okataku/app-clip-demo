import { StatusBar } from 'expo-status-bar';
import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { isClip } from 'react-native-app-clip'

export default function App() {
  const isAppClip = useMemo(() => isClip(), []);
  return (
    <View style={styles.container}>
      <Text>{isAppClip ? 'App Clip' : 'Main App'}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
