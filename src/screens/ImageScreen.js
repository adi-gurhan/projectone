import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail
                title="Forest"
                imageSource={require('../../images/forest')}
                score={9}
            />
            <ImageDetail
                title="Beach"
                imageSource={require('../../images/beach')}
                score={7}
            />
            <ImageDetail
                title="Mountain"
                imageSource={require('../../images/mountain')}
                score={10}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;