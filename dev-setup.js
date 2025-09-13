#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🎨 RAREVAULT — Настройка проекта...\n');

// Check if node_modules exists
if (!fs.existsSync('node_modules')) {
  console.log('📦 Установка зависимостей...');
  console.log('Выполните: npm install\n');
} else {
  console.log('✅ Зависимости установлены\n');
}

// Check if all required directories exist
const requiredDirs = [
  'app',
  'components', 
  'contexts',
  'lib',
  'data',
  'public/images/vinyl',
  'public/images/comics',
  'public/images/figurine'
];

console.log('📁 Проверка структуры проекта...');
requiredDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`✅ ${dir}`);
  } else {
    console.log(`❌ ${dir} - создайте директорию`);
  }
});

console.log('\n🚀 Готово! Запустите проект командой:');
console.log('npm run dev\n');

console.log('📖 Документация: README.md');
console.log('🌐 Сайт: http://localhost:3000\n');

console.log('⚠️  ВАЖНО: Это тестовый прототип!');
console.log('   Товары не продаются, оплата отключена.');
