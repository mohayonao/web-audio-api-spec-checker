"use strict";

const fullName = "firefox:50";

const apiSpec = {
  "/AudioContext": { global: "AudioContext" },
  "/AudioContext/suspend": {},
  "/AudioContext/resume": {},
  "/AudioContext/close": {},
  "/AudioContext/createBuffer": {},
  "/AudioContext/decodeAudioData": {},
  "/AudioContext/createBufferSource": {},
  "/AudioContext/createMediaStreamDestination": {},
  "/AudioContext/createScriptProcessor": {},
  "/AudioContext/createStereoPanner": {},
  "/AudioContext/createAnalyser": {},
  "/AudioContext/createMediaElementSource": {},
  "/AudioContext/createMediaStreamSource": {},
  "/AudioContext/createGain": {},
  "/AudioContext/createDelay": {},
  "/AudioContext/createBiquadFilter": {},
  "/AudioContext/createIIRFilter": {},
  "/AudioContext/createWaveShaper": {},
  "/AudioContext/createPanner": {},
  "/AudioContext/createConvolver": {},
  "/AudioContext/createChannelSplitter": {},
  "/AudioContext/createChannelMerger": {},
  "/AudioContext/createDynamicsCompressor": {},
  "/AudioContext/createOscillator": {},
  "/AudioContext/createPeriodicWave": {},
  "/AudioContext/destination": {},
  "/AudioContext/sampleRate": {},
  "/AudioContext/currentTime": {},
  "/AudioContext/listener": {},
  "/AudioContext/state": {},
  "/AudioContext/onstatechange": {},

  "/OfflineAudioContext": { global: "OfflineAudioContext" },
  "/OfflineAudioContext/startRendering": {},
  "/OfflineAudioContext/oncomplete": {},
  "/OfflineAudioContext/length": {},

  "/AudioNode": { global: "AudioNode" },
  "/AudioNode/connect": {},
  "/AudioNode/disconnect": {},
  "/AudioNode/context": {},
  "/AudioNode/numberOfInputs": {},
  "/AudioNode/numberOfOutputs": {},
  "/AudioNode/channelCount": {},
  "/AudioNode/channelCountMode": {},
  "/AudioNode/channelInterpretation": {},

  "/AudioDestinationNode": { global: "AudioDestinationNode" },
  "/AudioDestinationNode/maxChannelCount": {},

  "/AudioParam": { global: "AudioParam" },
  "/AudioParam/setValueAtTime": {},
  "/AudioParam/linearRampToValueAtTime": {},
  "/AudioParam/exponentialRampToValueAtTime": {},
  "/AudioParam/setTargetAtTime": {},
  "/AudioParam/setValueCurveAtTime": {},
  "/AudioParam/cancelScheduledValues": {},
  "/AudioParam/value": {},
  "/AudioParam/defaultValue": {},

  "/GainNode": { global: "GainNode" },
  "/GainNode/gain": {},

  "/DelayNode": { global: "DelayNode" },
  "/DelayNode/delayTime": {},

  "/AudioBuffer": { global: "AudioBuffer" },
  "/AudioBuffer/getChannelData": {},
  "/AudioBuffer/copyFromChannel": {},
  "/AudioBuffer/copyToChannel": {},
  "/AudioBuffer/sampleRate": {},
  "/AudioBuffer/length": {},
  "/AudioBuffer/duration": {},
  "/AudioBuffer/numberOfChannels": {},

  "/AudioBufferSourceNode": { global: "AudioBufferSourceNode" },
  "/AudioBufferSourceNode/start": {},
  "/AudioBufferSourceNode/stop": {},
  "/AudioBufferSourceNode/buffer": {},
  "/AudioBufferSourceNode/playbackRate": {},
  "/AudioBufferSourceNode/detune": {},
  "/AudioBufferSourceNode/loop": {},
  "/AudioBufferSourceNode/loopStart": {},
  "/AudioBufferSourceNode/loopEnd": {},
  "/AudioBufferSourceNode/onended": {},

  "/MediaElementAudioSourceNode": { global: "MediaElementAudioSourceNode" },

  "/ScriptProcessorNode": { global: "ScriptProcessorNode" },
  "/ScriptProcessorNode/onaudioprocess": {},
  "/ScriptProcessorNode/bufferSize": {},

  "/PannerNode": { global: "PannerNode" },
  "/PannerNode/setPosition": {},
  "/PannerNode/setOrientation": {},
  "/PannerNode/setVelocity": {},
  "/PannerNode/panningModel": {},
  "/PannerNode/positionX": {},
  "/PannerNode/positionY": {},
  "/PannerNode/positionZ": {},
  "/PannerNode/orientationX": {},
  "/PannerNode/orientationY": {},
  "/PannerNode/orientationZ": {},
  "/PannerNode/distanceModel": {},
  "/PannerNode/refDistance": {},
  "/PannerNode/maxDistance": {},
  "/PannerNode/rolloffFactor": {},
  "/PannerNode/coneInnerAngle": {},
  "/PannerNode/coneOuterAngle": {},
  "/PannerNode/coneOuterGain": {},

  "/AudioListener": { global: "AudioListener" },
  "/AudioListener/setPosition": {},
  "/AudioListener/setOrientation": {},
  "/AudioListener/setVelocity": {},
  "/AudioListener/dopplerFactor": {},
  "/AudioListener/speedOfSound": {},

  "/StereoPannerNode": { global: "StereoPannerNode" },
  "/StereoPannerNode/pan": {},

  "/ConvolverNode": { global: "ConvolverNode" },
  "/ConvolverNode/buffer": {},
  "/ConvolverNode/normalize": {},

  "/AnalyserNode": { global: "AnalyserNode" },
  "/AnalyserNode/getFloatFrequencyData": {},
  "/AnalyserNode/getByteFrequencyData": {},
  "/AnalyserNode/getFloatTimeDomainData": {},
  "/AnalyserNode/getByteTimeDomainData": {},
  "/AnalyserNode/fftSize": {},
  "/AnalyserNode/frequencyBinCount": {},
  "/AnalyserNode/minDecibels": {},
  "/AnalyserNode/maxDecibels": {},
  "/AnalyserNode/smoothingTimeConstant": {},

  "/ChannelSplitterNode": { global: "ChannelSplitterNode" },

  "/ChannelMergerNode": { global: "ChannelMergerNode" },

  "/DynamicsCompressorNode": { global: "DynamicsCompressorNode" },
  "/DynamicsCompressorNode/threshold": {},
  "/DynamicsCompressorNode/knee": {},
  "/DynamicsCompressorNode/ratio": {},
  "/DynamicsCompressorNode/reduction": {},
  "/DynamicsCompressorNode/attack": {},
  "/DynamicsCompressorNode/release": {},

  "/BiquadFilterNode": { global: "BiquadFilterNode" },
  "/BiquadFilterNode/getFrequencyResponse": {},
  "/BiquadFilterNode/type": {},
  "/BiquadFilterNode/frequency": {},
  "/BiquadFilterNode/detune": {},
  "/BiquadFilterNode/Q": {},
  "/BiquadFilterNode/gain": {},

  "/IIRFilterNode": { global: "IIRFilterNode" },
  "/IIRFilterNode/getFrequencyResponse": {},

  "/WaveShaperNode": { global: "WaveShaperNode" },
  "/WaveShaperNode/curve": {},
  "/WaveShaperNode/oversample": {},

  "/OscillatorNode": { global: "OscillatorNode" },
  "/OscillatorNode/start": {},
  "/OscillatorNode/stop": {},
  "/OscillatorNode/setPeriodicWave": {},
  "/OscillatorNode/type": {},
  "/OscillatorNode/frequency": {},
  "/OscillatorNode/detune": {},
  "/OscillatorNode/onended": {},

  "/PeriodicWave": { global: "PeriodicWave" },

  "/MediaStreamAudioSourceNode": { global: "MediaStreamAudioSourceNode" },

  "/MediaStreamAudioDestinationNode": { global: "MediaStreamAudioDestinationNode" },
  "/MediaStreamAudioDestinationNode/stream": {},
};

module.exports = { fullName, apiSpec };