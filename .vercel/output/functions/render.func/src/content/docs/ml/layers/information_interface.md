---
title: Information Interface Layer
description: The information interface layer is a custom Keras layer that creates a number of parallel Dense layers that act as information interfaces to the layer...
---
## Information Interface Layer

The information interface layer is a custom Keras layer that creates a number of parallel Dense layers that act as information interfaces to the layer. The number of interfaces is specified by the num_interfaces parameter. The input to the layer is passed through each interface, and the outputs of the interfaces are stacked into a tensor. The layer is stateless.

## Source Code

```python
import tensorflow as tf
from keras.layers import Layer, Dense

class InformationInterfaces(Layer):
    """
    Information interfaces layer. Creates a number of parallel Dense layers
    that act as information interfaces to the layer. The number of interfaces
    is specified by the num_interfaces parameter. The input to the layer is
    passed through each interface, and the outputs of the interfaces are
    stacked into a tensor. The layer is stateless.

    The layer is intended to be used with the EnergyReservoir layer, which
    acts as a leaky integrator of the square of the input activations. The
    energy is the integral of the square of the input activations, and is
    thus a measure of the total activation energy of the layer. The energy
    is reset to zero after each batch.

    The information interfaces are intended to be used for information
    bottleneck compression, where the information interfaces are used to
    compress the information in the activations. The information interfaces
    are trained to maximize the mutual information between the input and
    the output of the interfaces, while minimizing the mutual information
    between the input and the output of the layer. The mutual information
    between the input and the output of the layer is the difference between
    the energy and the entropy of the activations. The energy is the integral
    of the square of the input activations, and is thus a measure of the total
    activation energy of the layer. The entropy is the integral of the negative
    of the input activations times the log of the input activations, and is
    thus a measure of the disorder of the activations. The energy is reset to
    zero after each batch.
    """
    def __init__(self, num_interfaces):
        super(InformationInterfaces, self).__init__()
        self.num_interfaces = num_interfaces

    def build(self, input_shape):
        # Create parallel Dense layers
        self.interfaces = []
        for i in range(self.num_interfaces):
            interface = Dense(input_shape[-1]) 
            self.interfaces.append(interface)
        super(InformationInterfaces, self).build(input_shape)

    def call(self, inputs):
        # Pass inputs through parallel interfaces
        outputs = []
        for i in range(self.num_interfaces):
            interface_output = self.interfaces[i](inputs)
            outputs.append(interface_output)
        outputs = tf.stack(outputs, axis=1)
        return outputs
    
    def compute_output_shape(self, input_shape):
        output_shape = (input_shape[0], self.num_interfaces, input_shape[-1])
        return output_shape
    
    def get_config(self):
        base_config = super(InformationInterfaces, self).get_config()
        return {**base_config, 
                "num_interfaces": self.num_interfaces}
    
    @property
    def interfaces(self):
        return self._interfaces
    
    @interfaces.setter
    def interfaces(self, interfaces):
        self._interfaces = interfaces
```

## Usage

The information interfaces layer is intended to be used with the EnergyReservoir layer, which acts as a leaky integrator of the square of the input activations. The energy is the integral of the square of the input activations, and is thus a measure of the total activation energy of the layer. The energy is reset to zero after each batch.
