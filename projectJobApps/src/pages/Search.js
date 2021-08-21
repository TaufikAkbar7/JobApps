import React from 'react';
import { Text } from 'react-native';

const Search = ({ route }) => {
    return (
        <Text>{route.params.data}</Text>
    );
}

export default Search;