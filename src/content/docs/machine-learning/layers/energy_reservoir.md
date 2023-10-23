---
title: Energy Reservoir Layer
description: Energy reservoir layer. Acts as a leaky integrator of the square of the input activations. The layer has a capacity, and when the capacity is exceeded, the energy is reset to zero. The layer is stateful, and the energy can be read from the layer. The layer can be reset to zero.
---
## Energy Reservoir Layer

The energy reservoir layer is a leaky integrator of the square of the input activations. The layer has a capacity, and when the capacity is exceeded, the energy is reset to zero. The layer is stateful, and the energy can be read from the layer. The layer can be reset to zero.

## Source Code

```python
import tensorflow as tf
from keras import backend as K
from keras.layers import Layer

class EnergyReservoir(Layer):
    """ 
    Energy reservoir layer. Acts as a leaky integrator of the square of the
    input activations. The layer has a capacity, and when the capacity is
    exceeded, the energy is reset to zero. The layer is stateful, and the
    energy can be read from the layer. The layer can be reset to zero.
    
    The layer is intended to be used as a regularizer, where the energy is
    added to the loss function. The energy is the integral of the square of
    the input activations, and is thus a measure of the total activation
    energy of the layer. The energy is reset to zero after each batch.
    
    The layer is intended to be used with the EntropyRegularizer layer, which
    adds the entropy of the activations to the loss function. The entropy is
    the integral of the negative of the input activations times the log of
    the input activations, and is thus a measure of the disorder of the
    activations. The entropy is added to the loss function each batch.
    """
    def __init__(self, capacity, **kwargs):
        super(EnergyReservoir, self).__init__(**kwargs)
        self._capacity = capacity
        self.stored_energy = self.add_weight(name="stored_energy", shape=(1,), initializer="zeros", trainable=False)

    def build(self, input_shape):
        self.stored_energy = tf.reshape(self.stored_energy, tf.reduce_sum(tf.square(input_shape)).shape)
        super(EnergyReservoir, self).build(input_shape)

    def call(self, inputs):
        # Calculate energy of activations
        energy = K.sum(K.square(inputs))
        # Add energy to stored energy
        self.stored_energy.assign_add(energy)
        # Reset energy if capacity is exceeded
        if self.stored_energy > self.capacity:
            self.stored_energy.assign(tf.zeros_like(self.stored_energy))
        return inputs

    def get_config(self):
        config = super(EnergyReservoir, self).get_config()
        config.update({"capacity": self.capacity})
        return config

    @property
    def energy(self):
        return self.stored_energy

    @property
    def capacity(self):
        return self._capacity

    def reset(self):
        self.stored_energy = tf.zeros_like(self.stored_energy)
```

### Usage

The layer is intended to be used as a regularizer, where the energy is added to the loss function. The energy is the integral of the square of the input activations, and is thus a measure of the total activation energy of the layer. The energy is reset to zero after each batch.
