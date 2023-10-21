# Replenishment Source

The replenishment source layer is a custom Keras layer that applies a replenishment to the loss function. The replenishment is applied to the loss function with respect to the inputs to the layer. The replenishment is a function of the losses, and is applied to the losses by adding the replenishment to the losses. The layer is stateless.

```python
from keras.layers import Layer

class ReplenishmentSource(Layer):
    """
    Replenishment source layer. Applies a replenishment to the loss function.
    The replenishment is applied to the loss function with respect to the
    inputs to the layer. The replenishment is a function of the losses, and
    is applied to the losses by adding the replenishment to the losses. The
    layer is stateless.
    
    The layer is intended to be used with the EnergyReservoir layer, which
    acts as a leaky integrator of the square of the input activations. The
    energy is the integral of the square of the input activations, and is
    thus a measure of the total activation energy of the layer. The energy
    is reset to zero after each batch.
    
    The replenishment is intended to be used for information bottleneck
    compression, where the replenishment is used to replenish the information
    in the activations. The replenishment is trained to minimize the mutual
    information between the input and the output of the layer.
    """
    def __init__(self, replenish_amount=0.1):
        super(ReplenishmentSource, self).__init__()
        self.replenish_amount = replenish_amount

    def call(self, inputs):
        # No operation, replenishment applied in losses
        return inputs
    
    def get_replenishment(self, losses):
        # Calculate replenishment as percentage of losses
        replenish = -self.replenish_amount * losses
        return replenish

    def get_config(self):

        base_config = super(ReplenishmentSource, self).get_config()
        return {**base_config, 
                "replenish_amount": self.replenish_amount}
    
    @property
    def replenish_amount(self):
        return self._replenish_amount
    
    @replenish_amount.setter
    def replenish_amount(self, replenish_amount):
        self._replenish_amount = replenish_amount
```

## Usage

The replenishment source layer is intended to be used as a regularizer, where the replenishment is applied to the loss function. The replenishment is applied to the loss function with respect to the inputs to the layer. The replenishment is a function of the losses, and is applied to the losses by adding the replenishment to the losses. The layer is stateless.

