// =========================================================
// TESTE COMPLETO DO FLUXO DE ADICIONAR JOIA — Infinity Store
// Simula o ambiente do navegador no JSCore
// =========================================================

var window = this;
var console = { 
  log: function() { var a = []; for (var i=0; i<arguments.length; i++) a.push(String(arguments[i])); print('  LOG: ' + a.join(' ')); },
  warn: function() { var a = []; for (var i=0; i<arguments.length; i++) a.push(String(arguments[i])); print('  WARN: ' + a.join(' ')); },
  error: function() { var a = []; for (var i=0; i<arguments.length; i++) a.push(String(arguments[i])); print('  ERROR: ' + a.join(' ')); }
};

var document = {
  elements: {},
  getElementById: function(id) {
    if (!this.elements[id]) {
      this.elements[id] = {
        id: id, value: '', textContent: '', innerHTML: '', src: '',
        style: { display: '' },
        className: '',
        classList: {
          _classes: [],
          add: function(c) { if (this._classes.indexOf(c) === -1) { this._classes.push(c); } },
          remove: function(c) { var i = this._classes.indexOf(c); if (i !== -1) this._classes.splice(i, 1); },
          contains: function(c) { return this._classes.indexOf(c) !== -1; },
          toggle: function(c, v) { if (v) this.add(c); else this.remove(c); }
        },
        querySelectorAll: function() { return []; },
        querySelector: function() { return null; },
        setAttribute: function() {},
        getAttribute: function(a) { return null; },
        addEventListener: function() {},
        focus: function() {},
        click: function() {},
        scrollIntoView: function() {},
        appendChild: function() {},
        removeChild: function() {},
        closest: function() { return null; }
      };
    }
    return this.elements[id];
  },
  querySelectorAll: function() { return { forEach: function() {} }; },
  querySelector: function() { return null; },
  createElement: function(tag) {
    return {
      className: '', innerHTML: '', textContent: '', href: '', download: '',
      style: { opacity: '', transform: '', transition: '' },
      appendChild: function() {}, click: function() {}, remove: function() {},
      classList: { add: function(){}, remove: function(){}, contains: function(){ return false; }, toggle: function(){} }
    };
  },
  addEventListener: function() {},
  body: {
    classList: {
      _classes: [],
      add: function(c) { if (this._classes.indexOf(c) === -1) this._classes.push(c); },
      remove: function(c) { var i = this._classes.indexOf(c); if (i !== -1) this._classes.splice(i, 1); }
    },
    appendChild: function() {}
  }
};

var sessionStorage = {
  _data: {},
  getItem: function(k) { return this._data[k] || null; },
  setItem: function(k, v) { this._data[k] = String(v); },
  removeItem: function(k) { delete this._data[k]; }
};

var localStorage = {
  _data: {},
  getItem: function(k) { return this._data[k] || null; },
  setItem: function(k, v) { this._data[k] = String(v); },
  removeItem: function(k) { delete this._data[k]; }
};

var navigator = { userAgent: 'iPhone' };
var URL = {
  createObjectURL: function() { return 'blob:test'; },
  revokeObjectURL: function() {}
};
var Image = function() { return { onload: null, onerror: null, src: '' }; };
var setTimeout = function(fn, ms) { if (typeof fn === 'function') fn(); };
var setInterval = function() {};
var requestAnimationFrame = function(fn) { fn(); };

// Carrega o app
load('app.js');

// Funções expostas via window.* em app.js
var openProductEditor = window.openProductEditor;
var closeProductEditor = window.closeProductEditor;
var handleProductEditorSubmit = window.handleProductEditorSubmit;
var openCatalogManager = window.openCatalogManager;
var closeCatalogManager = window.closeCatalogManager;
var closeAllDrawers = window.closeAllDrawers;
var isAdminAuthenticated = window.isAdminAuthenticated;
var requireAdminAuth = window.requireAdminAuth;
var adminLoginSubmit = window.adminLoginSubmit;
var closeAdminLoginModal = window.closeAdminLoginModal;
var initCatalog = window.initCatalog;
var saveProductData = window.saveProductData;
var selectEasyCategory = window.selectEasyCategory;
var updatePriceBadge = window.updatePriceBadge;
var showToast = window.showToast;

// Inicializa catálogo como na página real
initCatalog();

var passed = 0;
var failed = 0;

function assert(condition, testName) {
  if (condition) {
    print('✅ PASSOU: ' + testName);
    passed++;
  } else {
    print('❌ FALHOU: ' + testName);
    failed++;
  }
}

print('\n========================================');
print('  TESTES DO INFINITY STORE');
print('========================================\n');

// ----- TESTE 1: Catálogo inicializado -----
print('\n--- Teste 1: Catálogo inicializado ---');
assert(window.CATALOG.length === 52, 'Catálogo tem 52 itens padrão');
assert(window.CATALOG[0].id === 101, 'Primeiro item é id 101');

// ----- TESTE 2: Admin NÃO autenticado inicialmente -----
print('\n--- Teste 2: Admin não autenticado ---');
assert(!isAdminAuthenticated(), 'Admin não está autenticado inicialmente');

// ----- TESTE 3: FAB clicado sem autenticação → login modal abre -----
print('\n--- Teste 3: FAB sem auth → abre login ---');
var mockEvent = { stopPropagation: function() {}, preventDefault: function() {} };
openProductEditor(null, mockEvent);
assert(
  document.getElementById('admin-login-modal').classList.contains('is-open'),
  'Modal de login abriu'
);
assert(
  !document.getElementById('product-editor-modal').classList.contains('is-open'),
  'Modal do editor NÃO abriu (esperando login)'
);
assert(
  typeof window._adminPendingAction === 'function',
  'Ação pendente foi guardada'
);

// ----- TESTE 4: Login com PIN correto → ação pendente executa -----
print('\n--- Teste 4: Login com PIN correto ---');
document.getElementById('admin-pin-display').textContent = '1234';
adminLoginSubmit();
assert(isAdminAuthenticated(), 'Admin está autenticado após login');
assert(
  !document.getElementById('admin-login-modal').classList.contains('is-open'),
  'Modal de login fechou'
);
assert(
  document.getElementById('product-editor-modal').classList.contains('is-open'),
  '*** CRÍTICO: Modal do editor ABRIU após login! ***'
);
assert(
  document.getElementById('drawer-overlay').classList.contains('is-active'),
  'Overlay está ativo'
);
assert(
  window._adminPendingAction === null,
  'Ação pendente foi limpa'
);

// Fechar o editor para próximo teste
closeProductEditor();

// ----- TESTE 5: Abrir editor quando já autenticado -----
print('\n--- Teste 5: Abrir editor já autenticado ---');
openProductEditor(null, null, 'aneis');
assert(
  document.getElementById('product-editor-modal').classList.contains('is-open'),
  'Editor abriu diretamente (já autenticado)'
);
assert(
  document.getElementById('edit-select-category').value === 'aneis',
  'Categoria definida como aneis'
);
closeProductEditor();

// ----- TESTE 6: Abrir do catalog manager -----
print('\n--- Teste 6: Abrir editor via catalog manager ---');
openCatalogManager();
assert(
  document.getElementById('catalog-manager-modal').classList.contains('is-open'),
  'Catalog manager abriu'
);
// Simular clique no botão "+ Adicionar Nova Joia" do manager
openProductEditor(null, mockEvent);
assert(
  !document.getElementById('catalog-manager-modal').classList.contains('is-open'),
  'Catalog manager fechou'
);
assert(
  document.getElementById('product-editor-modal').classList.contains('is-open'),
  '*** CRÍTICO: Editor abriu a partir do manager! ***'
);

// ----- TESTE 7: Submeter formulário (adicionar nova joia) -----
print('\n--- Teste 7: Submeter nova joia ---');
document.getElementById('edit-product-id').value = '';
document.getElementById('edit-input-price').value = '3500';
document.getElementById('edit-input-name').value = 'Colar Diamante Teste';
document.getElementById('edit-select-category').value = 'colares';
document.getElementById('edit-input-primary').value = 'data:image/jpeg;base64,TESTPHOTO123';
document.getElementById('edit-input-alt').value = 'data:image/jpeg;base64,TESTPHOTO123';
document.getElementById('edit-input-collection').value = 'Pandora Moments';
document.getElementById('edit-input-material').value = 'Prata 925';
document.getElementById('edit-input-badge').value = 'Novo';
document.getElementById('edit-input-desc').value = 'Descrição teste';
document.getElementById('edit-input-specs').value = 'Metal: Prata';

handleProductEditorSubmit({ preventDefault: function() {} });

assert(window.CATALOG.length === 53, 'Catálogo agora tem 53 itens');
assert(window.CATALOG[0].name === 'Colar Diamante Teste', 'Nova joia é o primeiro item');
assert(window.CATALOG[0].price === 3500, 'Preço é 3500');
assert(window.CATALOG[0].category === 'colares', 'Categoria é colares');
assert(window.CATALOG[0].imgPrimary === 'data:image/jpeg;base64,TESTPHOTO123', 'Foto foi salva');
assert(window.CATALOG[0]._isNewProduct === true, 'Marcada como novo produto');
assert(
  !document.getElementById('product-editor-modal').classList.contains('is-open'),
  'Editor fechou após salvar'
);

// ----- TESTE 8: Persistência no localStorage -----
print('\n--- Teste 8: Persistência no localStorage ---');
var stored = JSON.parse(localStorage.getItem('infinity_store_custom_items_v1'));
assert(stored !== null, 'Custom items salvos no localStorage');
assert(stored.length === 1, 'Tem 1 item customizado');
assert(stored[0].name === 'Colar Diamante Teste', 'Nome correto no storage');

// ----- TESTE 9: Recarregar catálogo (simula refresh) -----
print('\n--- Teste 9: Persistência após reload ---');
initCatalog();
assert(window.CATALOG.length === 53, 'Catálogo mantém 53 itens após reload');
assert(window.CATALOG[0].name === 'Colar Diamante Teste', 'Novo item persiste no topo');

// ----- TESTE 10: Adicionar segundo produto -----
print('\n--- Teste 10: Adicionar segundo produto ---');
openProductEditor(null, null, 'pulseiras');
document.getElementById('edit-product-id').value = '';
document.getElementById('edit-input-price').value = '2800';
document.getElementById('edit-input-name').value = 'Pulseira Rosa Delicada';
document.getElementById('edit-select-category').value = 'pulseiras';
document.getElementById('edit-input-primary').value = 'data:image/jpeg;base64,PHOTO2';
document.getElementById('edit-input-alt').value = '';
document.getElementById('edit-input-collection').value = '';
document.getElementById('edit-input-material').value = '';
document.getElementById('edit-input-badge').value = '';
document.getElementById('edit-input-desc').value = '';
document.getElementById('edit-input-specs').value = '';

handleProductEditorSubmit({ preventDefault: function() {} });

assert(window.CATALOG.length === 54, 'Catálogo agora tem 54 itens');
assert(window.CATALOG[0].name === 'Pulseira Rosa Delicada', 'Segundo produto é o novo primeiro');

// ----- TESTE 11: Login com PIN errado -----
print('\n--- Teste 11: PIN incorreto ---');
sessionStorage.removeItem('infinity_admin_session');
assert(!isAdminAuthenticated(), 'Admin deslogado');
document.getElementById('admin-pin-display').textContent = '9999';
adminLoginSubmit();
assert(!isAdminAuthenticated(), 'Admin NÃO autenticou com PIN errado');

// ----- TESTE 12: closeAllDrawers fecha tudo -----
print('\n--- Teste 12: closeAllDrawers ---');
sessionStorage.setItem('infinity_admin_session', 'ok');
openProductEditor(null, null, 'brincos');
assert(document.getElementById('product-editor-modal').classList.contains('is-open'), 'Editor aberto');
closeAllDrawers();
assert(!document.getElementById('product-editor-modal').classList.contains('is-open'), 'Editor fechado por closeAllDrawers');

// ----- TESTE 13: Vitrine de Todos os Produtos na Página Principal -----
print('\n--- Teste 13: Vitrine de Produtos na Home ---');
var renderHomeCatalogGrid = window.renderHomeCatalogGrid;
var filterHomeCatalog = window.filterHomeCatalog;
var onHomeCatalogSearch = window.onHomeCatalogSearch;

renderHomeCatalogGrid();
var homeGrid = document.getElementById('home-products-grid');
assert(homeGrid !== null, 'Grade da página principal existe');
assert(homeGrid.innerHTML.length > 500, 'Grade da home preenchida com produtos');

// ----- TESTE 14: Filtragem e Busca na Home -----
print('\n--- Teste 14: Filtro e busca na home ---');
filterHomeCatalog('colares');
assert(homeGrid.innerHTML.indexOf('Colar') !== -1, 'Filtro por colares funciona');

onHomeCatalogSearch('Diamante');
assert(homeGrid.innerHTML.indexOf('Diamante') !== -1, 'Busca por texto na home funciona');

// ----- RESULTADO FINAL -----
print('\n========================================');
print('  RESULTADO: ' + passed + ' passaram, ' + failed + ' falharam');
print('========================================\n');

if (failed > 0) {
  print('⚠️  EXISTEM FALHAS! Corrigir antes de executar o site.');
} else {
  print('🎉 TODOS OS TESTES PASSARAM! O site está pronto.');
}
