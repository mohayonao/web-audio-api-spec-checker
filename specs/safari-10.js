// Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Version/10.0 Mobile/14C92 Safari/602.1

const fullName = "safari:10";

const apiSpec = {
  "/AudioContext": { global: "webkitAudioContext" },
  "/AudioContext/destination": {},
  "/AudioContext/currentTime": {},
  "/AudioContext/sampleRate": {},
  "/AudioContext/listener": {},
  "/AudioContext/state": {},
  "/AudioContext/onstatechange": {},
  "/AudioContext/activeSourceCount": {},
  "/AudioContext/oncomplete": {},
  "/AudioContext/suspend": {},
  "/AudioContext/resume": {},
  "/AudioContext/close": {},
  "/AudioContext/createBuffer": {},
  "/AudioContext/decodeAudioData": {},
  "/AudioContext/createBufferSource": {},
  "/AudioContext/createMediaElementSource": {},
  "/AudioContext/createGain": {},
  "/AudioContext/createDelay": {},
  "/AudioContext/createBiquadFilter": {},
  "/AudioContext/createWaveShaper": {},
  "/AudioContext/createPanner": {},
  "/AudioContext/createConvolver": {},
  "/AudioContext/createDynamicsCompressor": {},
  "/AudioContext/createAnalyser": {},
  "/AudioContext/createScriptProcessor": {},
  "/AudioContext/createOscillator": {},
  "/AudioContext/createPeriodicWave": {},
  "/AudioContext/createChannelSplitter": {},
  "/AudioContext/createChannelMerger": {},
  "/AudioContext/startRendering": {},
  "/AudioContext/createGainNode": {},
  "/AudioContext/createDelayNode": {},
  "/AudioContext/createJavaScriptNode": {},

  "/OfflineAudioContext": { global: "webkitOfflineAudioContext" },

  "/AudioNode": { global: "AudioNode" },
  "/AudioNode/context": {},
  "/AudioNode/numberOfInputs": {},
  "/AudioNode/numberOfOutputs": {},
  "/AudioNode/channelCount": {},
  "/AudioNode/channelCountMode": {},
  "/AudioNode/channelInterpretation": {},
  "/AudioNode/connect": {},
  "/AudioNode/disconnect": {},

  "/AudioDestinationNode": { global: "AudioDestinationNode" },
  "/AudioDestinationNode/maxChannelCount": {},

  "/AudioParam": { global: "AudioParam" },
  "/AudioParam/value": {},
  "/AudioParam/minValue": {},
  "/AudioParam/maxValue": {},
  "/AudioParam/defaultValue": {},
  "/AudioParam/name": {},
  "/AudioParam/units": {},
  "/AudioParam/setValueAtTime": {},
  "/AudioParam/linearRampToValueAtTime": {},
  "/AudioParam/exponentialRampToValueAtTime": {},
  "/AudioParam/setTargetAtTime": {},
  "/AudioParam/setValueCurveAtTime": {},
  "/AudioParam/cancelScheduledValues": {},
  "/AudioParam/setTargetValueAtTime": {},

  "/GainNode": { global: "GainNode" },
  "/GainNode/gain": {},

  "/DelayNode": { global: "DelayNode" },
  "/DelayNode/delayTime": {},

  "/AudioBuffer": { global: "AudioBuffer" },
  "/AudioBuffer/length": {},
  "/AudioBuffer/duration": {},
  "/AudioBuffer/sampleRate": {},
  "/AudioBuffer/gain": {},
  "/AudioBuffer/numberOfChannels": {},
  "/AudioBuffer/getChannelData": {},

  "/AudioBufferSourceNode": { global: "AudioBufferSourceNode" },
  "/AudioBufferSourceNode/buffer": {},
  "/AudioBufferSourceNode/playbackState": {},
  "/AudioBufferSourceNode/gain": {},
  "/AudioBufferSourceNode/playbackRate": {},
  "/AudioBufferSourceNode/loop": {},
  "/AudioBufferSourceNode/loopStart": {},
  "/AudioBufferSourceNode/loopEnd": {},
  "/AudioBufferSourceNode/looping": {},
  "/AudioBufferSourceNode/onended": {},
  "/AudioBufferSourceNode/start": {},
  "/AudioBufferSourceNode/stop": {},
  "/AudioBufferSourceNode/noteOn": {},
  "/AudioBufferSourceNode/noteGrainOn": {},
  "/AudioBufferSourceNode/noteOff": {},
  "/AudioBufferSourceNode/UNSCHEDULED_STATE": {},
  "/AudioBufferSourceNode/SCHEDULED_STATE": {},
  "/AudioBufferSourceNode/PLAYING_STATE": {},
  "/AudioBufferSourceNode/FINISHED_STATE": {},

  "/MediaElementAudioSourceNode": { global: "MediaElementAudioSourceNode" },
  "/MediaElementAudioSourceNode/mediaElement": {},

  "/ScriptProcessorNode": { global: "ScriptProcessorNode" },
  "/ScriptProcessorNode/onaudioprocess": {},
  "/ScriptProcessorNode/bufferSize": {},

  "/PannerNode": { global: false },
  "/PannerNode/panningModel": {},
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
  "/PannerNode/EQUALPOWER": {},
  "/PannerNode/HRTF": {},
  "/PannerNode/SOUNDFIELD": {},
  "/PannerNode/LINEAR_DISTANCE": {},
  "/PannerNode/INVERSE_DISTANCE": {},
  "/PannerNode/EXPONENTIAL_DISTANCE": {},

  "/AudioListener": { global: "AudioListener" },
  "/AudioListener/dopplerFactor": {},
  "/AudioListener/speedOfSound": {},
  "/AudioListener/setPosition": {},
  "/AudioListener/setOrientation": {},
  "/AudioListener/setVelocity": {},

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
  "/BiquadFilterNode/LOWPASS": {},
  "/BiquadFilterNode/HIGHPASS": {},
  "/BiquadFilterNode/BANDPASS": {},
  "/BiquadFilterNode/LOWSHELF": {},
  "/BiquadFilterNode/HIGHSHELF": {},
  "/BiquadFilterNode/PEAKING": {},
  "/BiquadFilterNode/NOTCH": {},
  "/BiquadFilterNode/ALLPASS": {},

  "/WaveShaperNode": { global: "WaveShaperNode" },
  "/WaveShaperNode/curve": {},
  "/WaveShaperNode/oversample": {},

  "/OscillatorNode": { global: "OscillatorNode" },
  "/OscillatorNode/type": {},
  "/OscillatorNode/playbackState": {},
  "/OscillatorNode/frequency": {},
  "/OscillatorNode/detune": {},
  "/OscillatorNode/onended": {},
  "/OscillatorNode/start": {},
  "/OscillatorNode/stop": {},
  "/OscillatorNode/noteOn": {},
  "/OscillatorNode/noteOff": {},
  "/OscillatorNode/setPeriodicWave": {},
  "/OscillatorNode/SINE": {},
  "/OscillatorNode/SQUARE": {},
  "/OscillatorNode/SAWTOOTH": {},
  "/OscillatorNode/TRIANGLE": {},
  "/OscillatorNode/CUSTOM": {},
  "/OscillatorNode/UNSCHEDULED_STATE": {},
  "/OscillatorNode/SCHEDULED_STATE": {},
  "/OscillatorNode/PLAYING_STATE": {},
  "/OscillatorNode/FINISHED_STATE": {},

  "/PeriodicWave": { global: "PeriodicWave" },

};

module.exports = { fullName, apiSpec };
