import React from 'react';
import { View, Text } from 'react-native';
import Card from './card';
import CardSection from './cardsection';

export default props => {
    return (
        <Card>
            <CardSection>
                <View></View>
                <View stle={styles.headerContentStyle}>
                    <Text>{props.album.title}</Text>
                    <Text>{props.album.artist}</Text>
                </View>
            </CardSection>
        </Card>
    )
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
};