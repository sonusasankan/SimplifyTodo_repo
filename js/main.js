function myFunction() {
  console.log('button clicked');
}
document.getElementById('add').addEventListener('click', function(){
  var value = document.getElementById('item').value;
  if(value) addItemTodo(value);

   function  addItemTodo(text){

     var list = document.getElementById('todo');
     var item = document.createElement('li');
     item.innerText= text;
     item.classList.add('collection-item');

     var remove = document.createElement('button');
     remove.classList.add('secondary-content');
     deleteIcon = document.createElement('i')
     deleteIcon.classList.add('material-icons');
     deleteIcon.innerHTML= 'delete';
     remove.addEventListener('click', removeItem);

     var complete = document.createElement('button');
     complete.classList.add('secondary-content');
     completeIcon = document.createElement('i')
     completeIcon.classList.add('material-icons');
     completeIcon.innerHTML= 'done';

     complete.appendChild(completeIcon);
     remove.appendChild(deleteIcon);
     item.appendChild(remove);
     item.appendChild(complete);
     list.appendChild(item);
     complete.addEventListener('click' , completedItem);

     document.getElementById('item').value= '';
     document.getElementById('item').focus();



    }

    function completedItem(text){

      this.classList.add('completed');
      var item = this.parentNode;
      var parent = item.parentNode;
       parent.removeChild(item);

       var list = document.getElementById('task_completed');
    //  var item = document.createElement('li');
    //  item.innerText= text;
    //  item.classList.add('collection-item');
        list.appendChild(item);

    }

    function removeItem() {
      var item = this.parentNode;
      var parent = item.parentNode;

       parent.removeChild(item);
    }

});
