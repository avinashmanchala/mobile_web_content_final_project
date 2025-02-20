import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useUser } from '@clerk/clerk-expo';

const Profile = () => {
  const { user } = useUser();
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  // const [mobile, setMobile] = useState(user?.Mobile);


  const onSaveUser = async () => {
    try {
      const result = await user?.update({
        firstName: firstName!,
        lastName: lastName!,
      });
      console.log('🚀 yay result!!', result);
    } catch (e) {
      console.log('🚀 error :(', JSON.stringify(e));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center' }}>
        halooooo {user?.firstName} {user?.lastName}!
      </Text>

      <TextInput placeholder="First Name" value={firstName|| ''} onChangeText={setFirstName} style={styles.inputField} />
      <TextInput placeholder="Last Name" value={lastName|| ''} onChangeText={setLastName} style={styles.inputField} />
      {/* <TextInput placeholder="Mobile" value={mobile|| ''} onChangeText={setMobile} style={styles.inputField} /> */}

      <Button onPress={onSaveUser} title="Update account" color={'#6c47ff'}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
  },
  inputField: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderColor: '#6c47ff',
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
  },
});

export default Profile;