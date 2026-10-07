const fs = require('fs');
const actor = process.argv[2] || 'livastic-vm6-primary-20260911';
const p = JSON.parse(fs.readFileSync('policy.json','utf8')).rules[0];
const allowed = p.principal === actor && p.role === 'admin' && p.resource === 'production-deploy' && p.enabled === true;
console.log(JSON.stringify({actor,allowed,policy:p}));
process.exit(allowed ? 0 : 77);
