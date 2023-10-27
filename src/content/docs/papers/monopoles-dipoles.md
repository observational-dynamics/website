---
title: Monopoles and Dipoles
description: A mathematical representation of monopoles and dipoles in neural networks.
---
**Monopoles**

*Sensory Monopole:*

- State vector S ∈ R^n represents sensory inputs
- Input function I(t): R → R^n maps environment states to sensory states
- Output function O(t): R^n → R^m maps sensory states to output effects

*Motor Monopole:*

- State vector M ∈ R^m represents motor states
- Input function I(t): R^n → R^m maps sensory states to motor states
- Output function O(t): R^m → R^p maps motor states to kinetic outputs

**Dipoles**

*Memory Dipole:*

- State vector M ∈ R^k represents memory states
- Input function I(t): R^n → R^k encodes sensory inputs into memories
- Output function O(t): R^k → R^n decodes memories into recalled sensory states

*Cognitive Dipole:*

- State vector C ∈ R^r represents cognitive states
- Input function I(t): R^n → R^r forms cognitive representations
- Output function O(t): R^r → R^m maps cognitive states to motor states

The key next steps would be:

- Expanding this to cover additional monopole/dipole types

- Specifying composition rules to show how they combine into systems

- Defining dynamics of state evolution over time

- Relating inputs/outputs to energy/information flows

**Expanding monopole/dipole types:**

Additional sensory monopoles:

- Auditory, olfactory, gustatory, tactile, proprioceptive, etc.

Additional motor monopoles:

- Vocalization, locomotion, manipulation, expression, etc.

Additional cognitive dipoles:

- Planning, reasoning, decision-making, predicting, etc.

Additional memory dipoles:

- Semantic, procedural, working, etc.

**Composition rules:**

- Sensory monopoles compose into overall perceptive systems
- Motor monopoles compose into overall action systems
- Cognitive dipoles integrate to perform inference, reasoning
- Memory dipoles combine to form overall memory storage/recall

**State evolution:**

- Sensory dynamics: dS/dt = f(S,I(t))
- Motor dynamics: dM/dt = g(M,S,C)
- Memory dynamics: dM/dt = h(M,I(t),O(t))
- Cognitive dynamics: dC/dt = j(C,S,M)

**Energy/information flows:**

- Sensory inputs carry information about environment
- Motor outputs require energy to actuate
- Memories store information over time
- Cognition uses information to direct energy

**Monopoles**

Let M = {m1, m2,...,mn} be the set of monopole types.

Each mi is associated with:

- A state vector xi ∈ Rki  
- An input function fi: R × Rki → Rki
- An output function gi: Rki → Rli

The state vector encodes the internal state of the monopole.

The input function fi determines how the state evolves over time based on current state and environment inputs.

The output function gi determines the outputs generated from the current state.

**Dipoles**

Let D = {d1, d2,...,dm} be the set of dipole types.

Each dj is associated with:

- A state vector yj ∈ Rkj
- An input function hj: R × Rkj → Rkj
- An output function ij: Rkj → Rlj

**System Composition**

The overall system state is represented by:

x = (x1, x2,...,xn, y1, y2,...,ym)

The total state evolves according to:

dx/dt = F(x, u(t))

Where u(t) represents external inputs and F defines the coupled evolution of monopole and dipole states.

**Energy/Information Flows**

- Monopole outputs gi(xi) represent outward flows of energy
- Dipole outputs ij(yj) represent inward flows of information

**Interactions**

Coupling functions Gij(xi, yj) define interactions between monopole mi and dipole dj

Here is a table summarizing some potential monopole and dipole types and their key characteristics:

| Component | Type | State Vector | Input Function | Output Function |
|-|-|-|-|-|  
| Vision | Sensory Monopole | Encodes visual sensory data | Processes optical input | Generates visual percepts |
| Audition | Sensory Monopole | Encodes auditory sensory data | Processes acoustic input | Generates auditory percepts |
| Olfaction | Sensory Monopole | Encodes olfactory sensory data | Processes chemical input | Generates odor percepts |
| Gustation | Sensory Monopole | Encodes gustatory sensory data | Processes taste input | Generates flavor percepts |
| Proprioception | Sensory Monopole | Encodes internal state data | Processes interoceptive signals | Generates perceptions of internal state |
| Tactition | Sensory Monopole | Encodes tactile sensory data | Processes touch input | Generates tactile percepts |
| Motion | Motor Monopole | Encodes motor states | Controls musculoskeletal system | Generates physical actions |
| Vocalization | Motor Monopole | Encodes vocal states | Controls vocal apparatus | Generates speech output |
| Declarative Memory | Cognitive Dipole | Encodes factual knowledge | Stores/recalls facts | Remembers facts |
| Episodic Memory | Cognitive Dipole | Encodes autobiographical events | Stores/recalls experiences | Remembers experiences |
| Working Memory | Cognitive Dipole | Encodes temporary state data | Manipulates current information | Short-term recall |
| Semantic Memory | Cognitive Dipole | Encodes concepts and meanings | Stores/recalls concepts | Understands meanings |
| Planning | Cognitive Dipole | Represents action plans | Deliberates/decides actions | Selects planned actions |

Next Steps

- Construct simple example perceiver models using a few monopole/dipole components
- Define the state vectors, input/output functions for each component
- Specify coupling between components using circuit equations
- Simulate the system evolution and observe emergent dynamics
- Incrementally add new components and couplings to build up complexity
- Introduce different environments/inputs and characterize system responses
- Apply circuit analysis techniques like impedance matching, resonance, filter theory
- Extend to include nonlinear and stochastic behavior
- Optimize component parameters to match real-world perceptual data
- Relate internal model states to psychological/behavioral phenomena
- Validate against neuroscience findings on sensory processing pathways
