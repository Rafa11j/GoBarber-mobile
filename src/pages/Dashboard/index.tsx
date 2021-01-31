import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../../hooks/auth';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Dashboard</Text>
      <Button title="Sair" onPress={signOut} />
    </View>
  );
};

export default Dashboard;
