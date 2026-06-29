const fs = require('fs');
const path = require('path');

console.log('🧪 开始运行单元测试...\n');

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

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const indexPath = path.join(__dirname, '..', 'index.html');
const packagePath = path.join(__dirname, '..', 'package.json');

test('index.html 文件存在', () => {
  assert(fs.existsSync(indexPath), '找不到 index.html 文件');
});

test('index.html 包含 DOCTYPE', () => {
  const content = fs.readFileSync(indexPath, 'utf-8');
  assert(content.includes('<!DOCTYPE html>'), '缺少 DOCTYPE');
});

test('index.html 包含 html 标签', () => {
  const content = fs.readFileSync(indexPath, 'utf-8');
  assert(content.includes('<html'), '缺少 html 标签');
});

test('index.html 包含 body 标签', () => {
  const content = fs.readFileSync(indexPath, 'utf-8');
  assert(content.includes('<body'), '缺少 body 标签');
});

test('index.html 包含标题', () => {
  const content = fs.readFileSync(indexPath, 'utf-8');
  assert(content.includes('<title>'), '缺少 title 标签');
});

test('package.json 文件存在', () => {
  assert(fs.existsSync(packagePath), '找不到 package.json 文件');
});

test('package.json 包含必要字段', () => {
  const content = fs.readFileSync(packagePath, 'utf-8');
  const pkg = JSON.parse(content);
  assert(pkg.name, '缺少 name 字段');
  assert(pkg.version, '缺少 version 字段');
  assert(pkg.scripts, '缺少 scripts 字段');
});

test('package.json 包含测试脚本', () => {
  const content = fs.readFileSync(packagePath, 'utf-8');
  const pkg = JSON.parse(content);
  assert(pkg.scripts.test, '缺少 test 脚本');
  assert(pkg.scripts['test:unit'], '缺少 test:unit 脚本');
  assert(pkg.scripts['test:e2e'], '缺少 test:e2e 脚本');
});

console.log(`\n📊 测试结果: 通过 ${passed}, 失败 ${failed}`);

if (failed > 0) {
  console.log('\n❌ 部分测试失败！');
  process.exit(1);
} else {
  console.log('\n🎉 所有测试通过！');
  process.exit(0);
}
