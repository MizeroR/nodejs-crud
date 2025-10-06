#! /usr/bin/env node

const args = process.argv.slice(2)

if (args[0] === 'greet') {
    console.log(`Hello, ${args[1] || 'stranger'}!`);
} else {
    console.log('Usage: node cli.js greet <name>');
}