varying vec3 vUv2;

uniform vec3 colorC;
uniform vec3 colorD;
uniform vec3 colorE;
uniform vec3 colorF;

void main() {
  gl_FragColor = vec4(mix(mix(colorC, colorD, vUv2.y), mix(colorF, colorE, vUv2.y), vUv2.z), 0.4);
}