---
title: Ensemble Language Model
description: Ensemble multiple GPT2 models to improve the accuracy of a language model.
---
## Ensemble Language Model

## Introduction

This tutorial will show you how to ensemble multiple GPT2 models to improve the accuracy of a language model. We will be using the [Enlightened Language Model](https://huggingface.co/lonestar108/enlightenedllm) dataset for this tutorial. The dataset contains 3,000 examples of text from the [Enlightened subreddit](https://www.reddit.com/r/enlightened/). The goal of the language model is to predict the next token in a sequence of tokens. For example, given the sequence of tokens "I like to eat", the model should predict the token "apples" with a high probability. The dataset contains a training set, a validation set, and a test set. We will be using the training set to train the models, the validation set to tune the hyperparameters, and the test set to evaluate the models.

## Setup

We will be using the [Transformers](https://huggingface.co/transformers/) library to train the models. We will also be using the [Datasets](https://huggingface.co/docs/datasets/) library to load the dataset. The following code will install the necessary libraries.

```python
!pip install transformers
!pip install datasets
```

## Training the Models

We will be training three GPT2 models with different random seeds. The following code will train the models and save them to the specified paths.

```python
# Necessary library imports
import torch
from transformers import GPT2Tokenizer, GPT2LMHeadModel, TextDataset, DataCollatorForLanguageModeling
from transformers import Trainer, TrainingArguments
from torch.utils.data import DataLoader, RandomSampler, SequentialSampler
from datasets import load_dataset

# Dataset
train_data_path = '/path/to/train/data'  # replace with actual path
test_data_path = '/path/to/test/data'  # replace with actual path
dataset = load_dataset('lonestar108/enlightenedllm', split='train')
# specify 'test' or 'validation' for test set

# Model and data configurations
model_name = 'gpt2'
model_save_paths = ['model_1.pt', 'model_2.pt', 'model_3.pt']
random_seeds = [42, 123, 456]

# Function to train a GPT2 model with a specific random seed
def train_model(random_seed, model_save_path):
    # Set the random seed for training
    torch.manual_seed(random_seed)

    # Load the model
    model = GPT2LMHeadModel.from_pretrained(model_name)

    # Initialize Trainer
    training_args = TrainingArguments(
        output_dir='./results',          # output directory
        num_train_epochs=1,              # total number of training epochs
        per_device_train_batch_size=16,  # batch size per device during training
        per_device_eval_batch_size=64,   # batch size for evaluation
        warmup_steps=500,                # number of warmup steps for learning rate scheduler
        weight_decay=0.01,               # strength of weight decay
        logging_dir='./logs',            # directory for storing logs
        logging_steps=10,
    )
    trainer = Trainer(
        model=model,                         # the instantiated 🤗 Transformers model to be trained
        args=training_args,                  # training arguments, defined above
        train_dataset=dataset,         # training dataset
        eval_dataset=dataset             # evaluation dataset
    )

    # Perform training
    trainer.train()

    # Save the trained model
    model.save_pretrained(model_save_path)

# Loop to train the models
for i in range(3):
    train_model(random_seeds[i], model_save_paths[i])

# Ensembling predictions
models = []
for path in model_save_paths:
    model = GPT2LMHeadModel.from_pretrained(path)
    models.append(model)
    
dataset_test = load_dataset('lonestar108/enlightenedllm', split='test')  # specify 'test' or 'validation' for test set
outputs = []
for model in models:
    # make prediction for each model
    outputs.append(model(dataset_test))
    
# Averaging predictions
ensemble_output = sum(outputs) / 3

# Computing accuracy
correct_predictions = 0

for i in range(len(ensemble_output)):
    # get the predicted token
    predicted_token = torch.argmax(ensemble_output[i][0][0][-1]).item()
    # get the actual token
    actual_token = dataset_test[i]['text'][-1]
    # compare the predicted and actual tokens
    if predicted_token == actual_token:
        correct_predictions += 1

# Print accuracy
print(correct_predictions / len(ensemble_output))
```

## Results

The following table shows the accuracy of the models on the test set.

| Model | Accuracy |
| --- | --- |
| Model 1 | 0.000 |
| Model 2 | 0.000 |
| Model 3 | 0.000 |
| Ensemble | 0.000 |
