var tree = [
{
  'name': 'directory1',
  'type': 'folder',
  'url': 'https://www.google.com',
  'contents': [{
      'name': 'file1',
      'type': 'file',
      'url': 'https://www.google.com'
    },
    {
      'name': 'file2',
      'type': 'file',
      'url': 'https://www.google.com'
    }]
},
{
  'name': 'file1',
  'type': 'file',
  'url': 'https://www.google.com'
},
{
  'name': 'directory2',
  'type': 'folder',
  'url': 'https://www.google.com',
  'contents': [{
        'name': 'file1',
        'type': 'file',
        'url': 'https://www.google.com'
      },
      {
        'name': 'file2',
        'type': 'file',
        'url': 'https://www.google.com'
      }]
}];

function listContentsOf(tree, container = 'tree_container', depth = '1') {
  $('#' + container).append(`<ul id="${depth}" class="Container"> </ul>`);

  for (let i = 0; i < tree.length; i++) {
    if (tree[i].type == 'file') {

      $('#' + depth).append(`<li class="Node IsRoot ExpandOpen">
                              <div class="Expand"></div>
                              <div class="Content">${tree[i].name}</div>
                              </li>`);
    }
     else if (tree[i].type == 'folder') {

      $('#' + depth).append(`<li id="${i}child" class="Node IsRoot ExpandClosed">
                              <div class="Expand"></div>
                              <div class="Content">${tree[i].name}</div>
                            </li>`);
      let subID = depth + i;
      $('#' + depth).append(`<li id="${subID}holder" class="Node ExpandLeaf"></li>`);

      open_close(i,subID);
      listContentsOf(tree[i].contents, subID + 'holder', subID);
    }
  }
};
function open_close(idx, id) {
  $(`#${idx}child`).click(function () {
    $(`#${id}holder`).toggle(10);
    $(this).toggleClass('ExpandClosed');
    $(this).toggleClass('ExpandOpen');
  });
}

listContentsOf(tree);
