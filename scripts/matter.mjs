import matter from 'gray-matter';

// js front matter would execute at build time; only yaml/json are allowed.
const disabled = () => { throw new Error('js front matter disabled'); };
export default (raw) => matter(raw, { engines: { js: disabled, javascript: disabled } });
