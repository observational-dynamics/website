# Encoder Model

This model is a simple autoencoder that uses a convolutional neural network to encode and decode images. It is used to demonstrate how to use the `InformationInterfaces` layer.

```python
import sys
import tensorflow as tf
from tensorflow import keras
from keras.layers import Conv2D, Reshape, MaxPooling2D, Conv2DTranspose, UpSampling2D
from layers.layers import InformationInterfaces

import tensorflow as tf

def create_and_train(data, labels, shape=(28, 28), reshape = (28, 28, 1), encoder_size=16, encoder_stride=3, decoder_size=16, decoder_stride=3):
    input = keras.Input(shape=shape)

    x = Reshape(reshape)(input)

    # Encoder
    x = Conv2D(encoder_size, encoder_stride, activation='relu')(x)
    x = MaxPooling2D()(x)

    # Information interfaces in bottleneck
    x = InformationInterfaces(8)(x)

    # Decoder
    x = Conv2DTranspose(decoder_size, decoder_stride, activation='relu')(x)
    x = UpSampling2D()(x)

    output = Conv2D(1, 3, activation='sigmoid')(x)

    model = keras.Model(input, output)

    # Compile and train
    model.compile(optimizer='adam', loss='binary_crossentropy')
    model.fit(data, data)

    return model

sys.modules[__name__] = create_and_train
```
