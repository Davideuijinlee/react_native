import React from 'react';
import { View, Text } from 'react-native';
import Card from './card';
import CardSection from './cardsection';

export default props => {
    return (
        <Card>
            <CardSection>
                <Text>{props.album.title}</Text>
            </CardSection>
        </Card>
    )
};