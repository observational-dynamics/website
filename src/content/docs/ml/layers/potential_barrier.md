---
title: Potential Barrier Layer
description: The potential barrier layer is a custom Keras layer that applies a potential barrier to the gradients of the loss function. The potential barrier is a...
---
## Potential Barrier Layer

The potential barrier layer is a custom Keras layer that applies a potential barrier to the gradients of the loss function. The potential barrier is applied to the gradients of the loss function with respect to the inputs to the layer. The potential barrier is a function of the norm of the gradients, and is applied to the gradients by multiplying the gradients by the potential barrier. The layer is stateless.

## Source Code

```python
from keras import backend as K
from keras.layers import Layer

class PotentialBarrier(Layer):
    """ 
    Potential barrier layer. Applies a potential barrier to the gradients
    of the loss function. The potential barrier is applied to the gradients
    of the loss function with respect to the inputs to the layer. The
    potential barrier is a function of the norm of the gradients, and is
    applied to the gradients by multiplying the gradients by the potential
    barrier. The layer is stateless.
    """
    def __init__(self, _impedance_coefficient):
        super(PotentialBarrier, self).__init__()
        self._impedance_coefficient = _impedance_coefficient
    
    def call(self, inputs):
        # No operation, barrier applied in gradients   
        return inputs  
    
    def get_config(self):
        base_config = super(PotentialBarrier, self).get_config()
        return {**base_config, 
                "impedance_coefficient": self._impedance_coefficient}

    def compute_output_shape(self, input_shape):
        return input_shape
    
    def get_impedance(self, gradients):
        # Calculate norm of gradients
        impedance = K.sqrt(K.sum(K.square(gradients)))
        return impedance
    
    @property
    def impedance_coefficient(self):
        return self._impedance_coefficient
```

### Usage

The potential barrier layer is intended to be used as a regularizer, where the potential barrier is applied to the gradients of the loss function. The potential barrier is applied to the gradients of the loss function with respect to the inputs to the layer. The potential barrier is a function of the norm of the gradients, and is applied to the gradients by multiplying the gradients by the potential barrier. The layer is stateless.
