const fs = require('fs');
const path = require('path');

console.log('🧪 开始运行测试...\n');

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`✅ ${name}`);
    passed++;
  } catch (error) {
    console.log(`❌ ${name}`);
    console.error(`   错误: ${error.message}\n`);
    failed++;
  }
}

const indexPath = path.join(__dirname, '..', 'index.html');
const packagePath = path.join(__dirname, '..', 'package.json');

test('index.html 文件存在', () => {
  if (!fs.existsSync(indexPath)) {
    throw new Error('找不到 index.html 文件');
  }
});

test('index.html 文件内容有效', () => {
  const content = fs.readFileSync(indexPath, 'utf-8');
  if (!content.includes('<!DOCTYPE html>')) {
    throw new Error('index.html 缺少 DOCTYPE');
  }
  if (!content.includes('<html')) {
    throw new Error('index.html 缺少 html 标签');
  }
});

test('package.json 文件存在', () => {
  if (!fs.existsSync(packagePath)) {
    throw new Error('找不到 package.json 文件');
  }
});

test('package.json 内容有效', () => {
  const content = fs.readFileSync(packagePath, 'utf-8');
  const pkg = JSON.parse(content);
  if (!pkg.name) {
    throw new Error('package.json 缺少 name 字段');
  }
  if (!pkg.scripts) {
    throw new Error('package.json 缺少 scripts 字段');
  }
});

console.log('\n📊 测试结果:');
console.log(`   通过: ${passed}`);
console.log(`   失败: ${failed}`);

if (failed > 0) {
  process.exit(1);
} else {
  console.log('\n🎉 所有测试通过！');
  process.exit(0);
}
