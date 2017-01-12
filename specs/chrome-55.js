"use strict";

const fullName = "chrome:55";

const apiSpec = {
  "/BaseAudioContext": { global: false },
  "/BaseAudioContext/destination": {},
  "/BaseAudioContext/currentTime": {},
  "/BaseAudioContext/sampleRate": {},
  "/BaseAudioContext/listener": {},
  "/BaseAudioContext/state": {},
  "/BaseAudioContext/onstatechange": {},
  "/BaseAudioContext/createBuffer": {},
  "/BaseAudioContext/decodeAudioData": {},
  "/BaseAudioContext/createBufferSource": {},
  "/BaseAudioContext/createGain": {},
  "/BaseAudioContext/createDelay": {},
  "/BaseAudioContext/createBiquadFilter": {},
  "/BaseAudioContext/createIIRFilter": {},
  "/BaseAudioContext/createWaveShaper": {},
  "/BaseAudioContext/createPanner": {},
  "/BaseAudioContext/createConvolver": {},
  "/BaseAudioContext/createDynamicsCompressor": {},
  "/BaseAudioContext/createAnalyser": {},
  "/BaseAudioContext/createScriptProcessor": {},
  "/BaseAudioContext/createStereoPanner": {},
  "/BaseAudioContext/createOscillator": {},
  "/BaseAudioContext/createPeriodicWave": {},
  "/BaseAudioContext/createChannelSplitter": {},
  "/BaseAudioContext/createChannelMerger": {},
  "/BaseAudioContext/suspend": {},
  "/BaseAudioContext/resume": {},
  "/BaseAudioContext/createMediaElementSource": {},
  "/BaseAudioContext/createMediaStreamSource": {},
  "/BaseAudioContext/createMediaStreamDestination": {},

  "/AudioContext": { global: "AudioContext" },
  "/AudioContext/close": {},

  "/OfflineAudioContext": { global: "OfflineAudioContext" },
  "/OfflineAudioContext/oncomplete": {},
  "/OfflineAudioContext/length": {},
  "/OfflineAudioContext/startRendering": {},
  "/OfflineAudioContext/suspend": {},
  "/OfflineAudioContext/resume": {},

  "/AudioNode": { global: "AudioNode" },
  "/AudioNode/context": {},
  "/AudioNode/numberOfInputs": {},
  "/AudioNode/numberOfOutputs": {},
  "/AudioNode/channelCount": {},
  "/AudioNode/channelCountMode": {},
  "/AudioNode/channelInterpretation": {},
  "/AudioNode/connect": {},
  "/AudioNode/disconnect": {},

  "/AudioSourceNode": { global: false },

  "/AudioDestinationNode": { global: "AudioDestinationNode" },
  "/AudioDestinationNode/maxChannelCount": {},

  "/AudioParam": { global: "AudioParam" },
  "/AudioParam/value": {},
  "/AudioParam/defaultValue": {},
  "/AudioParam/minValue": {},
  "/AudioParam/maxValue": {},
  "/AudioParam/setValueAtTime": {},
  "/AudioParam/linearRampToValueAtTime": {},
  "/AudioParam/exponentialRampToValueAtTime": {},
  "/AudioParam/setTargetAtTime": {},
  "/AudioParam/setValueCurveAtTime": {},
  "/AudioParam/cancelScheduledValues": {},

  "/GainNode": { global: "GainNode" },
  "/GainNode/gain": {},

  "/DelayNode": { global: "DelayNode" },
  "/DelayNode/delayTime": {},

  "/AudioBuffer": { global: "AudioBuffer" },
  "/AudioBuffer/length": {},
  "/AudioBuffer/duration": {},
  "/AudioBuffer/sampleRate": {},
  "/AudioBuffer/numberOfChannels": {},
  "/AudioBuffer/getChannelData": {},
  "/AudioBuffer/copyFromChannel": {},
  "/AudioBuffer/copyToChannel": {},

  "/AudioBufferSourceNode": { global: "AudioBufferSourceNode" },
  "/AudioBufferSourceNode/buffer": {},
  "/AudioBufferSourceNode/playbackRate": {},
  "/AudioBufferSourceNode/detune": {},
  "/AudioBufferSourceNode/loop": {},
  "/AudioBufferSourceNode/loopStart": {},
  "/AudioBufferSourceNode/loopEnd": {},
  "/AudioBufferSourceNode/onended": {},
  "/AudioBufferSourceNode/start": {},
  "/AudioBufferSourceNode/stop": {},

  "/MediaElementAudioSourceNode": { global: "MediaElementAudioSourceNode" },
  "/MediaElementAudioSourceNode/mediaElement": {},

  "/ScriptProcessorNode": { global: "ScriptProcessorNode" },
  "/ScriptProcessorNode/onaudioprocess": {},
  "/ScriptProcessorNode/bufferSize": {},

  "/PannerNode": { global: "PannerNode" },
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
  "/PannerNode/setPosition": {},
  "/PannerNode/setOrientation": {},
  "/PannerNode/setVelocity": {},

  "/AudioListener": { global: "AudioListener" },
  "/AudioListener/dopplerFactor": {},
  "/AudioListener/speedOfSound": {},
  "/AudioListener/positionX": {},
  "/AudioListener/positionY": {},
  "/AudioListener/positionZ": {},
  "/AudioListener/forwardX": {},
  "/AudioListener/forwardY": {},
  "/AudioListener/forwardZ": {},
  "/AudioListener/upX": {},
  "/AudioListener/upY": {},
  "/AudioListener/upZ": {},
  "/AudioListener/setPosition": {},
  "/AudioListener/setOrientation": {},
  "/AudioListener/setVelocity": {},

  "/StereoPannerNode": { global: "StereoPannerNode" },
  "/StereoPannerNode/pan": {},

  "/ConvolverNode": { global: "ConvolverNode" },
  "/ConvolverNode/buffer": {},
  "/ConvolverNode/normalize": {},

  "/AnalyserNode": { global: "AnalyserNode" },
  "/AnalyserNode/fftSize": {},
  "/AnalyserNode/frequencyBinCount": {},
  "/AnalyserNode/minDecibels": {},
  "/AnalyserNode/maxDecibels": {},
  "/AnalyserNode/smoothingTimeConstant": {},
  "/AnalyserNode/getFloatFrequencyData": {},
  "/AnalyserNode/getByteFrequencyData": {},
  "/AnalyserNode/getFloatTimeDomainData": {},
  "/AnalyserNode/getByteTimeDomainData": {},

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
  "/BiquadFilterNode/type": {},
  "/BiquadFilterNode/frequency": {},
  "/BiquadFilterNode/detune": {},
  "/BiquadFilterNode/Q": {},
  "/BiquadFilterNode/gain": {},
  "/BiquadFilterNode/getFrequencyResponse": {},

  "/IIRFilterNode": { global: "IIRFilterNode" },
  "/IIRFilterNode/getFrequencyResponse": {},

  "/WaveShaperNode": { global: "WaveShaperNode" },
  "/WaveShaperNode/curve": {},
  "/WaveShaperNode/oversample": {},

  "/OscillatorNode": { global: "OscillatorNode" },
  "/OscillatorNode/type": {},
  "/OscillatorNode/frequency": {},
  "/OscillatorNode/detune": {},
  "/OscillatorNode/onended": {},
  "/OscillatorNode/start": {},
  "/OscillatorNode/stop": {},
  "/OscillatorNode/setPeriodicWave": {},

  "/PeriodicWave": { global: "PeriodicWave" },

  "/MediaStreamAudioSourceNode": { global: "MediaStreamAudioSourceNode" },
  "/MediaStreamAudioSourceNode/mediaStream": {},

  "/MediaStreamAudioDestinationNode": { global: "MediaStreamAudioDestinationNode" },
  "/MediaStreamAudioDestinationNode/stream": {},
};

module.exports = { fullName, apiSpec };