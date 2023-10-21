import React, { useRef, useEffect } from 'react';

class Environment {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.grid = new Array(width).fill(null).map(() => new Array(height).fill(0));
  }
  spreadEntropy(x, y, value) {
    const spreadRate = 1;
    const spreadRadius = 1;
    const neighbors = [];
    for (let _x = x - spreadRadius; _x <= x + spreadRadius; _x++) {
      for (let _y = y - spreadRadius; _y <= y + spreadRadius; _y++) {
        if (_x >= 0 && _x < this.width && _y >= 0 && _y < this.height) {
          neighbors.push([_x, _y]);
        }
      }
    }
    this.grid[x][y] -= value * spreadRate * neighbors.length;
    neighbors.forEach(([x, y]) => {
      this.grid[x][y] += value * spreadRate
    });
  }
}

class Monopole {
  constructor(x, y, environment) {
    this.x = x;
    this.y = y;
    this.environment = environment;
  }
  radiateEnergy(value) { this.environment.grid[~~this.x][~~this.y] += value; }
  spreadEntropy() { this.environment.spreadEntropy(~~this.x, ~~this.y, this.environment.grid[~~this.x][~~this.y]); }
}

class Dipole {
  constructor(x, y, environment) {
    this.x = x;
    this.y = y;
    this.environment = environment;
  }
  senseEntropy() {
    const senseRadius = 1;
    const neighbors = [];
    for (let x = this.x - senseRadius; x <= this.x + senseRadius; x++) {
      for (let y = this.y - senseRadius; y <= this.y + senseRadius; y++) {
        if (x >= 0 && x < this.environment.width && y >= 0 && y < this.environment.height) {
          neighbors.push([x, y]);
        }
      }
    }
    const entropyValues = neighbors.map(([x, y]) => this.environment.grid[x][y]);
    const maxEntropy = Math.max(...entropyValues);
    const maxEntropyIndex = entropyValues.indexOf(maxEntropy);
    return neighbors[maxEntropyIndex];
  }
  absorbEnergy() {
    if(!this) return;
    const absorbRate = .1;
    const ret = this.senseEntropy();
    if(!ret) return;
    this.environment.grid[ret[0]][ret[1]] -= absorbRate;
  }
  move() {
    try {
        const [newX, newY] = this.senseEntropy();
        this.x = newX;
        this.y = newY;
    } catch (e) {
      console.log(e);
    }
  }
}

export default function SimulationCanvas( width = 800, height =600 ) {
  const canvasRef = useRef();

  const renderEnvironment = (environment, ctx) => {
    ctx.fillStyle = '#000000f4';
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    const cellWidth = canvasRef.current.width / environment.width;
    const cellHeight = canvasRef.current.height / environment.height;

    for (let x = 0; x < environment.width; x++) {
      for (let y = 0; y < environment.height; y++) {
        const value = environment.grid[x][y];
        ctx.fillStyle = `rgba(0, 0, 255, ${value/4})`;
        ctx.fillRect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
      }
    }
  }
  
  const renderDipole = (dipole, ctx) => {
    const cellWidth = canvasRef.current.width / dipole.environment.width;
    const cellHeight = canvasRef.current.height / dipole.environment.height;
    ctx.fillStyle = '#ff00ff02';
    ctx.fillRect(dipole.x * cellWidth, dipole.y * cellHeight, cellWidth, cellHeight);
  }

  const mainLoop = () => {

    canvasRef.current.width = 800
    canvasRef.current.height = 800
    canvasRef.current.style.width = `${canvasRef.current.width}px`;
    canvasRef.current.style.height = `${canvasRef.current.height}px`;
    canvasRef.current.style.border = '1px solid black';

    const environment = new Environment(canvasRef.current.width, canvasRef.current.height);
    const monopole = new Monopole(canvasRef.current.width/2, canvasRef.current.height/2, environment);

    const dipoles = [];
    for(let i = 0; i < 1000; i++) {
      dipoles.push(new Dipole(Math.floor(Math.random() * canvasRef.current.width), Math.floor(Math.random() * canvasRef.current.height), environment));
    }

    function loop() {
      monopole.spreadEntropy();
      monopole.radiateEnergy(1);

      dipoles.forEach(dipole => {
        renderDipole(dipole, canvasRef.current.getContext('2d'));
        dipole.absorbEnergy();      
        dipole.environment.spreadEntropy(dipole.x, dipole.y, 1.1)
        dipole.move();
      });

      renderEnvironment(environment, canvasRef.current.getContext('2d'));
   

      requestAnimationFrame(loop);
    }

    loop();
  }

  useEffect(() => {
    canvasRef.current.width = width;
    canvasRef.current.height = height;
    mainLoop();
  }, []);

  return (
    <canvas ref={canvasRef} />
  );
}