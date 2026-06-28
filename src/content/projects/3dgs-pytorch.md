---
title: "3D Gaussian Splatting in PyTorch"
description: "A from-scratch PyTorch implementation of 3D Gaussian Splatting for novel view synthesis, with EWA splatting, adaptive density control, and differentiable rasterization."
date: "Jun 25 2026"
repoURL: "https://github.com/TianleCao/3dgs-pytorch"
badge: "Open Source"
---

A from-scratch PyTorch implementation of **3D Gaussian Splatting (3DGS)** for novel view synthesis. Built to understand the math behind the original paper and the engineering choices in the reference CUDA implementation.

### Key Features
- Pure PyTorch implementation — rendering and adaptive control in <500 lines of Python code for readability

<br />

> [!TIP]
> **Technical Deep Dive:** For a derivation of the EWA projection math, the adaptive control logic, and learnings when reading and comparing with the reference implementation, see my [**Learning Notes →**](/blog/3dgs-pytorch/docs/tutorial)
