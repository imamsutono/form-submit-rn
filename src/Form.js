import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";


export default function Form() {
  const [nim, setNim] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [hobby, setHobby] = useState('');
  const [comment, setComment] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
  };

  return (
    <View>
      <Text>NIM:</Text>
      <TextInput
        value={nim}
        onChangeText={setNim}
      />

      <Text>Name:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
      />

      <Text>Address:</Text>
      <TextInput
        value={address}
        onChangeText={setAddress}
      />

      <View>
        <Text>Gender:</Text>
        <TouchableOpacity onPress={() => handleGenderChange('male')}>
          <Text>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleGenderChange('female')}>
          <Text>Female</Text>
        </TouchableOpacity>
      </View>

      <Text>Hobby:</Text>
      <TextInput
        value={hobby}
        onChangeText={setHobby}
      />

      <Text>Comment:</Text>
      <TextInput
        multiline={true}
        value={comment}
        onChangeText={setComment}
      />

      <Map />

      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button title="Submit" onPress={handleSubmit} />
      )}

      <TouchableOpacity onPress={handleSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
