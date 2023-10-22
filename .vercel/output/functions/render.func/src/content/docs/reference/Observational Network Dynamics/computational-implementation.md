---
title: Computational Implementation
description: Computational Implementation of Observational Network Dynamics
---

## Computational Implementation

We implement the OND framework in Python, providing a flexible object-oriented architecture for specification and simulation.

### Data Structures

Key classes encapsulate:
Graph - Stores graph topology as adjacency matrix. Methods for adding nodes, connecting nodes, applying topology algorithms.
Node - Maintains node state vector, parameters, derivatives, and update functions. Observer model and metrics stored here.
Observer - Represents observer state yi and inference model. Has visibility set Vi and estimate of unobserved states
Metrics - Calculate global order parameters, clustering coefficients, synchronization measures, and information theory metrics.

### Numerical Integration

Euler method - Simple explicit scheme. Iteratively updates state as xi(t+Δt) = xi(t) + Δt * dxi/dt. Easy to implement but numerically unstable.
Runge-Kutta - Implicit adaptive step-size scheme achieving stability through estimating slopes at intermediate points. More accurate but computationally intensive.

### Analysis Methods

Equilibrium points Obtain by setting derivatives dx/dt = 0 and solving for fixed point x*. Linearize around x* to get Jacobian matrix whose eigenvalues determine stability.
Bifurcation tracking Continuously vary control parameter while identifying fixed point locations to detect qualitative dynamic shifts like Hopf bifurcations.
Information theory Use mutual information or transfer entropy to quantify information flows between node, neighbor, and observer states.

### Visualization

Network graphs Interactive vis of node-link network topology. Color code nodes by state or other attributes.
Timeseries plots Key for tracking node trajectories, observer estimates, and global metrics over time.
Phase portraits Project node state space onto 2D plane to visualize attractors and dynamic flow.

### Case Studies

We demonstrate the OND modeling approach on case studies ranging from abstract dynamical systems to cognitive and social agent models:

### Coupled Oscillators

The classic Kuramoto model comprises oscillators with natural frequencies coupled through sinusoidal phase interactions [1]. We implement this in OND by representing each oscillator as a node with dynamics:
dxi/dt = ωi + (K/N)Σj sin(xj - xi)

Where ωi is the intrinsic frequency and K couples the phases. OND replicates key synchronization phenomena as K varies.

### Distributed Consensus

OND can model distributed consensus emergence through local agent interactions [2]. Each node updates its continuous opinion state based on neighbor differences, achieving convergence. Observer effects are studied by introducing nodes with asymmetric visibility.

### Swarm Models

We examine swarming behaviors like flocking of self-propelled agents [3] in OND by incorporating velocity matching dynamics. Agent vision ranges constrain information sharing, analogous to limited observer visibility. OND helps elucidate how individual limitations shape coherent group behaviors.

### Cognitive Architectures

OND representations of modular, distributed cognitive processes with asymmetric visibility allow studying collective intelligence emergence from networks of simple nodes [4]. Phase transitions in synchrony reveal how unified cognition arises from specialized components.

References
[1] Acebrón, J. A., Bonilla, L. L., Pérez Vicente, C. J., Ritort, F., & Spigler, R. (2005). The Kuramoto model: A simple paradigm for synchronization phenomena. Reviews of modern physics, 77(1), 137.

[2] Valentini, G., Ferrante, E., Dorigo, M., & Hamann, H. (2016). Collective decision with 100 kilobots: Speed versus accuracy in binary discrimination problems. Autonomous Agents and Multi-Agent Systems, 30(3), 553-580.

[3] Reynolds, C. W. (1987). Flocks, herds and schools: A distributed behavioral model. In Proceedings of the 14th annual conference on Computer graphics and interactive techniques (pp. 25-34).

[4] Thagard, P., & Stewart, T. C. (2014). Two theories of consciousness: Semantic pointer competition vs. information integration. Consciousness and cognition, 30, 73-90.
