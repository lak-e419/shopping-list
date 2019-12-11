var present = {
  items: []
};

function addItem (present, item) {
  present.items.push ({
    displayName: item,
    checkedOff: false
  });
}
function getItem (present, itemIndex) {
  present.items[itemIndex];
}
function deleteItem (present, itemIndex) {
  present.items.splice[itemIndex, 1];
}
function updateItem (present, itemIndex, newItem) {
  present.items[itemIndex] = newItem;
}
function renderItem (item, itemId, itemTemplate, itemDataAttr){
  var element=$(itemTemplate);
  element.find('.js-shopping-item').text(item.displayName);
  if (item.checkedOff) {
  element.find('.js-shopping-item').addClass('shopping-item_checked');
  }
  element.find('.js-shopping-item-toggle')
  element.attr(itemDataAttr, itemId);
  return element;
}

function handleItemAdd (
 formElement, newItemIdentifier, itemDataAttr, listElement, present) {
  formElement.submit(function(event) {
    event.preventDefault ();
    var newItem = formElement.find(newItemIdentifier).val();
    addItem(present, newItem);
    renderList(present, listElement, itemDataAttr);
    this.reset();
  });
 }
function handleItemToggle(
  listElement, toggleIdentifier, itemDataAttr, present) {
  listElement.on('click', toggleIdentifier, function(event) {
    var itemId = $(event.currentTarget.closest('li')).attr(itemDataAttr);
    var formerItem = getItem(present, itemId);
    updateItem(present, itemId, {
      displayName: formerItem.displayName,
      checkedOff: !formerItem.checkedOff
    });
    renderList(present, listElement, itemDataAttr)
  });
  }
function handleItemDelete (
  formElement, removeIdentifier, itemDataAttr, listElement, present) {
    listElement.on('click', removeIdentifier, function(event) {
      var itemIndex= parseInt($(this).closest('li').attr(itemDataAttr));
      deleteItem(present,itemIndex);
      renderList(present, listElement, itemDataAttr);
    })
  }
$(function() {
  var formElement = $('#js-shopping-list-form');
  var listElement = $('.js-shopping-list');
  var newItemIdentifier = 'js-new-item';
  var itemDataAttr = 'data-list-item-id';
  var toggleIdentifier = 'js-shopping-item-toggle'
  handleItemAdd(
    formElement, newItemIdentifier,itemDataAttr, listElement, present);
  handleItemDelete(
    formElement, removeIdentifier, itemDataAttr, listElement, present);
  handleItemToggle(
    listElement, toggleIdentifier, itemDataAttr, itemDataAttr, present);
});
var listItemTemplate = (
  '<li>' +
    '<span class="shopping-item js-shopping-item"></span>' +
    '<div class="shopping-item-controls">' +
      '<button class="js-shopping-item-toggle">' +
        '<span class="button-label">check</span>' +
      '</button>' +
      '<button class="js-shopping-item-delete">' +
        '<span class="button-label">delete</span>' +
      '</button>' +
    '</div>' +
  '</li>'
); 


  
