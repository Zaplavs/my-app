import python from './python';
import javascript from './javascript';
import csharp from './csharp';

export const ROADMAPS = [python, javascript, csharp];
export const getRoadmapById = (id) => ROADMAPS.find(r => r.id === id);
export default ROADMAPS;
