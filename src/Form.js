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

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleAddressChange = (value) => {
    setAddress(value);
  };

  const handleGenderChange = (value) => {
    setGender(value);
  };

  const handleHobbyChange = (value) => {
    setHobby(value);
  };

  const handleCommentChange = (value) => {
    setComment(value);
  };

  const handleSubmit = () => {
    setIsLoading(true);
  };

  return (
    <View>
      <Text>NIM:</Text>
      <TextInput
        value={nim}
        onChangeText={(value) => setNim(value)}
      />

      <Text>Name:</Text>
      <TextInput
        value={name}
        onChangeText={handleNameChange}
      />

      <Text>Address:</Text>
      <TextInput
        value={address}
        onChangeText={handleAddressChange}
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
        onChangeText={handleHobbyChange}
      />

      <Text>Comment:</Text>
      <TextInput
        multiline={true}
        value={comment}
        onChangeText={handleCommentChange}
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
