# Entropy Regularization

The entropy regularization layer is a custom Keras layer that adds the entropy of the activations to the loss function. The entropy is the integral of the negative of the input activations times the log of the input activations, and is thus a measure of the disorder of the activations. The entropy is added to the loss function each batch.

## Source Code

```python
from keras import backend as K
from keras.layers import Layer

class EntropyRegularizer(Layer):
    """
    Entropy regularizer layer. Adds the entropy of the activations to the
    loss function. The entropy is the integral of the negative of the input
    activations times the log of the input activations, and is thus a measure
    of the disorder of the activations. The entropy is added to the loss
    function each batch.
    
    The layer is intended to be used with the EnergyReservoir layer, which
    acts as a leaky integrator of the square of the input activations. The
    energy is the integral of the square of the input activations, and is
    thus a measure of the total activation energy of the layer. The energy
    is reset to zero after each batch.
    
    The layer is intended to be used as a regularizer, where the entropy is
    added to the loss function. The entropy is the integral of the negative
    of the input activations times the log of the input activations, and is
    thus a measure of the disorder of the activations. The entropy is added
    to the loss function each batch.
    """
    def __init__(self, coefficient):
        super(EntropyRegularizer, self).__init__()
        self.coefficient = coefficient
    
    def call(self, inputs):
        # Calculate entropy of activations
        entropy = K.mean(-K.sum(inputs * K.log(inputs + 1e-10), axis=-1))
        self.add_loss(self.coefficient * entropy)
        return inputs 
    
    def get_config(self):
        base_config = super(EntropyRegularizer, self).get_config()
        return {**base_config, 
                "coefficient": self.coefficient}
```

## Usage

The entropy regularization layer is intended to be used as a regularizer, where the entropy is added to the loss function. The entropy is the integral of the negative of the input activations times the log of the input activations, and is thus a measure of the disorder of the activations. The entropy is added to the loss function each batch.