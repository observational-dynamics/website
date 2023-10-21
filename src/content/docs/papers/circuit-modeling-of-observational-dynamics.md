---
title: Circuit Modeling Of Observational Dynamics
description: Abstract
---

## Abstract

Observational Dynamics (OD) offers a thermodynamics-grounded model of perception. This paper presents a formalized circuit analogy mapping between OD and equivalent circuit components. Mathematical definitions and SPICE-inspired notation represent the OD ontology. Detailed circuit diagrams demonstrate applications to photosynthesis, predator-prey systems, and human cognition. This establishes a rigorous mathematical foundation, enabling OD simulations and quantitative analysis.

## Introduction

Modeling complex systems using circuit analogies has a long history across disciplines like engineering, neuroscience, and physics. Circuits provide an intuitive representation using common electrical elements like capacitors, resistors, and transistors. This enables leveraging well-established circuit theory and computational techniques for system analysis.

Observational Dynamics (OD) introduced by Schepis [1] offers a novel thermodynamics-based model of perception. It represents the observer and environment as energetically coupled systems exchanging information. Key OD factors include potential energy, entropy, impedance, interfaces, and replenishment.

Formalizing OD systems as circuit models provides several benefits:

1. Enables applying circuit intuition and mathematical techniques for OD analysis
2. Provides ontology for implementing computational OD simulations
3. Allows executing quantitative predictions of perceptual phenomena
4. Bridges concepts across thermodynamics, information theory and circuit theory

This paper presents a formalized mapping between OD concepts and equivalent circuit components using precisely defined terminology and mathematical notation. Detailed circuit diagrams demonstrate applications across biological and cognitive systems. This establishes a rigorous foundation for exploring OD through circuit modeling techniques.

## Overview of Observational Dynamics

OD frames perception as an observer system (O) interacting with an environment (E) [2]. Key OD parameters are:

Potential Energy (PE): Observer’s capacity for interacting with the environment, analogous to voltage in circuits. Stored in capacitors.

Potential Replenishment (PR): Restores PE after interactions, modeled as voltage sources.

Impedance (Z): Dissipates energy, modeled as resistors impeding current flow.

Interfaces (I): Enable information exchange between O and E. Represented by transistors regulating power.

Entropy (S): Uncertainty in the system. Inductors model the analogues.

These factors describe the thermodynamic exchange of energy and information during observation.

## Formalization of Circuit Model

We now mathematically define the OD parameters and their equivalent circuit elements:

Potential Energy: PE function P(t) stores observer energy

Potential Replenishment: PR function R(t) restores P(t)

Impedance: Function Z(t) dissipates energy during transfers

Interfaces: Function I(t) governs info exchange between O and E

Entropy: Function S(t) reflects uncertainty in system

Using SPICE-based notation:

P(t) → Capacitor, C

R(t) → Voltage Source, V

Z(t) → Resistor, R

I(t) → Transistor/Diode, Q/D

S(t) → Inductor, L

With these mappings, we can represent OD systems using circuit schematics and leverage electrical engineering techniques for analysis.

The dynamics are governed by the system equations, derived by combining the OD functions based on the defined interactions and transfers. For example, a simple OD process:

dC/dt = I(V - ZI) - S

Relates the capacitor charge rate to the voltage source and resistor impeding the transistor controlled information flow, with entropy fluctuations.

## Circuit Analysis of OD Systems

To demonstrate applying these circuit representations, we model examples across domains:

### Photosynthesis

The plant’s photosynthetic structures act as capacitors © storing incoming solar energy modeled as the voltage source (V). Impedances like shade or angle resist the energy flow via resistors ®. Biochemical interactions represent the regulating transistors (Q). Entropy variations manifest through inductors (L).

Circuit diagram:

V → R → Q → C → L

System equations:

dC/dt = I(V - ZI) - S

### Predator-Prey

The predator’s sensory systems act as transistors (Q) controlling energy flows from observations of prey in the environment. Its physical capacity represents the capacitor ©, replenished by eating prey - the voltage source (V). Difficulty hunting models impedance ®.

Circuit diagram:

Q → R → C ← V

System equations:

dC/dt = I(V - ZI) - S

### Human Cognition

The brain’s neural architecture represents the overall circuitry. Sensory processing acts as the interfacing transistors (Q). Activation patterns store potential energy in capacitor-like Neurons ©. Learning forms resisting connections ®. External stimuli provide energy (V).

Circuit diagram:

V → R ↔ Q ↔ C

Cognitive architecture:maps to OD circuitry

This demonstrates applying the OD circuit formalism to model disparate complex systems. Similar analysis can be conducted for cybernetic, social and artificial intelligence systems.

## Discussion

This formalized framework provides mathematical rigor to enable simulating and quantifying OD systems leveraging established circuit theory. It bridges thermodynamic concepts with intuitive electrical components to model emergent perceptual phenomena.

The simplifications involved should be acknowledged, as the full complexity of natural systems cannot be captured entirely. Further empirical validation is needed to confirm the circuit interpretations of specific bio-cognitive structures.

## Conclusion

In conclusion, this paper presents a methodology for modeling Observational Dynamics using formalized circuit analogies. Mathematical notation and detailed diagrams demonstrate mapping OD concepts like potential energy and impedance into equivalent circuit elements. This enables adopting engineering techniques for quantifying and analyzing perceptual systems across disciplines. It provides a foundation for computational implementations of OD and deeper integrations with cybernetic, biological and cognitive theories.

## References

[1] S. Schepis, “T[he Circuit of Observation: A Mathematical Framework for Understanding Perception, Consciousness and Reality](https://www.academia.edu/104322923/The_Circuit_of_Observation_A_Mathematical_Framework_for_Understanding_Perception_Consciousness_and_Reality)”, Academia, 2023.
