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



  
