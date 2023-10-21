---
title: Regressor model
description: This model is a simple regressor that uses a neural network to predict the output of a function. It is used to demonstrate how to use the PotentialBar...
---
# Regressor model

This model is a simple regressor that uses a neural network to predict the output of a function. It is used to demonstrate how to use the `PotentialBarrier` and `ReplenishmentSource` layers.

```python
import sys
import tensorflow as tf
from tensorflow import keras
from keras.layers import Dense
from layers.layers import PotentialBarrier, ReplenishmentSource

def create_and_train(data, labels, shape=(20,), impedance_coefficient=0.1, replenishment_amount=0.05):
    input = keras.Input(shape=shape)

    x = Dense(64, activation='relu')(input)

    # Add potential barrier 
    x = PotentialBarrier(impedance_coefficient)(x)

    x = Dense(64, activation='relu')(x)

    # Add loss replenishment
    x = ReplenishmentSource(replenishment_amount)(x)

    output = Dense(1)(x)

    model = keras.Model(input, output)

    # Compile and train
    model.compile(loss='mse', optimizer='adam')
    model.fit(data, labels)

    return model

sys.modules[__name__] = create_and_train
```