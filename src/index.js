import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import {autoTypeWriter} from './scripts/typeWriter'

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
autoTypeWriter()
