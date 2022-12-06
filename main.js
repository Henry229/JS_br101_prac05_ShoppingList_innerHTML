const items = document.querySelector('.items');
const input = document.querySelector('.input');
const addBtn = document.querySelector('.footerBtn');

const addItem = () => {
  const text = input.value;
  if (!text) {
    input.focus();
    return;
  }
  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({ block: 'center' });
  input.value = '';
  input.focus();
};

let id = 0;
const createItem = (text) => {
  const itemRow = document.createElement('li');
  itemRow.className = 'itemRow';
  itemRow.setAttribute('data-id', id);

  itemRow.innerHTML = `<div class="item">
                        <span class="itemName">${text}</span>
                        <button class="itemBin">
                          <i class="fas fa-trash-alt" data-id=${id}></i>
                        </button>
                      </div>
                      <div class="itemDivider"></div>
                      `;
  id++;
  // const item = document.createElement('div');
  // item.className = 'item';

  // const span = document.createElement('span');
  // span.className = 'itemName';
  // span.innerText = text;

  // const deleteBtn = document.createElement('button');
  // deleteBtn.className = 'itemBin';
  // deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  // deleteBtn.addEventListener('click', () => {
  //   items.removeChild(itemRow);
  // });

  // const divider = document.createElement('div');
  // divider.className = 'itemDivider';

  // item.appendChild(span);
  // item.appendChild(deleteBtn);

  // itemRow.appendChild(item);
  // itemRow.appendChild(divider);

  return itemRow;
};

addBtn.addEventListener('click', () => addItem());

input.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    addItem();
  }
});

items.addEventListener('click', (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.itemRow[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});
